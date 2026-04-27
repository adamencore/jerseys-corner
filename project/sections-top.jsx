// Jersey's Corner — top-of-page sections
const { useState, useEffect, useRef } = React;

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
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Menu', '#menu'],
    ['Our Story', '#about'],
    ['Hours', '#hours'],
    ['Contact', '#reserve'],
  ];

  const click = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollTo ? null : el.scrollIntoView; // safety
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" onClick={(e) => click(e, '#top')}><Emblem /></a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => click(e, href)}>{label}</a>
          ))}
        </div>
        <button className="nav-cta" onClick={(e) => click(e, '#reserve')}>Reserve a Table</button>
        <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

// ───── Hero ─────
function Hero({ variant }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">Family Owned · Est. 2024</div>
          <h1>
            Comfort food, <em>plated with pride.</em>
          </h1>
          <p className="hero-lede">
            From hand-smashed burger tacos to herb-buttered ribeye, Jersey's Corner serves the kind of food you remember — generous, made-to-order, and rooted in the neighborhood.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary" onClick={(e) => smoothTo(e, '#menu')}>
              See the Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#reserve" className="btn btn-ghost" onClick={(e) => smoothTo(e, '#reserve')}>Reserve a Table</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="num">40+</div><div className="lab">Menu items</div></div>
            <div className="stat"><div className="num">2024</div><div className="lab">Established</div></div>
            <div className="stat"><div className="num">7 days</div><div className="lab">A week</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="placeholder">
            Hero image<br />
            ↳ smash burger taco<br />
            close-up · 4:5
          </div>
          <div className="hero-badge">
            <span className="dot"></span>
            <div className="txt">
              <strong>Open now</strong>
              <span>Kitchen until 9pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function smoothTo(e, href) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ───── About ─────
function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-img">
          <div className="placeholder">
            Restaurant interior<br />
            ↳ bar · pendants · regulars<br />
            5:6
          </div>
          <div className="about-stamp">
            <div>
              <strong>EST.</strong>
              2024
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="section-eyebrow" style={{ textAlign: 'left' }}>Our Story</div>
          <h2>A neighborhood spot, three generations in the making.</h2>
          <p>
            Jersey's Corner started as a family table — Sunday platters, hot honey on everything, arguments over who makes the best mac. In 2024 we put the table in a building and opened the doors.
          </p>
          <p>
            Everything here is made-to-order. House sauces, hand-pattied burgers, slow-cooked shredded beef. The recipes are ours; the welcome is yours.
          </p>
          <div className="about-sig">— The Jersey Family</div>
        </div>
      </div>
    </section>
  );
}

// ───── Featured ─────
function Featured() {
  const picks = [
    { tag: 'Local Fave', name: 'Smash Burger Tacos', desc: 'Three mini bacon smash burgers in street tacos with chipotle garlic ranch.', price: '14.35', img: 'Smash Burger Tacos · 4:3' },
    { tag: 'House Favorite', name: 'Original Chicken Sandwich', desc: 'Grilled or crispy chicken with chipotle mayo on a brioche bun.', price: '15.50', img: 'Chicken Sandwich · 4:3' },
    { tag: 'For the Table', name: 'Herb Butter Rib Eye', desc: '12oz ribeye with pesto mashed potatoes and garlic green beans.', price: '32', img: 'Ribeye Plate · 4:3' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Chef's Picks</div>
          <h2>What everyone's ordering.</h2>
          <p className="section-lede">Three plates the regulars come back for. Ask your server about today's specials and dessert.</p>
        </div>
        <div className="featured-grid">
          {picks.map((p, i) => (
            <article key={i} className="dish">
              <div className="dish-img placeholder light">{p.img}</div>
              <div className="dish-body">
                <span className="dish-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="dish-foot">
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Add to order</span>
                  <span className="dish-price">${p.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, About, Featured, Emblem, smoothTo });
