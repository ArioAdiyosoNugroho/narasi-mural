import { useEffect, useRef, useState } from 'react';
import { ARTWORKS } from './data/galleryData.js';
import { useLenis } from './hooks/useLenis.js';
import StickyNavbar from './components/layout/StickyNavbar.jsx';
import HeroSection from './components/layout/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import GallerySection from './components/sections/GallerySection.jsx';
import CommissionSection from './components/sections/CommissionSection.jsx';
import BlogSection from './components/sections/BlogSection.jsx';
import NewsletterSection from './components/sections/NewsletterSection.jsx';
import { StickyFooter } from './components/ui/StickyFooter.jsx';
import Toast from './components/ui/Toast.jsx';
import CartModal from './components/modals/CartModal.jsx';
import SearchModal from './components/modals/SearchModal.jsx';
import CommissionModal from './components/modals/CommissionModal.jsx';
import BlogModal from './components/modals/BlogModal.jsx';

export default function App() {
  useLenis();

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [activeBlogModal, setActiveBlogModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message) => {
    setToastMessage(message);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    showToast(`Added "${product.name}" to collection!`);
  };

  const updateCartQty = (id, delta) => {
    setCart((previousCart) =>
      previousCart
        .map((item) => {
          if (item.id !== id) {
            return item;
          }

          const nextQuantity = item.quantity + delta;
          return nextQuantity > 0 ? { ...item, quantity: nextQuantity } : null;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    showToast('Inquiry submitted successfully! Our team will contact you.');
  };

  return (
    <div className="relative min-h-screen bg-beige-canvas text-[#1A1918] antialiased selection:bg-[#1E1C1B] selection:text-white">
      {toastMessage && <Toast message={toastMessage} />}

      <StickyNavbar
        cartItemCount={cartItemCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <HeroSection
      />

      <main className="w-full px-4 py-16 space-y-20 sm:px-6 md:px-8 lg:px-12 md:space-y-28">
        <AboutSection />
        <GallerySection onAddToCollection={addToCart} />
        <CommissionSection onOpenCommission={() => setIsCommissionOpen(true)} />
        {/* <BlogSection
          onOpenPost={setActiveBlogModal}
          onOpenArchive={() => showToast('Opening complete exhibition archive...')}
        /> */}
        <NewsletterSection />
      </main>

      <StickyFooter />

      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={updateCartQty}
        onCheckout={handleCheckout}
      />

      <SearchModal
        key={isSearchOpen ? 'search-open' : 'search-closed'}
        isOpen={isSearchOpen}
        products={ARTWORKS}
        onAddToCollection={addToCart}
        onClose={() => setIsSearchOpen(false)}
      />

      <CommissionModal
        key={isCommissionOpen ? 'commission-open' : 'commission-closed'}
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
        onSubmitSuccess={() => showToast('Commission request submitted successfully!')}
      />

      <BlogModal post={activeBlogModal} onClose={() => setActiveBlogModal(null)} />
    </div>
  );
}
