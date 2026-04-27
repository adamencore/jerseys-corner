// Jersey's Corner — subpage sections (full menu, about, contact)
const { useState: useStateS, useEffect: useEffectS, useMemo: useMemoS } = React;

// ───── Full menu page ─────
function FullMenu() {
  const cats = window.MENU_DATA;
  const [active, setActive] = useStateS('all');

  const visible = useMemoS(() => {
    if (active === 'all') return cats;
    return cats.filter(c => c.id === active);
  }, [active, cats]);

  return (
    <section className="section" style={{ paddingTop: 0 }} id="menu">
      <div className="container">
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
            {cat.blurb && <p className="menu-cat-blurb">{cat.blurb}</p>}
            <div className="menu-grid">
              {cat.items.map((item, i) => (
                <div key={i} className="menu-item">
                  <div className="menu-item-bullet">{item.name.charAt(0)}</div>
                  <div>
                    <div className="menu-item-name">
                      {item.name}
                      {item.featured && <span className="tag brick" style={{ marginLeft: 8 }}>★ Popular</span>}
                    </div>
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

// ───── About page extras ─────
function AboutPage() {
  const values = [
    { title: 'Made Fresh, Made Yours', body: 'No heat lamps, no shortcuts. Every plate is built when you order it.', glyph: '✻' },
    { title: 'House Recipes', body: 'Sauces, pickles, marinades, mac & cheese — all from our own kitchen.', glyph: '✦' },
    { title: 'Family at the Core', body: 'Three generations of cooking traditions, one welcoming corner.', glyph: '✿' },
  ];
  return (
    <>
      <section className="section about" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <div className="placeholder">
                Founders portrait<br/>
                ↳ candid, in the kitchen
              </div>
              <div className="about-stamp">
                <div>
                  <strong>EST.</strong>
                  2024
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-eyebrow">From the Family</div>
              <h2>A love letter to the classics.</h2>
              <p>
                Jersey's Corner started as a Sunday table — three generations passing platters, hot honey on everything, arguments over who makes the best mac. In 2024 we put the table in a building and opened the doors to the neighborhood.
              </p>
              <p>
                Our menu is eclectic on purpose. Burgers next to pastrami reubens next to gyros next to ribeye. We cook what we love, the way we love to eat it — generous, fresh, made just for you.
              </p>
              <p>
                Pull up a chair. We saved you a seat.
              </p>
              <div className="about-sig">— The Jersey Family</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">What We Stand For</div>
            <h2>The way we cook.</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="icon">
                  <span className="serif" style={{ fontStyle: 'italic', fontSize: 22 }}>{v.glyph}</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ───── Contact page (info + reservation) ─────
function ContactPage() {
  const [form, setForm] = useStateS({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
  const [errors, setErrors] = useStateS({});
  const [submitted, setSubmitted] = useStateS(false);
  const [busy, setBusy] = useStateS(false);

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
    setTimeout(() => { setBusy(false); setSubmitted(true); }, 700);
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Find us</h3>
              <p style={{ color: 'var(--muted)' }}>The corner spot, painted cream. You can't miss it.</p>
              <div className="contact-row">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="lab">Address</div>
                  <div className="val">123 Main Street Corner<br/>Your Town, ST 00000</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="lab">Phone</div>
                  <div className="val">(555) 123-4567</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
                </div>
                <div>
                  <div className="lab">Email</div>
                  <div className="val">hello@jerseyscorner.com</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <div>
                  <div className="lab">Hours</div>
                  <div className="val">Mon–Thu 11–9 · Fri 11–10<br/>Sat 10–10 · Sun 10–8</div>
                </div>
              </div>
            </div>

            <div className="map-img placeholder light" style={{ aspectRatio: '4/5', minHeight: 400 }}>
              Map embed<br/>
              ↳ corner storefront, parking
            </div>
          </div>
        </div>
      </section>

      <section className="section reservation" id="reserve">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Book a Table</div>
            <h2>Save your spot.</h2>
            <p className="section-lede">Tables for up to 8. For larger parties, give us a call so we can set you up properly.</p>
          </div>
          <div className="res-grid">
            <div>
              <div className="placeholder" style={{ aspectRatio: '4/5', borderRadius: 18 }}>
                Dining room shot<br/>
                ↳ warm light · full house
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
    </>
  );
}

Object.assign(window, { FullMenu, AboutPage, ContactPage });
