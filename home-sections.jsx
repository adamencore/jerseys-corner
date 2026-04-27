// Jersey's Corner — homepage sections
const { useState: useStateH, useEffect: useEffectH, useMemo: useMemoH } = React;

// ───── Hero ─────
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-card">
          <Leaf size={80} style={{ position: 'absolute', top: 24, left: 24, color: 'var(--brown)', opacity: .25 }} />
          <Leaf size={60} style={{ position: 'absolute', bottom: 32, left: '42%', color: 'var(--brown)', opacity: .22, transform: 'rotate(140deg)' }} />
          <Bean size={32} style={{ position: 'absolute', top: '40%', left: 12, color: 'var(--brown)', opacity: .35 }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-eyebrow">Est. 2024 · Family Owned</div>
            <h1>
              Where culinary nostalgia <em>meets modern flair.</em>
            </h1>
            <p className="hero-lede">
              An eclectic menu that's a love letter to tradition — beloved classics with a delightful twist, made fresh to order with the homemade quality our regulars come back for.
            </p>
            <div className="hero-actions">
              <a href="menu.html" className="btn btn-primary">
                See the Menu
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="contact.html#reserve" className="btn btn-ghost">Book a Table</a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="images/rib-eye-platter.webp"
              alt="Herb butter rib eye with garlic green beans and pesto mash"
              className="photo-fill"
            />
            <div className="hero-badge">
              <span className="dot"></span>
              <div className="txt">
                <strong>Open today</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───── Bestsellers ─────
function Bestsellers() {
  const picks = [
    {
      tag: 'Bestseller',
      name: 'Smash Burger Tacos',
      price: '14.35',
      desc: 'Mini bacon smash burgers in street tacos.',
      glyph: 'S',
      color: 'color-1',
      img: null,
    },
    {
      tag: '',
      name: 'Hot Honey Chicken',
      price: '15.50',
      desc: 'Spicy crispy chicken on brioche.',
      glyph: 'H',
      color: 'color-2',
      img: 'images/chicken-wrap-fries.webp',
      imgAlt: 'Chicken wrap with coil fries',
    },
    {
      tag: '',
      name: 'Pastrami Reuben',
      price: '15.00',
      desc: 'Marble rye, swiss, sauerkraut.',
      glyph: 'P',
      color: 'color-3',
      img: 'images/shredded-beef-sandwich.webp',
      imgAlt: 'Shredded beef sandwich on toasted bread',
    },
    {
      tag: '',
      name: 'Herb Butter Rib Eye',
      price: '32.00',
      desc: '12oz with pesto mash and garlic green beans.',
      glyph: 'R',
      color: 'color-4',
      img: 'images/rib-eye-platter.webp',
      imgAlt: 'Herb butter rib eye with green beans and pesto mashed potatoes',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Chef's Picks</div>
          <h2>Our bestsellers.</h2>
          <p className="section-lede">Three plates regulars come back for, plus one for the big appetite.</p>
        </div>
        <div className="featured-grid">
          {picks.map((p, i) => (
            <article key={i} className={`dish ${p.color}`}>
              {p.tag && <span className="dish-tag">{p.tag}</span>}
              <div className="dish-img">
                {p.img
                  ? <img src={p.img} alt={p.imgAlt} className="photo-fill" />
                  : <div className="dish-icon"><span style={{ position: 'relative', zIndex: 1 }}>{p.glyph}</span></div>
                }
              </div>
              <div className="dish-body">
                <h3>{p.name}</h3>
                <p className="price-line">${p.price}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: '0 0 16px', lineHeight: 1.5 }}>{p.desc}</p>
                <a href="menu.html" className="dish-cta">View on Menu</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───── Menu preview (homepage) ─────
function MenuPreview() {
  const cats = window.MENU_DATA;
  const [active, setActive] = useStateH(cats[2].id); // Sandwiches default

  const cat = cats.find(c => c.id === active);
  const items = cat.items.slice(0, 6);

  return (
    <section className="section menu-section" id="menu-preview">
      <div className="container">
        <Bean size={36} style={{ position: 'absolute', top: 80, left: 32, color: 'var(--brown)', opacity: .3 }} />
        <Bean size={28} style={{ position: 'absolute', top: 200, right: 48, color: 'var(--brown)', opacity: .25, transform: 'rotate(40deg)' }} />

        <div className="section-head">
          <div className="section-eyebrow">Our Menu</div>
          <h2>A taste of <em style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>what's cooking.</em></h2>
          <p className="section-lede">Sandwiches, burgers, salads, dinner platters — and a few unexpected favorites. Tap a category for a peek.</p>
        </div>

        <div className="menu-tabs">
          {cats.slice(0, 6).map(c => (
            <button key={c.id} className={`menu-tab ${active === c.id ? 'active' : ''}`} onClick={() => setActive(c.id)}>
              {c.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="menu-item-bullet">{item.name.charAt(0)}</div>
              <div>
                <div className="menu-item-name">{item.name}</div>
                {item.desc && <p className="menu-item-desc">{item.desc}</p>}
                {item.meta && (
                  <div className="menu-item-meta">
                    {item.meta.map((m, j) => <span key={j} className="tag">{m}</span>)}
                  </div>
                )}
              </div>
              <div className="menu-item-price">${item.price}</div>
            </div>
          ))}
        </div>

        <div className="menu-cta-row">
          <a href="menu.html" className="btn btn-primary">View the Full Menu</a>
        </div>
      </div>
    </section>
  );
}

// ───── About preview ─────
function AboutPreview() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img">
            <img
              src="images/gyro-plate.webp"
              alt="Greek gyro platter with seasoned fries and dipping sauce"
              className="photo-fill"
            />
            <div className="about-stamp">
              <div>
                <strong>EST.</strong>
                2024
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-eyebrow" style={{ marginBottom: 14 }}>Our Story</div>
            <h2>Tradition, with <em style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>a delightful twist.</em></h2>
            <p>
              Welcome to Jersey's Corner, where culinary nostalgia meets modern flair. Our eclectic menu is a love letter to tradition — offering a delightful twist on beloved classics.
            </p>
            <p>
              Every dish is made fresh to order with the homemade quality our customers have come to love. House sauces, hand-pattied burgers, slow-cooked shredded beef. The recipes are ours; the welcome is yours.
            </p>

            <div className="about-pillars">
              <div className="pillar">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 L13 9 L20 10 L15 14 L17 21 L12 17 L7 21 L9 14 L4 10 L11 9 Z"/></svg>
                </div>
                <div>
                  <h4>Family Owned</h4>
                  <p>Three generations of recipes, served the way they always were.</p>
                </div>
              </div>
              <div className="pillar">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6"/></svg>
                </div>
                <div>
                  <h4>Made to Order</h4>
                  <p>Nothing sits and waits. Everything's hot, fresh, and yours alone.</p>
                </div>
              </div>
              <div className="pillar">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                  <h4>House Made</h4>
                  <p>From the sauces to the pickled onions, we make it ourselves.</p>
                </div>
              </div>
              <div className="pillar">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <div>
                  <h4>Open 7 Days</h4>
                  <p>Lunch through dinner, no day skipped, no shortcuts taken.</p>
                </div>
              </div>
            </div>

            <a href="about.html" className="btn btn-primary" style={{ marginTop: 32 }}>
              More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───── Hours strip ─────
function HoursStrip() {
  const today = new Date().getDay();
  const schedule = [
    { day: 'Monday',    time: '11:00 — 9:00pm', i: 1 },
    { day: 'Tuesday',   time: '11:00 — 9:00pm', i: 2 },
    { day: 'Wednesday', time: '11:00 — 9:00pm', i: 3 },
    { day: 'Thursday',  time: '11:00 — 9:00pm', i: 4 },
    { day: 'Friday',    time: '11:00 — 10:00pm', i: 5 },
    { day: 'Saturday',  time: '10:00 — 10:00pm', i: 6 },
    { day: 'Sunday',    time: '10:00 — 8:00pm', i: 0 },
  ];
  return (
    <section className="section" id="hours" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Stop By</div>
          <h2>Hours & location.</h2>
          <p className="section-lede">Walk-ins welcome. Reservations recommended Friday and Saturday nights.</p>
        </div>
        <div className="hours-grid">
          <div className="hours-card">
            <h3>Open This Week</h3>
            {schedule.map(s => (
              <div key={s.day} className={`hours-row ${s.i === today ? 'today' : ''}`}>
                <span className="day">{s.day}</span>
                <span className="time">{s.time}</span>
              </div>
            ))}
            <div className="location-info">
              <div className="label">Address</div>
              <p>123 Main Street Corner<br/>Your Town, ST 00000</p>
              <div className="label" style={{ marginTop: 16 }}>Phone</div>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="map-img placeholder light">
            Map / street view<br/>
            ↳ corner storefront
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, MenuPreview, AboutPreview, Bestsellers, HoursStrip });
