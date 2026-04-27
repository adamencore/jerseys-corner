// Jersey's Corner — shared components (Nav, Footer, Emblem, helpers)
const { useState, useEffect } = React;

// ───── Ornament SVGs (simple leaf/sparkle) ─────
function Leaf({ size = 60, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={style} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 50 Q 20 20 50 12 Q 42 38 12 48" />
      <path d="M14 46 Q 26 30 46 18" />
      <path d="M22 40 L 28 36" />
      <path d="M26 36 L 32 32" />
      <path d="M30 32 L 36 28" />
    </svg>
  );
}
function Bean({ size = 28, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={style} fill="none" stroke="currentColor" strokeWidth="1.2">
      <ellipse cx="14" cy="14" rx="9" ry="11" transform="rotate(-25 14 14)" />
      <path d="M9 8 Q 14 14 19 20" />
    </svg>
  );
}

// ───── Logo emblem ─────
function Emblem({ small }) {
  return (
    <div className="emblem">
      <div className="emblem-mark" style={small ? { width: 36, height: 36, fontSize: 18 } : null}>
        <span style={{ position: 'relative', zIndex: 1, transform: 'translateY(-1px)' }}>J</span>
      </div>
      <div className="emblem-text">
        <span className="name">Jersey's Corner</span>
        <span className="tag">Est. 2024 · Family Owned</span>
      </div>
    </div>
  );
}

// ───── Nav ─────
function Nav({ current = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'menu', label: 'Menu', href: 'menu.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="index.html"><Emblem /></a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.id} href={l.href} className={current === l.id ? 'active' : ''}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <button className="nav-icon" aria-label="search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <a href="contact.html#reserve" className="nav-cta">Book a Table</a>
          <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ───── Footer ─────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Emblem />
            <p className="footer-blurb">A family-owned corner of comfort food. Culinary nostalgia meets modern flair, made fresh to order.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Join</button>
            </div>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>123 Main Street Corner</li>
              <li>Your Town, ST 00000</li>
              <li>(555) 123-4567</li>
              <li>hello@jerseyscorner.com</li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="about.html">Our Story</a></li>
              <li><a href="contact.html">Contact & Hours</a></li>
              <li><a href="contact.html#reserve">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Google Reviews</a></li>
              <li><a href="#">DoorDash</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jersey's Corner · Family Owned · All Rights Reserved</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase' }}>Made with care</span>
        </div>
      </div>
    </footer>
  );
}

function smoothTo(e, href) {
  if (!href.startsWith('#')) return; // let normal links work
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

Object.assign(window, { Nav, Footer, Emblem, Leaf, Bean, smoothTo });
