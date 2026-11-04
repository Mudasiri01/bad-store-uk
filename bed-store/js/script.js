/**
 * Kensington & Devon - Fine British Beds & Mattresses
 * Global Interactivity, Navigation, Search, Quick View & UI Interactions
 */

// Fallback image in case of CDN or network glitch
const GLOBAL_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80';

// Global capture-phase error listener for all images
window.addEventListener('error', (event) => {
  if (event.target && event.target.tagName === 'IMG') {
    const img = event.target;
    if (img.src !== GLOBAL_IMAGE_FALLBACK) {
      img.onerror = null;
      img.src = GLOBAL_IMAGE_FALLBACK;
    }
  }
}, true);

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initBackToTop();
  initSearchSystem();
  initQuickViewModal();
  initNewsletterForms();
  initMockAccountSystem();
  initCheckoutForm();
});

/* -------------------------------------------------------------------------- */
/* Sticky Navigation & Scroll Spy                                             */
/* -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled', 'shadow-sm');
    } else {
      header.classList.remove('is-scrolled', 'shadow-sm');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* -------------------------------------------------------------------------- */
/* Back to Top Smooth Scroll                                                  */
/* -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Live Search System with Autocomplete & Instant Results                     */
/* -------------------------------------------------------------------------- */
function initSearchSystem() {
  const searchInput = document.getElementById('globalSearchInput');
  const searchResultsContainer = document.getElementById('globalSearchResults');
  const searchModalEl = document.getElementById('searchModal');

  if (!searchInput || !searchResultsContainer) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResultsContainer.innerHTML = `
        <div class="p-4 text-center text-muted">
          <i class="bi bi-search fs-3 d-block mb-2 text-gold"></i>
          <p class="mb-1">Type at least 2 characters to search beds, mattresses & furniture...</p>
          <div class="quick-tags d-flex justify-content-center gap-2 flex-wrap mt-3">
            <span class="badge bg-light text-dark border cursor-pointer quick-search-tag">Chesterfield</span>
            <span class="badge bg-light text-dark border cursor-pointer quick-search-tag">Ottoman</span>
            <span class="badge bg-light text-dark border cursor-pointer quick-search-tag">Pocket Sprung</span>
            <span class="badge bg-light text-dark border cursor-pointer quick-search-tag">Velvet</span>
            <span class="badge bg-light text-dark border cursor-pointer quick-search-tag">Headboard</span>
          </div>
        </div>
      `;
      attachQuickSearchTags();
      return;
    }

    if (typeof PRODUCTS === 'undefined') return;

    const matched = PRODUCTS.filter(p => {
      return p.name.toLowerCase().includes(query) ||
             p.category.toLowerCase().includes(query) ||
             p.description.toLowerCase().includes(query) ||
             (p.materials && p.materials.some(m => m.toLowerCase().includes(query)));
    });

    if (matched.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="p-4 text-center">
          <p class="text-muted mb-1">No luxury pieces matching "<strong>${escapeHtml(query)}</strong>"</p>
          <p class="small text-muted">Try searching for "Divan", "Ottoman", "Pocket Sprung", or "Linen".</p>
        </div>
      `;
      return;
    }

    searchResultsContainer.innerHTML = `
      <div class="p-2 border-bottom bg-ivory text-muted small px-3">
        Found ${matched.length} luxury item${matched.length > 1 ? 's' : ''}
      </div>
      <div class="list-group list-group-flush">
        ${matched.map(p => `
          <a href="product.html?id=${p.id}" class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 px-3">
            <img src="${p.images[0]}" alt="${p.name}" class="rounded" style="width: 60px; height: 60px; object-fit: cover;">
            <div class="flex-grow-1">
              <span class="badge bg-cream text-charcoal border small mb-1">${p.category}</span>
              <h6 class="mb-0 font-serif fs-6">${p.name}</h6>
              <div class="text-muted small">From £${p.basePrice.toLocaleString('en-GB')} ${p.oldPrice ? `<del class="ms-1">£${p.oldPrice.toLocaleString('en-GB')}</del>` : ''}</div>
            </div>
            <i class="bi bi-arrow-right text-gold fs-5"></i>
          </a>
        `).join('')}
      </div>
    `;
  });

  function attachQuickSearchTags() {
    searchResultsContainer.querySelectorAll('.quick-search-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        searchInput.value = tag.textContent.trim();
        searchInput.dispatchEvent(new Event('input'));
      });
    });
  }

  attachQuickSearchTags();

  // Focus search input when modal opens
  if (searchModalEl) {
    searchModalEl.addEventListener('shown.bs.modal', () => {
      searchInput.focus();
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Quick View Modal System                                                    */
/* -------------------------------------------------------------------------- */
function initQuickViewModal() {
  const modalEl = document.getElementById('quickViewModal');
  if (!modalEl) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-action="quick-view"]');
    if (!trigger) return;

    e.preventDefault();
    const productId = trigger.dataset.productId;
    if (!productId || typeof getProductById !== 'function') return;

    const product = getProductById(productId);
    if (!product) return;

    populateQuickViewModal(product);

    if (typeof bootstrap !== 'undefined') {
      const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.show();
    }
  });
}

function populateQuickViewModal(product) {
  const modalEl = document.getElementById('quickViewModal');
  if (!modalEl) return;

  // Track currently selected configuration
  let selectedSize = product.sizes ? product.sizes.find(s => s.isDefault) || product.sizes[0] : null;
  let selectedColour = product.colours ? product.colours.find(c => c.isDefault) || product.colours[0] : null;
  let selectedStorage = product.storageOptions ? product.storageOptions.find(o => o.isDefault) || product.storageOptions[0] : null;
  let currentPrice = calculatePrice(product, selectedSize, selectedStorage);
  let quantity = 1;

  // Title, category, badges
  const titleEl = modalEl.querySelector('.qv-product-title');
  const catEl = modalEl.querySelector('.qv-product-category');
  const badgeEl = modalEl.querySelector('.qv-product-badge');
  const ratingEl = modalEl.querySelector('.qv-product-rating');
  const priceEl = modalEl.querySelector('.qv-product-price');
  const oldPriceEl = modalEl.querySelector('.qv-product-old-price');
  const descEl = modalEl.querySelector('.qv-product-desc');
  const linkEl = modalEl.querySelector('.qv-product-link');
  const mainImg = modalEl.querySelector('.qv-main-image');
  const thumbContainer = modalEl.querySelector('.qv-thumbnails');
  const sizeContainer = modalEl.querySelector('.qv-sizes-container');
  const colourContainer = modalEl.querySelector('.qv-colours-container');
  const storageContainer = modalEl.querySelector('.qv-storage-container');
  const qtyInput = modalEl.querySelector('.qv-qty-input');
  const addBtn = modalEl.querySelector('.qv-add-to-cart-btn');

  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = product.category;
  if (descEl) descEl.textContent = product.shortDesc || product.description;
  if (linkEl) linkEl.href = `product.html?id=${product.id}`;

  if (badgeEl) {
    if (product.badge) {
      badgeEl.textContent = product.badge;
      badgeEl.className = `badge bg-gold text-dark mb-2 font-sans text-uppercase px-2 py-1`;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  if (ratingEl) {
    ratingEl.innerHTML = `
      <span class="text-gold me-1">${renderStarRating(product.rating)}</span>
      <span class="text-muted small">${product.rating} (${product.reviewCount} reviews <span class="badge bg-light text-muted border">demo</span>)</span>
    `;
  }

  const updatePriceDisplay = () => {
    currentPrice = calculatePrice(product, selectedSize, selectedStorage);
    if (priceEl) priceEl.textContent = `£${currentPrice.toLocaleString('en-GB')}`;
    if (oldPriceEl) {
      if (product.oldPrice && !selectedSize?.price) {
        oldPriceEl.textContent = `£${product.oldPrice.toLocaleString('en-GB')}`;
        oldPriceEl.style.display = 'inline';
      } else {
        oldPriceEl.style.display = 'none';
      }
    }
  };

  updatePriceDisplay();

  // Images & thumbnails
  if (mainImg) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
  }

  if (thumbContainer && product.images) {
    thumbContainer.innerHTML = product.images.map((img, idx) => `
      <button type="button" class="btn p-0 border rounded overflow-hidden qv-thumb ${idx === 0 ? 'border-dark' : 'opacity-75'}" data-img="${img}" style="width: 54px; height: 54px;">
        <img src="${img}" alt="Thumbnail ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
      </button>
    `).join('');

    thumbContainer.querySelectorAll('.qv-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbContainer.querySelectorAll('.qv-thumb').forEach(t => {
          t.classList.remove('border-dark');
          t.classList.add('opacity-75');
        });
        thumb.classList.add('border-dark');
        thumb.classList.remove('opacity-75');
        if (mainImg) mainImg.src = thumb.dataset.img;
      });
    });
  }

  // Sizes selection
  if (sizeContainer) {
    if (product.sizes && product.sizes.length > 0) {
      sizeContainer.innerHTML = `
        <label class="form-label small fw-semibold text-charcoal mb-2">Select UK Size:</label>
        <div class="d-flex flex-wrap gap-2">
          ${product.sizes.map(s => `
            <button type="button" class="btn btn-outline-dark btn-sm qv-size-btn ${s.key === selectedSize?.key ? 'active' : ''}" data-key="${s.key}">
              ${s.name.split(' (')[0]}
            </button>
          `).join('')}
        </div>
      `;

      sizeContainer.querySelectorAll('.qv-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sizeContainer.querySelectorAll('.qv-size-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedSize = product.sizes.find(s => s.key === btn.dataset.key);
          updatePriceDisplay();
        });
      });
      sizeContainer.parentElement.style.display = 'block';
    } else {
      sizeContainer.parentElement.style.display = 'none';
    }
  }

  // Colours selection
  if (colourContainer) {
    if (product.colours && product.colours.length > 0) {
      colourContainer.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
          <label class="form-label small fw-semibold text-charcoal mb-0">Upholstery Colour:</label>
          <span class="small text-muted qv-selected-colour-name">${selectedColour?.name || ''}</span>
        </div>
        <div class="d-flex gap-2">
          ${product.colours.map(c => `
            <button type="button" class="swatch-btn ${c.name === selectedColour?.name ? 'active' : ''}" style="background-color: ${c.hex}; width: 28px; height: 28px; border-radius: 50%; border: 2px solid ${c.name === selectedColour?.name ? '#252525' : '#eae3d9'};" title="${c.name}" data-name="${c.name}">
            </button>
          `).join('')}
        </div>
      `;

      colourContainer.querySelectorAll('.swatch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          colourContainer.querySelectorAll('.swatch-btn').forEach(b => {
            b.classList.remove('active');
            b.style.borderColor = '#eae3d9';
          });
          btn.classList.add('active');
          btn.style.borderColor = '#252525';
          selectedColour = product.colours.find(c => c.name === btn.dataset.name);
          const nameSpan = colourContainer.querySelector('.qv-selected-colour-name');
          if (nameSpan) nameSpan.textContent = selectedColour.name;
        });
      });
      colourContainer.parentElement.style.display = 'block';
    } else {
      colourContainer.parentElement.style.display = 'none';
    }
  }

  // Quantity Stepper
  if (qtyInput) {
    qtyInput.value = 1;
    quantity = 1;
  }
  const qtyMinus = modalEl.querySelector('.qv-qty-minus');
  const qtyPlus = modalEl.querySelector('.qv-qty-plus');

  if (qtyMinus) {
    qtyMinus.onclick = () => {
      if (quantity > 1) {
        quantity--;
        if (qtyInput) qtyInput.value = quantity;
      }
    };
  }
  if (qtyPlus) {
    qtyPlus.onclick = () => {
      quantity++;
      if (qtyInput) qtyInput.value = quantity;
    };
  }

  // Add to Cart from Quick View
  if (addBtn) {
    addBtn.onclick = () => {
      if (window.luxuryCart) {
        window.luxuryCart.addItem({
          id: product.id,
          name: product.name,
          price: currentPrice,
          image: product.images[0],
          size: selectedSize ? selectedSize.name : 'Standard',
          colour: selectedColour ? selectedColour.name : 'Default',
          storage: selectedStorage ? selectedStorage.name : '',
          quantity: quantity,
          slug: product.slug
        });

        // Close modal
        if (typeof bootstrap !== 'undefined') {
          const modal = bootstrap.Modal.getInstance(modalEl);
          if (modal) modal.hide();
        }
      }
    };
  }
}

function calculatePrice(product, size, storage) {
  let price = product.basePrice;
  if (size && size.price) {
    price = size.price;
  } else if (size && size.priceMultiplier) {
    price = Math.round(product.basePrice * size.priceMultiplier);
  }
  if (storage && storage.priceAdd) {
    price += storage.priceAdd;
  }
  return price;
}

/* -------------------------------------------------------------------------- */
/* Newsletter Subscription Interactivity                                      */
/* -------------------------------------------------------------------------- */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value || !validateEmail(emailInput.value)) {
        if (window.luxuryCart) {
          window.luxuryCart.showToast("Please enter a valid UK email address", "error");
        }
        return;
      }

      const email = emailInput.value.trim();
      try {
        localStorage.setItem('kensington_subscribed_email', email);
      } catch (err) {}

      form.innerHTML = `
        <div class="alert alert-success d-flex align-items-center gap-3 p-3 mb-0 border-0 rounded-1" style="background-color: #EAE3D9; color: #252525;">
          <i class="bi bi-gift-fill text-gold fs-4"></i>
          <div>
            <h6 class="mb-1 font-serif">Welcome to Kensington & Devon</h6>
            <p class="mb-0 small">Thank you for subscribing. Use code <strong>SANCTUARY10</strong> at checkout for 10% off your first luxury bed or mattress order.</p>
          </div>
        </div>
      `;

      if (window.luxuryCart) {
        window.luxuryCart.showToast("Subscription confirmed! Welcome voucher unlocked.", "success");
      }
    });
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* -------------------------------------------------------------------------- */
/* Mock UK Account Login / Register Modal                                     */
/* -------------------------------------------------------------------------- */
function initMockAccountSystem() {
  const loginForm = document.getElementById('accountLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('#accountEmail')?.value || 'Customer';
      if (window.luxuryCart) {
        window.luxuryCart.showToast(`Welcome back, ${email.split('@')[0]}!`, 'success');
      }
      const modalEl = document.getElementById('accountModal');
      if (modalEl && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Mock UK Checkout Submission                                                */
/* -------------------------------------------------------------------------- */
function initCheckoutForm() {
  const checkoutForm = document.getElementById('checkoutForm');
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = checkoutForm.querySelector('#checkoutName')?.value || 'Valued Customer';
    const postcode = checkoutForm.querySelector('#checkoutPostcode')?.value || 'SW1A 1AA';
    const address = checkoutForm.querySelector('#checkoutAddress')?.value || 'High Street';
    const reference = 'KD-UK-' + Math.floor(100000 + Math.random() * 900000);

    const container = document.getElementById('checkoutModalBody');
    if (container) {
      container.innerHTML = `
        <div class="text-center py-4">
          <div class="mb-3">
            <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 64px; height: 64px;">
              <i class="bi bi-check-lg fs-1"></i>
            </span>
          </div>
          <h4 class="font-serif text-charcoal mb-2">Thank You For Your Order</h4>
          <p class="text-muted small mb-3">Order Confirmation: <strong class="text-gold font-monospace">${reference}</strong></p>
          <div class="bg-ivory p-3 rounded text-start mb-4 small border">
            <p class="mb-1"><strong>Delivery Recipient:</strong> ${escapeHtml(name)}</p>
            <p class="mb-1"><strong>Mainland UK Address:</strong> ${escapeHtml(address)}, ${escapeHtml(postcode.toUpperCase())}</p>
            <p class="mb-1"><strong>Service:</strong> 2-Person Room-of-Choice White Glove Delivery</p>
            <p class="mb-0 text-muted fst-italic">Our delivery dispatch concierge will SMS you 48 hours prior to arrange your 2-hour delivery slot.</p>
          </div>
          <p class="small text-muted mb-4">A confirmation receipt has been sent to your email. (Demonstration Store Checkout)</p>
          <button type="button" class="btn btn-dark px-4 py-2" data-bs-dismiss="modal" onclick="if(window.luxuryCart) window.luxuryCart.clearCart();">Return to Store</button>
        </div>
      `;
    }

    if (window.luxuryCart) {
      window.luxuryCart.clearCart();
      window.luxuryCart.showToast("Order placed successfully!", "success");
    }
  });
}

/* -------------------------------------------------------------------------- */
/* Helper Functions                                                           */
/* -------------------------------------------------------------------------- */
function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="bi bi-star-fill text-gold"></i> ';
  }
  if (halfStar) {
    stars += '<i class="bi bi-star-half text-gold"></i> ';
  }
  const remaining = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars += '<i class="bi bi-star text-muted opacity-50"></i> ';
  }
  return stars.trim();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
