/**
 * Kensington & Devon - Fine British Beds & Mattresses
 * Shopping Cart & Wishlist System
 * Persistent LocalStorage & UK Checkout Simulation
 */

class LuxuryCart {
  constructor() {
    this.storageKey = 'kensington_devon_cart_v1';
    this.wishlistKey = 'kensington_devon_wishlist_v1';
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.freeDeliveryThreshold = 100; // Free delivery over £100
    this.standardDeliveryFee = 35; // Standard UK delivery under £100
    this.init();
  }

  init() {
    this.updateCounters();
    this.renderCartDrawer();
    this.attachGlobalListeners();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
    this.updateCounters();
    this.renderCartDrawer();
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem(this.wishlistKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(this.wishlistKey, JSON.stringify(this.wishlist));
    } catch (e) {}
    this.updateCounters();
    this.renderWishlistDrawer();
  }

  // --- Cart Operations ---
  addItem(item) {
    // Generate unique key based on id, size, and colour
    const variationKey = `${item.id}_${item.size || 'standard'}_${item.colour || 'default'}_${item.storage || 'none'}`;
    const existingIndex = this.cart.findIndex(i => i.variationKey === variationKey);

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += (item.quantity || 1);
    } else {
      this.cart.push({
        variationKey,
        id: item.id,
        name: item.name,
        price: Number(item.price),
        image: item.image,
        size: item.size || 'King (5\'0" x 6\'6")',
        colour: item.colour || 'Standard Finish',
        storage: item.storage || '',
        quantity: item.quantity || 1,
        slug: item.slug
      });
    }

    this.saveCart();
    this.showToast(`Added to your basket: ${item.name}`, 'success');
    this.openCart();
  }

  updateQuantity(variationKey, delta) {
    const itemIndex = this.cart.findIndex(i => i.variationKey === variationKey);
    if (itemIndex > -1) {
      const newQty = this.cart[itemIndex].quantity + delta;
      if (newQty <= 0) {
        this.removeItem(variationKey);
      } else {
        this.cart[itemIndex].quantity = newQty;
        this.saveCart();
      }
    }
  }

  removeItem(variationKey) {
    const item = this.cart.find(i => i.variationKey === variationKey);
    const itemName = item ? item.name : 'Item';
    this.cart = this.cart.filter(i => i.variationKey !== variationKey);
    this.saveCart();
    this.showToast(`Removed ${itemName} from basket`, 'info');
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getDeliveryFee() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= this.freeDeliveryThreshold ? 0 : this.standardDeliveryFee;
  }

  getTotal() {
    return this.getSubtotal() + this.getDeliveryFee();
  }

  getItemCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // --- Wishlist Operations ---
  toggleWishlist(productId) {
    const id = parseInt(productId, 10);
    const index = this.wishlist.indexOf(id);
    let added = false;
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.showToast("Removed from your Wishlist", "info");
    } else {
      this.wishlist.push(id);
      this.showToast("Saved to your Wishlist", "success");
      added = true;
    }
    this.saveWishlist();
    this.updateWishlistButtons();
    return added;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(parseInt(productId, 10));
  }

  updateWishlistButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlistId, 10);
      const isFav = this.isInWishlist(id);
      btn.classList.toggle('active', isFav);
      const icon = btn.querySelector('i');
      if (icon) {
        if (isFav) {
          icon.className = 'bi bi-heart-fill text-danger';
        } else {
          icon.className = 'bi bi-heart';
        }
      }
    });
  }

  // --- UI & Rendering ---
  updateCounters() {
    const cartCount = this.getItemCount();
    const wishlistCount = this.wishlist.length;

    document.querySelectorAll('.cart-counter-badge').forEach(el => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? 'inline-flex' : 'none';
    });

    document.querySelectorAll('.wishlist-counter-badge').forEach(el => {
      el.textContent = wishlistCount;
      el.style.display = wishlistCount > 0 ? 'inline-flex' : 'none';
    });
  }

  renderCartDrawer() {
    const container = document.getElementById('cartDrawerItems');
    const footer = document.getElementById('cartDrawerFooter');
    const emptyState = document.getElementById('cartDrawerEmpty');
    const subtotalEl = document.getElementById('cartDrawerSubtotal');
    const deliveryEl = document.getElementById('cartDrawerDelivery');
    const totalEl = document.getElementById('cartDrawerTotal');
    const freeDeliveryNotice = document.getElementById('cartFreeDeliveryNotice');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      if (footer) footer.classList.add('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');
    if (footer) footer.classList.remove('d-none');

    const subtotal = this.getSubtotal();
    const delivery = this.getDeliveryFee();
    const total = this.getTotal();

    if (subtotalEl) subtotalEl.textContent = `£${subtotal.toLocaleString('en-GB', { minimumFractionDigits: 0 })}`;
    if (deliveryEl) {
      deliveryEl.textContent = delivery === 0 ? 'FREE (UK Mainland)' : `£${delivery}`;
      deliveryEl.className = delivery === 0 ? 'text-success fw-semibold' : 'fw-medium';
    }
    if (totalEl) totalEl.textContent = `£${total.toLocaleString('en-GB', { minimumFractionDigits: 0 })}`;

    if (freeDeliveryNotice) {
      if (subtotal >= this.freeDeliveryThreshold) {
        freeDeliveryNotice.innerHTML = `
          <div class="alert alert-success py-2 px-3 mb-3 d-flex align-items-center gap-2 small">
            <i class="bi bi-check-circle-fill text-success fs-6"></i>
            <span>You have unlocked <strong>Free UK White-Glove Delivery</strong></span>
          </div>`;
      } else {
        const remaining = this.freeDeliveryThreshold - subtotal;
        const progress = Math.min(100, Math.round((subtotal / this.freeDeliveryThreshold) * 100));
        freeDeliveryNotice.innerHTML = `
          <div class="delivery-threshold-bar mb-3">
            <div class="d-flex justify-content-between small mb-1 text-muted">
              <span>Add <strong>£${remaining}</strong> for Free UK Delivery</span>
              <span>${progress}%</span>
            </div>
            <div class="progress" style="height: 5px;">
              <div class="progress-bar bg-gold" style="width: ${progress}%"></div>
            </div>
          </div>`;
      }
    }

    container.innerHTML = this.cart.map(item => `
      <div class="cart-item-row p-3 border-bottom d-flex gap-3 align-items-start" data-key="${item.variationKey}">
        <a href="product.html?id=${item.id}" class="cart-item-img-link flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="rounded-1" style="width: 76px; height: 76px; object-fit: cover;">
        </a>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <h6 class="mb-0 font-serif fs-6">
              <a href="product.html?id=${item.id}" class="text-charcoal text-decoration-none hover-gold">${item.name}</a>
            </h6>
            <button class="btn btn-link text-muted p-0 ms-2 remove-cart-item" data-key="${item.variationKey}" title="Remove item" aria-label="Remove item">
              <i class="bi bi-x-lg" style="font-size: 13px;"></i>
            </button>
          </div>
          <div class="cart-item-details small text-muted mb-2">
            ${item.size ? `<span class="d-block"><i class="bi bi-rulers me-1"></i>Size: ${item.size}</span>` : ''}
            ${item.colour ? `<span class="d-block"><i class="bi bi-palette me-1"></i>Finish: ${item.colour}</span>` : ''}
            ${item.storage ? `<span class="d-block"><i class="bi bi-box me-1"></i>Storage: ${item.storage}</span>` : ''}
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="quantity-stepper d-inline-flex align-items-center border rounded">
              <button class="btn btn-sm px-2 py-0 qty-minus" data-key="${item.variationKey}" aria-label="Decrease quantity">-</button>
              <span class="px-2 small fw-semibold">${item.quantity}</span>
              <button class="btn btn-sm px-2 py-0 qty-plus" data-key="${item.variationKey}" aria-label="Increase quantity">+</button>
            </div>
            <div class="text-end">
              <span class="fw-semibold text-charcoal">£${(item.price * item.quantity).toLocaleString('en-GB')}</span>
              ${item.quantity > 1 ? `<span class="text-muted small d-block">(£${item.price.toLocaleString('en-GB')} each)</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach event listeners for buttons in cart drawer
    container.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => this.updateQuantity(btn.dataset.key, -1));
    });
    container.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => this.updateQuantity(btn.dataset.key, 1));
    });
    container.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.addEventListener('click', () => this.removeItem(btn.dataset.key));
    });
  }

  renderWishlistDrawer() {
    const container = document.getElementById('wishlistDrawerItems');
    const emptyState = document.getElementById('wishlistDrawerEmpty');
    if (!container) return;

    if (this.wishlist.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');

    const wishlistProducts = this.wishlist
      .map(id => typeof getProductById === 'function' ? getProductById(id) : null)
      .filter(p => p !== null && p !== undefined);

    container.innerHTML = wishlistProducts.map(p => `
      <div class="p-3 border-bottom d-flex gap-3 align-items-center">
        <img src="${p.images[0]}" alt="${p.name}" class="rounded-1" style="width: 70px; height: 70px; object-fit: cover;">
        <div class="flex-grow-1">
          <h6 class="mb-1 font-serif fs-6">
            <a href="product.html?id=${p.id}" class="text-charcoal text-decoration-none">${p.name}</a>
          </h6>
          <div class="text-gold fw-semibold mb-2">£${p.basePrice.toLocaleString('en-GB')}</div>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-dark px-3 py-1 wishlist-add-to-cart" data-id="${p.id}">
              <i class="bi bi-bag-plus me-1"></i> Add to Basket
            </button>
            <button class="btn btn-sm btn-outline-secondary px-2 py-1 wishlist-remove-item" data-id="${p.id}" title="Remove from wishlist">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.wishlist-add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        const prod = getProductById(id);
        if (prod) {
          this.addItem({
            id: prod.id,
            name: prod.name,
            price: prod.basePrice,
            image: prod.images[0],
            size: prod.sizes && prod.sizes[0] ? prod.sizes[0].name : "Standard",
            colour: prod.colours && prod.colours[0] ? prod.colours[0].name : "Standard",
            quantity: 1,
            slug: prod.slug
          });
        }
      });
    });

    container.querySelectorAll('.wishlist-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleWishlist(btn.dataset.id);
        this.renderWishlistDrawer();
      });
    });
  }

  openCart() {
    const el = document.getElementById('cartDrawer');
    if (el && typeof bootstrap !== 'undefined') {
      const offcanvas = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
      offcanvas.show();
    }
  }

  openWishlist() {
    const el = document.getElementById('wishlistDrawer');
    if (el && typeof bootstrap !== 'undefined') {
      const offcanvas = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
      offcanvas.show();
    }
  }

  attachGlobalListeners() {
    // Add to cart trigger buttons globally
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="add-to-cart"]');
      if (btn) {
        e.preventDefault();
        const id = btn.dataset.productId;
        if (!id) return;
        const prod = typeof getProductById === 'function' ? getProductById(id) : null;
        if (prod) {
          this.addItem({
            id: prod.id,
            name: prod.name,
            price: prod.basePrice,
            image: prod.images[0],
            size: prod.sizes ? prod.sizes.find(s => s.isDefault)?.name || prod.sizes[0].name : 'Standard',
            colour: prod.colours ? prod.colours.find(c => c.isDefault)?.name || prod.colours[0].name : 'Default Finish',
            quantity: 1,
            slug: prod.slug
          });
        }
      }

      // Wishlist trigger button globally
      const wishBtn = e.target.closest('[data-action="toggle-wishlist"]');
      if (wishBtn) {
        e.preventDefault();
        const id = wishBtn.dataset.wishlistId;
        if (id) {
          this.toggleWishlist(id);
        }
      }

      // Open cart drawer triggers
      const openCartBtn = e.target.closest('[data-action="open-cart"]');
      if (openCartBtn) {
        e.preventDefault();
        this.openCart();
      }

      // Open wishlist drawer triggers
      const openWishlistBtn = e.target.closest('[data-action="open-wishlist"]');
      if (openWishlistBtn) {
        e.preventDefault();
        this.openWishlist();
      }
    });

    // Checkout modal button trigger
    const checkoutBtn = document.getElementById('btnProceedCheckout');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        // Close offcanvas cart and open checkout modal
        const cartDrawerEl = document.getElementById('cartDrawer');
        if (cartDrawerEl && typeof bootstrap !== 'undefined') {
          const offcanvas = bootstrap.Offcanvas.getInstance(cartDrawerEl);
          if (offcanvas) offcanvas.hide();
        }
        const checkoutModalEl = document.getElementById('checkoutModal');
        if (checkoutModalEl && typeof bootstrap !== 'undefined') {
          const modal = new bootstrap.Modal(checkoutModalEl);
          this.populateCheckoutModal();
          modal.show();
        }
      });
    }
  }

  populateCheckoutModal() {
    const subtotal = this.getSubtotal();
    const delivery = this.getDeliveryFee();
    const total = this.getTotal();

    const subEl = document.getElementById('checkoutModalSubtotal');
    const delEl = document.getElementById('checkoutModalDelivery');
    const totEl = document.getElementById('checkoutModalTotal');
    const klarnaEl = document.getElementById('checkoutModalKlarna');
    const listEl = document.getElementById('checkoutModalItems');

    if (subEl) subEl.textContent = `£${subtotal.toLocaleString('en-GB')}`;
    if (delEl) delEl.textContent = delivery === 0 ? 'FREE (UK Mainland)' : `£${delivery}`;
    if (totEl) totEl.textContent = `£${total.toLocaleString('en-GB')}`;
    if (klarnaEl) {
      const instalment = Math.round(total / 3);
      klarnaEl.textContent = `Or 3 interest-free payments of £${instalment} with Klarna`;
    }

    if (listEl) {
      listEl.innerHTML = this.cart.map(i => `
        <li class="d-flex justify-content-between align-items-center py-2 border-bottom small">
          <div>
            <strong>${i.name}</strong> (${i.size})
            <div class="text-muted">Qty: ${i.quantity} &bull; ${i.colour}</div>
          </div>
          <span class="fw-semibold">£${(i.price * i.quantity).toLocaleString('en-GB')}</span>
        </li>
      `).join('');
    }
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white border-0 shadow-lg';
    toastEl.style.backgroundColor = type === 'success' ? '#252525' : '#333333';
    toastEl.style.borderLeft = type === 'success' ? '4px solid #B99A68' : '4px solid #A99B8C';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2 py-3 px-3">
          <i class="bi ${type === 'success' ? 'bi-check-circle text-gold' : 'bi-info-circle text-gold'} fs-5"></i>
          <span class="small font-sans">${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    container.appendChild(toastEl);
    if (typeof bootstrap !== 'undefined') {
      const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
      toast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    } else {
      setTimeout(() => toastEl.remove(), 3500);
    }
  }
}

// Initialize on script load
let luxuryCart;
document.addEventListener('DOMContentLoaded', () => {
  luxuryCart = new LuxuryCart();
});
