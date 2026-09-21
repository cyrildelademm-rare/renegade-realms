import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

/* =========================================================
   ICONS
========================================================= */

function SearchIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  );
} 

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h11v11H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 8 4 4 5-7 5 7 4-4-2 11H5L3 8Z" />
      <path d="M5 19h14" />
    </svg>
  );
}

function UserIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.7-4 2.8-6 6.5-6s5.8 2 6.5 6" />
    </svg>
  );
}

function BagIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8.5h14l-1 12H6l-1-12Z" />
      <path d="M9 8.5V6a3 3 0 0 1 6 0v2.5" />
    </svg>
  );
}

function ArrowUpRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CloseIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function PlusIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function MinusIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

/* =========================================================
   SOCIAL ICONS
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="17.4"
        cy="6.7"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.2 3v11.1a4.3 4.3 0 1 1-3.5-4.2v3.3a1.2 1.2 0 1 0 .2.9V3h3.3c.2 1.5 1.1 2.6 2.7 3.1V9c-1-.2-1.9-.7-2.7-1.3V3h0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 3h4.6l4.1 5.8L17.6 3H20l-6.2 7.2L20.5 21h-4.6l-3.9-5.2L7.6 21H5l6.2-7.3L4 3Zm3.5 1.8 8.9 14.4h1.9L9.4 4.8H7.5Z" />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const heroImages = [
  "/Website%20media/hero/IMG_5315.JPG",
  "/Website%20media/hero/IMG_5312.JPG",
];

const exploreImages = [
  {
    src: "/Website%20media/collections/IMG_5324.JPG",
    alt: "Renegade Realms lifestyle shoot",
  },
  {
    src: "/Website%20media/collections/IMG_5340.JPG",
    alt: "Renegade Realms lifestyle shoot",
  },
];

const products = [
  {
    id: 1,
    name: "THREE WISE MONKEY TEE",
    price: 329,
    category: "T-SHIRT",
    color: "BLACK",
    image: "/Website%20media/products/IMG_2266.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 2,
    name: "RENEGADE GLOBIN TEE",
    price: 229,
    category: "T-SHIRT",
    color: "WHITE",
    image: "/Website%20media/products/IMG_5335.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 3,
    name: "RENEGADE GLOBIN TEE",
    price: 229,
    category: "T-SHIRT",
    color: "BLACK",
    image: "/Website%20media/products/IMG_5336.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "PRIDE OF GHANA TEE",
    price: 303,
    category: "T-SHIRT",
    color: "BLACK",
    image: "/Website%20media/products/IMG_E5334.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 5,
    name: "STAY FLY TEE",
    price: 250,
    category: "T-SHIRT",
    color: "BLACK",
    image: "/Website%20media/products/IMG_E5337.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 6,
    name: "STAY FLY TEE",
    price: 250,
    category: "T-SHIRT",
    color: "WHITE",
    image: "/Website%20media/products/IMG_E5338.png",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
];

const merchCategories = [
  "ALL PIECES",
  "TEES",
  "OUTERWEAR",
  "BOTTOMS",
  "ACCESSORIES",
  "LIMITED",
];

/* =========================================================
   APP
========================================================= */

function App() {

  const [cart, setCart] = useState([]);

  const [searchOpen, setSearchOpen] = useState(false);

  const [accountOpen, setAccountOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
const [accountName, setAccountName] = useState("");
const [accountEmail, setAccountEmail] = useState(""); 
const [accountPassword, setAccountPassword] = useState("");
const [showAccountPassword, setShowAccountPassword] = useState(false);

  const [createAccount, setCreateAccount] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);

  const [aboutVideoPlaying, setAboutVideoPlaying] = useState(false);

  const [activeNav, setActiveNav] = useState(null);

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const [cartToast, setCartToast] = useState(null);
  /* =======================================================
     CART COUNT
  ======================================================= */

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  /* =======================================================
     HERO IMAGE TIMING
  ======================================================= */

  useEffect(() => {
    const heroTimer = setTimeout(() => {
      setHeroImageIndex(1);
    }, 10000);

    return () => clearTimeout(heroTimer);
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    const overlayOpen =
  searchOpen ||
  accountOpen ||
  cartOpen ||
  aboutOpen ||
  checkoutOpen;

document.body.style.overflow = overlayOpen ? "hidden" : "";

return () => {
  document.body.style.overflow = "";
};
}, [
  searchOpen,
  accountOpen,
  cartOpen,
  aboutOpen,
  checkoutOpen,
]);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      setSearchOpen(false);
setAccountOpen(false);
setCartOpen(false);
setCheckoutOpen(false);
setAboutOpen(false);
setActiveNav(null);
setCartToast(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     CART TOAST AUTO HIDE
  ======================================================= */

  useEffect(() => {
    if (!cartToast) return;

    const toastTimer = setTimeout(() => {
      setCartToast(null);
    }, 3500);

    return () => clearTimeout(toastTimer);
  }, [cartToast]);

  /* =======================================================
     CART SUBTOTAL
  ======================================================= */

  const cartSubtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  /* =======================================================
     CART ITEM KEY
  ======================================================= */

  const getCartItemKey = (product, size = null) =>
    `${product.id}-${size || "default"}`;

  /* =======================================================
     CART FUNCTIONS
  ======================================================= */

  const addToCart = (product, size = product.size ?? null) => {
    const cartKey = getCartItemKey(product, size);

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.cartKey === cartKey
      );

      if (existing) {
        return currentCart.map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          size,
          cartKey,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  const quickAddToCart = (product, size) => {
    const cartKey = getCartItemKey(product, size);

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.cartKey === cartKey
      );

      if (existing) {
        return currentCart.map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          size,
          cartKey,
          quantity: 1,
        },
      ];
    });

    setCartToast({
      product,
      size,
    });
  };

  const decreaseQuantity = (cartKey) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartKey) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartKey !== cartKey)
    );
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveNav(null);
  };

  /* =======================================================
     ABOUT
  ======================================================= */

 const openAbout = () => {
  setAboutVideoPlaying(false);
  setAboutOpen(true);
  setActiveNav(null);
};

const closeAbout = () => {
  setAboutOpen(false);
  setAboutVideoPlaying(false);
};

const enterRealm = () => {
  closeAbout();
  scrollToSection("about");
};
  /* =======================================================
     SEARCH
  ======================================================= */

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };
  const handleAccountSubmit = (event) => {
  event.preventDefault();

  if (!accountEmail.trim() || !accountPassword.trim()) {
    return;
  }

  if (createAccount && !accountName.trim()) {
    return;
  }

  const newCustomer = {
    name: createAccount
      ? accountName.trim()
      : "RENEGADE CUSTOMER",
    email: accountEmail.trim(),
  };

  setCustomer(newCustomer);

  setAccountName("");
  setAccountEmail("");
  setAccountPassword("");
  setCreateAccount(false);
  setAccountOpen(false);
};

  /* =======================================================
     EXPLORE IMAGE CURSOR INTERACTION
  ======================================================= */

  const handleExploreMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    const moveX = ((x - 50) / 50) * 8;
    const moveY = ((y - 50) / 50) * 8;

    const rotateY = ((x - 50) / 50) * 2;
    const rotateX = ((50 - y) / 50) * 2;

    event.currentTarget.style.setProperty(
      "--explore-x",
      `${moveX}px`
    );

    event.currentTarget.style.setProperty(
      "--explore-y",
      `${moveY}px`
    );

    event.currentTarget.style.setProperty(
      "--explore-rx",
      `${rotateX}deg`
    );

    event.currentTarget.style.setProperty(
      "--explore-ry",
      `${rotateY}deg`
    );
  };

  const handleExploreMouseLeave = (event) => {
    event.currentTarget.style.setProperty(
      "--explore-x",
      "0px"
    );

    event.currentTarget.style.setProperty(
      "--explore-y",
      "0px"
    );

    event.currentTarget.style.setProperty(
      "--explore-rx",
      "0deg"
    );

    event.currentTarget.style.setProperty(
      "--explore-ry",
      "0deg"
    );
  };

  /* =======================================================
     NEWSLETTER
  ======================================================= */

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) return;

    setNewsletterEmail("");
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="rr-site">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="rr-hero" id="home">

        <div className="rr-hero-image">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={
                index === heroImageIndex ? "active" : ""
              }
              aria-hidden={index !== heroImageIndex}
            />
          ))}
        </div>

        <div className="rr-hero-shade" />
        <div className="rr-hero-noise" />
        
        {/* NAV */}

        <nav className="rr-main-nav">

          {/* INTRODUCTION */}

          <div
            className="rr-nav-item-wrap"
            onMouseEnter={() =>
              setActiveNav("introduction")
            }
            onMouseLeave={() =>
              setActiveNav(null)
            }
          >
            <button
              type="button"
              className="rr-nav-item"
              onClick={openAbout}
            >
              <span>INTRODUCTION</span>
            </button>

            <div
              className={`rr-hover-panel rr-introduction-panel ${
                activeNav === "introduction"
                  ? "is-active"
                  : ""
              }`}
            >
              <div className="rr-panel-inner">

                <div className="rr-panel-copy">

                  <span className="rr-panel-kicker">
                    RENEGADE REALMS
                  </span>

                  <h3>
                    CYRIL DELADEM KODZO
                    <br />
                    &amp; CHRIS DELA AGBENEYGA
                  </h3>

                  <p>
                    Renegade Realms is a creative
                    world built by two young
                    Ghanaian creatives, Cyril Deladem
                    Kodzo and Chris Dela Agbenyega.
                  </p>

                  <p>
                    Rooted in Accra, we create from
                    curiosity, individuality, and the
                    belief that perception shapes
                    reality. Renegade Realms is our
                    space to explore fashion, culture,
                    identity, and ideas without
                    following a predetermined path.
                  </p>

                  <button
                    type="button"
                    className="rr-panel-link"
                    onClick={enterRealm}
                  >
                    ENTER THE REALM
                    <ArrowUpRight />
                  </button>

                </div>

                <div className="rr-panel-images">

                  <div className="rr-photo-placeholder rr-space-photo rr-space-photo-one">
                    <span>RR / 001</span>
                  </div>

                  <div className="rr-photo-placeholder rr-space-photo rr-space-photo-two">
                    <span>RR / 002</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* MERCH */}

          <div
            className="rr-nav-item-wrap"
            onMouseEnter={() =>
              setActiveNav("merch")
            }
            onMouseLeave={() =>
              setActiveNav(null)
            }
          >
            <button
              type="button"
              className="rr-nav-item"
              onClick={() =>
                scrollToSection("shop")
              }
            >
              <span>MERCH</span>
            </button>

            <div
              className={`rr-hover-panel rr-merch-panel ${
                activeNav === "merch"
                  ? "is-active"
                  : ""
              }`}
            >
              <div className="rr-merch-list">
                {merchCategories.map(
                  (category, index) => (
                    <button
                      type="button"
                      className="rr-merch-item"
                      key={category}
                      onClick={() =>
                        scrollToSection("shop")
                      }
                    >
                      <span className="rr-merch-number">
                        0{index + 1}
                      </span>

                      <span className="rr-merch-name">
                        {category}
                      </span>

                      <span className="rr-merch-arrow">
                        <ArrowUpRight />
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* COLLABS */}

          <div
            className="rr-nav-item-wrap"
            onMouseEnter={() =>
              setActiveNav("collabs")
            }
            onMouseLeave={() =>
              setActiveNav(null)
            }
          >
            <button
              type="button"
              className="rr-nav-item"
              onClick={() =>
                scrollToSection("feature")
              }
            >
              <span>COLLABS</span>
            </button>

            <div
              className={`rr-hover-panel rr-collabs-panel ${
                activeNav === "collabs"
                  ? "is-active"
                  : ""
              }`}
            >
              <div className="rr-collabs-inner">

                <span className="rr-panel-kicker">
                  SELECTED PROJECTS
                </span>

                <h3>
                  DIFFERENT
                  <br />
                  WORLDS.
                </h3>

                <div className="rr-collabs-line">
                  <span>RR × UNKNOWN</span>
                  <span>COMING SOON</span>
                </div>

                <div className="rr-collabs-line">
                  <span>RR × ORBITAL</span>
                  <span>2026</span>
                </div>

              </div>
            </div>
          </div>

        </nav>

        {/* HERO CONTROLS */}

        <div className="rr-hero-controls">

          <button
            type="button"
            className="rr-icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon size={24} />
          </button>

          <button
            type="button"
            className="rr-icon-button"
            aria-label="Account"
            onClick={() => setAccountOpen(true)}
          >
            <UserIcon size={24} />
          </button>

          <button
            type="button"
            className="rr-icon-button rr-cart-control"
            aria-label={`Cart with ${cartCount} items`}
            onClick={() => setCartOpen(true)}
          >
            <BagIcon size={24} />

            {cartCount > 0 && (
              <span className="rr-cart-count">
                {cartCount}
              </span>
            )}
          </button>

        </div>

        {/* HERO ACTIONS */}

        <div className="rr-hero-actions">

  <button
    type="button"
    className="rr-hero-action-button"
    onClick={openAbout}
    aria-label="Open About Us"
  >
    <span>ABOUT US</span>
  </button>

  <button
    type="button"
    className="rr-hero-action-button"
    onClick={() => scrollToSection("shop")}
    aria-label="Shop Now"
  >
    <span>SHOP NOW</span>
  </button>

</div>
        {/* SCROLL */}

        <div className="rr-scroll-mark">
          <span>SCROLL TO EXPLORE</span>
          <span className="rr-scroll-line" />
        </div>

      </header>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="rr-marquee">
        <div className="rr-marquee-track">

          <span>RENEGADE REALMS</span>
          <span>•</span>
          <span>NO MAP / NO LIMITS</span>
          <span>•</span>
          <span>MADE FOR THE UNKNOWN</span>
          <span>•</span>

          <span>RENEGADE REALMS</span>
          <span>•</span>
          <span>NO MAP / NO LIMITS</span>
          <span>•</span>
          <span>MADE FOR THE UNKNOWN</span>
          <span>•</span>

        </div>
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>

        {/* ===================================================
            EXPLORE
        =================================================== */}

        <section
          className="rr-explore-new"
          id="about"
        >

          <div className="rr-explore-new-title">
            <span className="rr-section-eyebrow">
              
            </span>

            <h2>EXPLORE WHAT'S NEW</h2>
          </div>

          <div className="rr-explore-new-grid">

            {exploreImages.map((image) => (
              <div
                className="rr-explore-new-image"
                key={image.src}
                onMouseMove={
                  handleExploreMouseMove
                }
                onMouseLeave={
                  handleExploreMouseLeave
                }
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />

                <div className="rr-explore-new-overlay">

                  <span className="rr-explore-new-view">
  VIEW COLLECTION
</span>

                  <span className="rr-explore-new-collection">
                    STAY FLY COLLECTION
                  </span>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            SHOP
        =================================================== */}

        <section
          className="rr-shop"
          id="shop"
        >

          <div className="rr-section-label">
            <span>02</span>
            <span>SHOP</span>
          </div>

          <div className="rr-shop-header">

            <h2>ALL PRODUCTS</h2>

            <button
              type="button"
              className="rr-shop-all"
              onClick={() => {
                setSearchQuery("");
                setSearchOpen(true);
              }}
            >
              VIEW ALL
              <ArrowUpRight />
            </button>

          </div>

          <div className="rr-products-grid">

            {products.map((product, index) => (
              <article
                className={`rr-product-card ${
                  product.color === "BLACK"
                    ? "rr-product-card--dark"
                    : "rr-product-card--light"
                }`}
                key={product.id}
              >

                <div className="rr-product-image-wrap">

                  <img
                    className="rr-product-image"
                    src={product.image}
                    alt={`${product.name} ${product.color}`}
                  />

                  <div className="rr-product-image-overlay">

                    <div className="rr-quick-add">

                      <span className="rr-quick-add-label">
                        QUICK-ADD SELECT
                      </span>

                      <div className="rr-size-options">

                        {product.sizes.map(
                          (size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() =>
                                quickAddToCart(
                                  product,
                                  size
                                )
                              }
                              aria-label={`Add ${product.name} in size ${size}`}
                            >
                              {size}
                            </button>
                          )
                        )}

                      </div>

                    </div>

                  </div>

                  <span className="rr-product-index">
                    0{index + 1}
                  </span>

                </div>

                <div className="rr-product-info">

                  <div>
                    <h3 className="rr-product-name">
                      {product.name}
                    </h3>

                    <span className="rr-product-meta">
                      {product.category} /{" "}
                      {product.color}
                    </span>
                  </div>

                  <strong className="rr-product-price">
                    GH₵{product.price}
                  </strong>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ===================================================
            REALM / SPACE
        =================================================== */}

        <section
          className="rr-realm-space"
          id="newsletter"
        >

          <div className="rr-space-stars rr-space-stars-one" />
          <div className="rr-space-stars rr-space-stars-two" />
          <div className="rr-space-stars rr-space-stars-three" />

          <div className="rr-space-glow" />

          <div className="rr-astronaut rr-astronaut-left">
            <div className="rr-astronaut-helmet">
              <div className="rr-astronaut-face" />
            </div>

            <div className="rr-astronaut-body">
              <span />
              <span />
            </div>

            <div className="rr-astronaut-pack" />
          </div>

          <div className="rr-astronaut rr-astronaut-right">
            <div className="rr-astronaut-helmet">
              <div className="rr-astronaut-face" />
            </div>

            <div className="rr-astronaut-body">
              <span />
              <span />
            </div>

            <div className="rr-astronaut-pack" />
          </div>

          <div className="rr-realm-space-overlay" />

          <div className="rr-realm-space-content">

            <span className="rr-realm-space-eyebrow">
              
            </span>

            <h2>
              STAY IN THE
              <br />
              <em>REALM.</em>
            </h2>

            <p>
              New drops, limited pieces and
              transmissions from Renegade Realms.
            </p>

            <form
              className="rr-newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="rr-newsletter-input-wrap">

                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  value={newsletterEmail}
                  onChange={(event) =>
                    setNewsletterEmail(
                      event.target.value
                    )
              
                  }
                  required
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                >
                  <ArrowRight />
                </button>

              </div>
            </form>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="rr-footer">

        <div className="rr-footer-top">

          <div className="rr-footer-brand">

            <span>RENEGADE</span>
            <span>REALMS</span>

            <p>
              NO MAP.
              <br />
              NO LIMITS.
            </p>

          </div>

          <div className="rr-footer-column">

            <span className="rr-footer-label">
              EXPLORE
            </span>

            <button
              type="button"
              onClick={() =>
                scrollToSection("home")
              }
            >
              HOME
            </button>

            <button
              type="button"
              onClick={openAbout}
            >
              INTRODUCTION
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("shop")
              }
            >
              SHOP
            </button>

          </div>

          <div className="rr-footer-column rr-footer-social">

            <span className="rr-footer-label">
              SOCIAL
            </span>

            <a
              href="#instagram"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="#tiktok"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>

            <a
              href="#x"
              aria-label="X / Twitter"
            >
              <XIcon />
            </a>

          </div>

          <div className="rr-footer-column">

            <span className="rr-footer-label">
              CONTACT
            </span>

            <a href="mailto:renegaderealmsstore@gmail.com">
              renegaderealmsstore@gmail.com
            </a>

            <span className="rr-footer-contact">
              ACCRA - GHANA
            </span>

            <a href="tel:+233542978331">
              PHONE +233542978331
            </a>

          </div>

        </div>

        <div className="rr-footer-bottom">

          <span>
            © 2026 RENEGADE REALMS
          </span>

          <span>
            ALL RIGHTS RESERVED
          </span>

          <button
            type="button"
            onClick={() =>
              scrollToSection("home")
            }
          >
            BACK TO TOP
            <ArrowUpRight />
          </button>

        </div>

      </footer>

      {/* =====================================================
          FLOATING CART
      ===================================================== */}

      <button
        type="button"
        className="rr-floating-cart"
        onClick={() => setCartOpen(true)}
        aria-label={`Open bag with ${cartCount} items`}
      >
        <BagIcon size={26} />

        {cartCount > 0 && (
          <span className="rr-floating-cart-count">
            {cartCount}
          </span>
        )}
      </button>

      {/* =====================================================
          CART TOAST
      ===================================================== */}

      {cartToast &&
        createPortal(
          <div className="rr-cart-toast">

            <div className="rr-cart-toast-image">
              <img
                src={cartToast.product.image}
                alt={cartToast.product.name}
              />
            </div>

            <div className="rr-cart-toast-content">

              <span className="rr-cart-toast-label">
                ADDED TO BAG
              </span>

              <h3 className="rr-cart-toast-name">
                {cartToast.product.name}
              </h3>

              <span className="rr-cart-toast-size">
                SIZE: {cartToast.size}
              </span>

              <button
                type="button"
                className="rr-cart-toast-button"
                onClick={() => {
                  setCartToast(null);
                  setCartOpen(true);
                }}
              >
                VIEW BAG
              </button>

            </div>

          </div>,
          document.body
        )}

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <div
        className={`rr-search-overlay ${
          searchOpen ? "is-open" : ""
        }`}
        aria-hidden={!searchOpen}
      >

        <div className="rr-search-top">

          <span>
            SEARCH / RENEGADE REALMS
          </span>

          <button
            type="button"
            className="rr-overlay-close"
            onClick={closeSearch}
            aria-label="Close search"
          >
            CLOSE
            <CloseIcon />
          </button>

        </div>

        <div className="rr-search-content">

          <div className="rr-search-input-row">

            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="SEARCH THE REALM"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(
                  event.target.value
                )
              }
            />

            <SearchIcon size={28} />

          </div>

          <div className="rr-search-results">

            {filteredProducts.length > 0 ? (
              filteredProducts.map(
                (product) => (
                  <button
                    type="button"
                    className="rr-search-result"
                    key={product.id}
                    onClick={() => {
                      addToCart(
                        product,
                        product.sizes?.[0] || null
                      );
                      closeSearch();
                    }}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="rr-search-result-name">
                      {product.name}
                    </span>

                    <span>
                      GH₵{product.price}
                    </span>

                    <ArrowUpRight />

                  </button>
                )
              )
            ) : (
              <div className="rr-no-results">
                NO SIGNAL FOUND.
              </div>
            )}

          </div>

        </div>

      </div>

      {/* =====================================================
          ACCOUNT
      ===================================================== */}

      <div
        className={`rr-modal-backdrop ${
          accountOpen ? "is-open" : ""
        }`}
        onClick={() =>
          setAccountOpen(false)
        }
        aria-hidden={!accountOpen}
      >

        <aside
          className="rr-account-modal"
          onClick={(event) =>
            event.stopPropagation()
          }
          role="dialog"
          aria-modal="true"
          aria-label="Account"
        >

          <div className="rr-modal-header">

            <div>

              <span className="rr-modal-kicker">
                RENEGADE REALMS
              </span>

              <h2>
                {createAccount
                  ? "CREATE ACCOUNT"
                  : " YOU'RE WELCOME"}
              </h2>

            </div>

            <button
              type="button"
              className="rr-overlay-close"
              onClick={() =>
                setAccountOpen(false)
              }
              aria-label="Close account"
            >
              CLOSE
              <CloseIcon />
            </button>

          </div>

          <form
          
  className="rr-account-form"
  onSubmit={handleAccountSubmit}
>
          

            {createAccount && (
              <label>
                <span>NAME</span>
                <input
  type="text"
  placeholder="Calvin Brooks Offei"
  value={accountName}
  onChange={(event) =>
    setAccountName(event.target.value)
  }
/>
              </label>
            )}

            <label>
              <span>EMAIL</span>
              <input
  type="email"
  placeholder="name@domain.com"
  value={accountEmail}
  onChange={(event) =>
    setAccountEmail(event.target.value)
  }
  required
/>
            </label>

           <label>
  <span>PASSWORD</span>

  <div className="rr-password-input-wrap">
    <input
      type={showAccountPassword ? "text" : "password"}
      placeholder=" XX XXX XXXX"
      value={accountPassword}
      onChange={(event) =>
        setAccountPassword(event.target.value)
      }
      required
    />

    <button
      type="button"
      className="rr-password-toggle"
      onClick={() =>
        setShowAccountPassword(
          (current) => !current
        )
      }
      aria-label={
        showAccountPassword
          ? "Hide password"
          : "Show password"
      }
    >
      {showAccountPassword ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c7 0 10 8 10 8a17.4 17.4 0 0 1-3.1 4.4" />
          <path d="M6.2 6.2C3.6 8.2 2 12 2 12s3 7 10 7c1.2 0 2.3-.2 3.3-.6" />
        </svg>
      )}
    </button>
  </div>
</label>

            {!createAccount && (
              <div className="rr-account-options">

                <label className="rr-checkbox">
                  <input type="checkbox" />
                  <span>REMEMBER ME</span>
                </label>

                <button type="button">
                  FORGOT PASSWORD?
                </button>

              </div>
            )}

            <button
              type="button"
              className="rr-social-button"
              onClick={() => {
                alert("Google sign-in will be connected here.");
              }}
            >
              <span>G</span>
              CONTINUE WITH GOOGLE
            </button>

            <button
  type="button"
  className="rr-social-button"
  onClick={() => {
    alert("Apple sign-in will be connected here.");
  }}
>
  <span></span>
  CONTINUE WITH APPLE
</button>

            <div className="rr-or-divider">
              <span>OR CONTINUE WITH EMAIL</span>
            </div>

            <button
              type="submit"
              className="rr-form-submit"
            >
              {createAccount
                ? "CREATE ACCOUNT"
                : "SIGN IN"}
              <ArrowUpRight />
            </button>

            <div className="rr-switch-account">

              <span>
                {createAccount
                  ? "ALREADY HAVE AN ACCOUNT?"
                  : "NEW TO THE REALM?"}
              </span>

              <button
                type="button"
                onClick={() =>
                  setCreateAccount(
                    (current) => !current
                  )
                }
              >
                {createAccount
                  ? "SIGN IN"
                  : "CREATE ACCOUNT"}
              </button>

            </div>

          </form>

        </aside>

      </div>

      {/* =====================================================
          CART DRAWER
      ===================================================== */}

      <div
        className={`rr-cart-backdrop ${
          cartOpen ? "is-open" : ""
        }`}
        onClick={() =>
          setCartOpen(false)
        }
        aria-hidden={!cartOpen}
      >

        <aside
          className="rr-cart-drawer"
          onClick={(event) =>
            event.stopPropagation()
          }
          role="dialog"
          aria-modal="true"
          aria-label="Shopping bag"
        >

          <div className="rr-cart-header">

            <div>

              <span className="rr-cart-kicker">
                RENEGADE REALMS
              </span>

              <h2>
                YOUR BAG ({cartCount})
              </h2>

            </div>

            <button
              type="button"
              className="rr-overlay-close"
              onClick={() =>
                setCartOpen(false)
              }
              aria-label="Close shopping bag"
            >
              CLOSE
              <CloseIcon />
            </button>

          </div>

          {cart.length === 0 ? (
            <div className="rr-empty-cart">

              <div className="rr-empty-cart-title">

                <span>BAG'S LOOKING LIGHT.</span>

                <strong>FIX THAT.</strong>

              </div>

              <p>
                Your next piece is somewhere
                out there.
              </p>

              <button
                type="button"
                className="rr-form-submit"
                onClick={() => {
                  setCartOpen(false);
                  scrollToSection("shop");
                }}
              >
                SHOP THE REALM
                <ArrowUpRight />
              </button>

              <div className="rr-cart-recommendation">

                <span className="rr-eyebrow">
                  YOU MIGHT LIKE
                </span>

                <button
                  type="button"
                  onClick={() =>
                    quickAddToCart(
                      products[0],
                      products[0].sizes[0]
                    )
                  }
                >

                  <div className="rr-recommendation-image">

                    <img
                      src={products[0].image}
                      alt={products[0].name}
                    />

                  </div>

                  <div className="rr-recommendation-info">

                    <span>
                      {products[0].name}
                    </span>

                    <strong>
                      GH₵{products[0].price}
                    </strong>

                    <small>
                      SHOP NOW
                      <ArrowUpRight />
                    </small>

                  </div>

                </button>

              </div>

            </div>
          ) : (
            <>

              <div className="rr-cart-items">

                {cart.map((item) => (
                  <div
                    className="rr-cart-item"
                    key={item.cartKey}
                  >

                    <div className="rr-cart-item-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>

                    <div className="rr-cart-item-content">

                      <div className="rr-cart-item-top">

                        <div>

                          <h3>{item.name}</h3>

                          <span>
                            GH₵{item.price}
                          </span>

                          <span className="rr-cart-item-size">
                            SIZE:{" "}
                            {item.size || "ONE SIZE"}
                          </span>

                        </div>

                        <button
                          type="button"
                          className="rr-remove-item"
                          onClick={() =>
                            removeFromCart(
                              item.cartKey
                            )
                          }
                        >
                          REMOVE
                        </button>

                      </div>

                      <div className="rr-cart-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.cartKey
                            )
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <MinusIcon />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            addToCart(
                              item,
                              item.size
                            )
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <PlusIcon />
                        </button>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              <div className="rr-cart-footer">

                <div className="rr-cart-total">

                  <span>SUBTOTAL</span>

                  <strong>
                    GH₵{cartSubtotal}
                  </strong>

                </div>

                
  <button
  type="button"
  className="rr-checkout-button"
  onClick={() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }}
>
  PROCEED TO CHECKOUT
  <ArrowUpRight />
</button>
  
  

                <small>
                  SHIPPING &amp; TAXES
                  <br />
                  CALCULATED AT CHECKOUT
                </small>

              </div>

            </>
          )}

        </aside>

      </div>

{/* =====================================================
    CHECKOUT
===================================================== */}

{createPortal(
  <div
    className={`rr-checkout-overlay ${
      checkoutOpen ? "is-open" : ""
    }`}
    aria-hidden={!checkoutOpen}
  >
    <div className="rr-checkout-shell">

      <div className="rr-checkout-topbar">

        <button
          type="button"
          className="rr-checkout-back"
          onClick={() => {
            setCheckoutOpen(false);
            setCartOpen(true);
          }}
        >
          ← BACK
        </button>

        <span className="rr-checkout-brand">
          RENEGADE REALMS
        </span>

        <span className="rr-checkout-count">
          {cartCount} {cartCount === 1 ? "PIECE" : "PIECES"}
        </span>

      </div>

      <div className="rr-checkout-grid">

        {/* LEFT SIDE */}

        <section className="rr-checkout-left">

          <span className="rr-checkout-kicker">
            CHECKOUT
          </span>

          <h1 className="rr-checkout-title">
            COMPLETE YOUR ORDER
          </h1>

          <div className="rr-checkout-signin">

            <div className="rr-checkout-section-icon">
              <LockIcon />
            </div>

            <div>
              <strong>SIGN IN REQUIRED</strong>
              <p>
                Please sign in or create an account
                to complete your order.
              </p>
            </div>

          </div>

          <div className="rr-checkout-section">

            <div className="rr-checkout-section-heading">

              <div className="rr-checkout-section-icon">
                <DeliveryIcon />
              </div>

              <div>
                <strong>DELIVERY</strong>
                <span>Shipping address</span>
              </div>

            </div>

            <form className="rr-checkout-form">

              <div className="rr-checkout-field-row">

                <label className="rr-checkout-field">
                  <span>FIRST NAME</span>
                  <input
                    type="text"
                    placeholder="Calvin"
                  />
                </label>

                <label className="rr-checkout-field">
                  <span>LAST NAME</span>
                  <input
                    type="text"
                    placeholder="Eshun"
                  />
                </label>

              </div>

              <label className="rr-checkout-field">
                <span>ADDRESS</span>
                <input
                  type="text"
                  placeholder="Start typing your addressing...."
                />
              </label>

              <label className="rr-checkout-field">
                <span>EMAIL</span>
                <input
                  type="email"
                  placeholder="name@domain.com"
                />
              </label>

              <div className="rr-checkout-field-row">

                <label className="rr-checkout-field">
                  <span>CITY</span>
                  <input
                    type="text"
                    placeholder="Accra"
                  />
                </label>

                <label className="rr-checkout-field">
                  <span>COUNTRY</span>
                  <input
                    type="text"
                    placeholder="Ghana"
                  />
                </label>

              </div>

              <label className="rr-checkout-field">
                <span>PHONE NUMBER</span>

                <div className="rr-checkout-phone">

                  <select defaultValue="+233">
                    <option value="+233">
                      🇬🇭 +233
                    </option>
                    <option value="+234">
                      🇳🇬 +234
                    </option>
                    <option value="+225">
                      🇨🇮 +225
                    </option>
                    <option value="+44">
                      🇬🇧 +44
                    </option>
                    <option value="+1">
                      🇺🇸 +1
                    </option>
                    <option value="+49">
                      🇩🇪 +49
                    </option>
                    <option value="+33">
                      🇫🇷 +33
                    </option>
                    <option value="+39">
                      🇮🇹 +39
                    </option>
                  </select>

                  <input
                    type="tel"
                    placeholder="XX XXX XXXX"
                  />

                </div>

              </label>

              <button
                type="button"
                className="rr-checkout-signin-button"
                onClick={() => {
                  setCheckoutOpen(false);
                  setAccountOpen(true);
                }}
              >
                SIGN IN TO CHECKOUT
                <ArrowUpRight />
              </button>

            </form>

          </div>

        </section>

        {/* RIGHT SIDE */}

        <aside className="rr-checkout-summary">

          <div className="rr-checkout-summary-head">

            <div className="rr-checkout-section-icon">
              <CrownIcon />
            </div>

            <div>
              <span>ORDER SUMMARY</span>
              <strong>
                {cartCount}{" "}
                {cartCount === 1
                  ? "piece"
                  : "pieces"}{" "}
                selected
              </strong>
            </div>

          </div>

          <div className="rr-checkout-summary-items">

            {cart.slice(0, 3).map((item) => (
              <div
                className="rr-checkout-summary-item"
                key={item.cartKey}
              >

                <div className="rr-checkout-summary-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="rr-checkout-summary-content">

                  <div>
                    <strong>{item.name}</strong>

                    <span>
                      SIZE:{" "}
                      {item.size || "ONE SIZE"}
                    </span>

                    <span>
                      QTY: {item.quantity}
                    </span>
                  </div>

                  <div>
                    <strong>
                      GH₵{item.price * item.quantity}
                    </strong>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.cartKey)
                      }
                    >
                      REMOVE
                    </button>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {cart.length > 3 && (
            <div className="rr-checkout-more">
              + {cart.length - 3} MORE ITEM
              {cart.length - 3 === 1 ? "" : "S"}
            </div>
          )}

          {cart.length > 0 && (
            <button
              type="button"
              className="rr-checkout-clear"
              onClick={() => setCart([])}
            >
              CLEAR ENTIRE CART
            </button>
          )}

          <div className="rr-checkout-totals">

            <div className="rr-checkout-total-row">
              <span>SUBTOTAL</span>
              <strong>
                GH₵{cartSubtotal}
              </strong>
            </div>

            <div className="rr-checkout-total-row">
              <span>SHIPPING</span>
              <strong>FREE</strong>
            </div>

            <div className="rr-checkout-total-row">
              <span>TAXES</span>
              <strong>CALCULATED</strong>
            </div>

            <div className="rr-checkout-total-row rr-checkout-grand-total">
              <span>TOTAL</span>
              <strong>
                GH₵{cartSubtotal}
              </strong>
            </div>

          </div>

          <div className="rr-checkout-benefits">

            <span>FREE SHIPPING</span>
            <span>SECURE CHECKOUT</span>

          </div>

          <p className="rr-checkout-guarantee">
            30-day satisfaction guarantee
            <span>•</span>
            Premium packaging
          </p>

        </aside>

      </div>

    </div>
  </div>,
  document.body
)}

{/* =====================================================
    ABOUT PORTAL
===================================================== */}

{createPortal(
  <div
    className={`rr-about-overlay ${
      aboutOpen ? "is-open" : ""
    }`}
    aria-hidden={!aboutOpen}
    role="dialog"
    aria-modal="true"
    aria-label="About Renegade Realms"
  >

    <video
      className="rr-about-video"
      src="/Website%20media/video/TNDNE3895.MOV"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onPlay={() => setAboutVideoPlaying(true)}
    />

    <div className="rr-about-overlay-noise" />

    <button
      type="button"
      className="rr-about-close"
      onClick={closeAbout}
      aria-label="Close About Us"
    >
      <span>CLOSE</span>
      <CloseIcon />
    </button>

   <div
  className={`rr-about-content ${
    aboutOpen ? "is-playing" : ""
  }`}
>
      <span className="rr-about-est">
        EST 2023 — ACCRA
      </span>

      <h2 className="rr-about-title">
        PERCEPTION
        <br />
        DEFINES
        <br />
        REALITY
      </h2>

      <span className="rr-about-soul">
        FEARLESS SOULS
      </span>

    </div>

    <div className="rr-about-footer">

      <span>RENEGADE REALMS</span>
      <span>RR / 001</span>

    </div>

    </div>,
  document.body
)}

    </div>
  );
}

export default App;