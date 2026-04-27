// Jersey's Corner — menu, hours, reservation, footer
const { useState: useStateB, useEffect: useEffectB, useMemo } = React;

// ───── Menu (filterable) ─────
function MenuSection() {
  const cats = window.MENU_DATA;
  const [active, setActive] = useStateB('all');

  const visible = useMemo(() => {
    if (active === 'all') return cats;
    return cats.filter(c => c.id === active);
  }, [active, cats]);

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">The Full Menu</div>
          <h2>Everything we serve, and how we serve it.</h2>
          <p className="section-lede">All sandwiches and burgers come with a side. Gluten-free buns available for $2.50. Tap a category to filter.</p>
        </div>

        <div className="menu-tabs">
          <button className={`menu-tab ${active === 'all' ? 'active' : ''}`} onClick={() => setActive('all')}>All</button>
          {cats.map(c => (
            <button key={c.id} className={`menu-tab ${active === c.id ? 'active' : ''}`} onClick={() => setActive(c.id)}>
              {c.name}
            </button>
          ))}
        </div>

        {visible.map(cat => (
          <div key={cat.id} className="menu-block">
            <div className="menu-cat-head">
              <h3>{cat.name}</h3>
              <span className="meta">{cat.items.length} items</span>
            </div>
            {cat.blurb && (
              <p style={{ color: 'var(--muted)', fontSize: 14, margin: '0 0 24px', maxWidth: 720 }}>
                {cat.blurb}
              </p>
            )}
            <div className="menu-grid">
              {cat.items.map((item, i) => (
                <div key={i} className="menu-item">
                  <div className="menu-item-head">
                    <span className="menu-item-name">{item.name}</span>
                    {item.featured && <span className="tag brick">★ Popular</span>}
                  </div>
                  <span className="menu-item-price">${item.price}</span>
                  {item.desc && <p className="menu-item-desc">{item.desc}</p>}
                  {item.meta && (
                    <div className="menu-item-meta">
                      {item.meta.map((m, j) => <span key={j} className="tag">{m}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="menu-notice">
          <div className="icon">!</div>
          <p>
            <strong>A note from the kitchen</strong>
            Consumption of undercooked meat, poultry, eggs, or seafood may increase the risk of food-borne illness. Please tell your server about any allergies — we are not exclusively gluten-free, so cross contamination is possible. Ask about daily specials and desserts!
          </p>
        </div>
      </div>
    </section>
  );
}

// ───── Hours & Location ─────
function Hours() {
  const today = new Date().getDay(); // 0 = Sun
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
    <section className="section" id="hours">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Stop By</div>
          <h2>Hours & location.</h2>
          <p className="section-lede">Walk-ins welcome. Reservations recommended Friday and Saturday nights.</p>
        </div>
        <div className="hours-grid">
          <div className="hours-card">
            <h3>Hours</h3>
            {schedule.map(s => (
              <div key={s.day} className={`hours-row ${s.i === today ? 'today' : ''}`}>
                <span className="day">{s.day}{s.i === today ? ' · Today' : ''}</span>
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
            Map / street view<br />
            ↳ corner storefront<br />
            1:1
          </div>
        </div>
      </div>
    </section>
  );
}

// ───── Reservation ─────
function Reservation() {
  const [form, setForm] = useStateB({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
  const [errors, setErrors] = useStateB({});
  const [submitted, setSubmitted] = useStateB(false);
  const [busy, setBusy] = useStateB(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email please';
    if (!/^[\d\s\-\(\)\+]{7,}$/.test(form.phone)) e.phone = 'Valid phone please';
    if (!form.date) e.date = 'Pick a date';
    if (!form.time) e.time = 'Pick a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSubmitted(true);
    }, 700);
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="section reservation" id="reserve">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Book a Table</div>
          <h2>Save your spot.</h2>
          <p className="section-lede">Tables for up to 8. For larger parties, give us a call so we can set you up properly.</p>
        </div>
        <div className="res-grid">
          <div>
            <div className="placeholder" style={{ aspectRatio: '4/5', borderRadius: 12 }}>
              Dining room shot<br/>
              ↳ warm light · full house<br/>
              4:5
            </div>
          </div>
          {submitted ? (
            <div className="res-form">
              <div className="res-success">
                <div className="check">✓</div>
                <h3>You're on the list.</h3>
                <p>We've sent a confirmation to <strong>{form.email}</strong>. See you {form.date} at {form.time}.</p>
              </div>
            </div>
          ) : (
            <form className="res-form" onSubmit={submit} noValidate>
              <div className={`field ${errors.name ? 'error' : ''}`}>
                <label>Name</label>
                <input type="text" value={form.name} onChange={set('name')} placeholder="Your name" />
                <div className="err">{errors.name}</div>
              </div>
              <div className="res-row">
                <div className={`field ${errors.email ? 'error' : ''}`}>
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                  <div className="err">{errors.email}</div>
                </div>
                <div className={`field ${errors.phone ? 'error' : ''}`}>
                  <label>Phone</label>
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 123-4567" />
                  <div className="err">{errors.phone}</div>
                </div>
              </div>
              <div className="res-row">
                <div className={`field ${errors.date ? 'error' : ''}`}>
                  <label>Date</label>
                  <input type="date" value={form.date} onChange={set('date')} min={today} />
                  <div className="err">{errors.date}</div>
                </div>
                <div className={`field ${errors.time ? 'error' : ''}`}>
                  <label>Time</label>
                  <select value={form.time} onChange={set('time')}>
                    <option value="">Select a time</option>
                    {['11:00','11:30','12:00','12:30','1:00','5:00','5:30','6:00','6:30','7:00','7:30','8:00','8:30'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <div className="err">{errors.time}</div>
                </div>
              </div>
              <div className="field">
                <label>Party size</label>
                <select value={form.guests} onChange={set('guests')}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                </select>
              </div>
              <button type="submit" className="res-submit" disabled={busy}>
                {busy ? 'Booking…' : 'Reserve My Table'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
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
            <p className="footer-blurb">A family-owned corner of comfort food. Burgers, sandwiches, and platters made the way they should be.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>123 Main Street Corner</li>
              <li>Your Town, ST 00000</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li><a href="#menu" onClick={(e) => smoothTo(e, '#menu')}>Starters</a></li>
              <li><a href="#menu" onClick={(e) => smoothTo(e, '#menu')}>Burgers</a></li>
              <li><a href="#menu" onClick={(e) => smoothTo(e, '#menu')}>Sandwiches</a></li>
              <li><a href="#menu" onClick={(e) => smoothTo(e, '#menu')}>Dinner Platters</a></li>
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
          <span>© 2026 Jersey's Corner · Family Owned</span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' }}>Made with care</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { MenuSection, Hours, Reservation, Footer });
