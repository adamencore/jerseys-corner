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

// ───── Google Reviews ─────
function GoogleReviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      date: '2 weeks ago',
      text: 'Absolutely the best smash burger tacos I\'ve ever had. The house chipotle garlic ranch is addictive. This little corner spot is a hidden gem — family ran it and it shows in every bite.',
      avatar: 'S',
    },
    {
      name: 'James T.',
      rating: 5,
      date: '1 month ago',
      text: 'The herb butter rib eye is worth every penny. Came out perfectly cooked, pesto mash was incredible. Not your typical burger joint — they\'re doing something special here.',
      avatar: 'J',
    },
    {
      name: 'Maria R.',
      rating: 5,
      date: '3 weeks ago',
      text: 'Pastrami Reuben on marble rye — chef\'s kiss. The onion tanglers as a side were crispy and perfect. Friendly staff, fast service, great vibe. Already planning my next visit.',
      avatar: 'M',
    },
    {
      name: 'Derek L.',
      rating: 5,
      date: '1 month ago',
      text: 'Brought the whole family and everyone left happy. Kids loved the grilled cheese, I had the Philly cheesesteak — massive and delicious. This place deserves way more hype.',
      avatar: 'D',
    },
  ];

  const Stars = ({ n }) => (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= n ? '#e8942a' : 'none'}
          stroke={i <= n ? '#e8942a' : 'var(--line)'}
          strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="section" style={{ background: 'var(--paper)' }} id="reviews">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Google Reviews</div>
          <h2>What our guests <em style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>are saying.</em></h2>
          <p className="section-lede">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <strong style={{ fontSize: 18, fontFamily: 'var(--font-head)' }}>4.9</strong>
              <Stars n={5} />
              <span style={{ color: 'var(--muted)', fontSize: 14 }}>— Based on Google Reviews</span>
            </span>
          </p>
        </div>

        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: 'var(--bg)',
              border: '1px solid var(--line)',
              borderRadius: 14,
              padding: '24px 22px',
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--ink)', color: 'var(--paper)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--font-head)', fontStyle: 'italic',
                  fontSize: 18, flexShrink: 0,
                }}>{r.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{r.date}</div>
                </div>
              </div>
              <Stars n={r.rating} />
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>"{r.text}"</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://www.google.com/search?q=Jersey%27s+Corner"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, MenuPreview, AboutPreview, Bestsellers, HoursStrip, GoogleReviews });
