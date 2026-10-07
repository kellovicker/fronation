import { useEffect, useState } from 'react'
import useReveal from './useReveal.js'
import { site, nav, features, services, gallery, prices, reviews, options, images } from './data.js'

const wa = (m) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`
const ext = { target: '_blank', rel: 'noopener noreferrer' }
const Brand = () => <a className="brand" href="#home"><img src={images.logo} alt="" /><span>{site.name}<small>{site.tag}</small></span></a>
const Stars = ({ n = 5 }) => <span className="stars" aria-label={`${n} out of 5 stars`}>{'★'.repeat(n)}</span>

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <Brand />
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={'menu' + (open ? ' open' : '')}>
        {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        <a className="btn pink" href={wa('Hello, I would like to book an appointment.')} {...ext}>Book on WhatsApp</a>
      </nav>
    </header>
  )
}

function Contact() {
  const [msg, setMsg] = useState('')
  async function submit(e) {
    e.preventDefault()
    const form = e.target, d = Object.fromEntries(new FormData(form)), url = import.meta.env.VITE_N8N_WEBHOOK
    try {
      if (!url) throw new Error('no webhook')
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...d, source: 'website' }) })
      if (!r.ok) throw new Error('failed')
      setMsg('Thanks. We will reply shortly.'); form.reset()
    } catch {
      window.open(wa(`Booking enquiry\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service || '-'}\n${d.msg || ''}`), '_blank', 'noopener')
      setMsg('Opening WhatsApp with your message.')
    }
  }
  const q = encodeURIComponent(site.mapQuery)
  return (
    <section id="contact" className="wrap contact">
      <div className="promo">
        <h2>Book Your<br />Appointment Today</h2>
        <p>Have a question or want to make a booking? Chat with us directly on WhatsApp or fill the form.</p>
        <a className="btn pink" href={wa('Hello, I would like to book an appointment.')} {...ext}>Chat on WhatsApp</a>
      </div>
      <form className="form" onSubmit={submit}>
        <h3>Send Us a Message</h3>
        <div className="row"><input name="name" placeholder="Full Name" aria-label="Full name" required autoComplete="name" /><input name="phone" type="tel" placeholder="Phone Number" aria-label="Phone number" required autoComplete="tel" /></div>
        <div className="row"><input name="email" type="email" placeholder="Email Address" aria-label="Email address" autoComplete="email" />
          <select name="service" aria-label="Service" defaultValue=""><option value="" disabled>Select Service</option>{options.map((o) => <option key={o}>{o}</option>)}</select></div>
        <textarea name="msg" rows="4" placeholder="How can we help?" aria-label="Message" />
        <button className="btn rose">Send Message</button>
        <p role="status" className="small">{msg}</p>
      </form>
      <div className="mapcard">
        {import.meta.env.VITE_EMBED_MAP !== 'false' && <iframe title="Salon location" loading="lazy" src={`https://www.google.com/maps?q=${q}&output=embed`} />}
        <div className="mi">
          <p><b>⌖</b> {site.area}<br />{site.region}</p>
          <p><b>◷</b> {site.hours}</p>
          <p><b>✆</b> <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p>
          <div className="mrow">
            <a className="btn dark sm" href={`https://www.google.com/maps/search/?api=1&query=${q}`} {...ext}>Open in Maps</a>
            <div className="soc">{site.socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} {...ext}>{s.short}</a>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useReveal('.info .wrap > div, #about > *, .feat > div, .svc > *, .cards article, .gal > div:first-child, .gr img, .pr > *, .rh > *, .revs blockquote, .promo, .form, .mapcard, .fw > *')
  const open = new Date().getDay() !== 0
  return (
    <div id="home">
      <Nav />
      <section className="hero">
        <div className="wrap">
          <p className="eb">{site.name}</p>
          <h1>Your Hair. Your <em>Confidence.</em></h1>
          <p className="lead">We specialize in natural hair care, braiding, locs, wigs and beauty services designed to help you look and feel your best.</p>
          <div className="acts"><a className="btn pink" href={wa('Hello, I would like to book an appointment.')} {...ext}>Book an Appointment</a><a className="btn ghost" href={wa('Hello, I have a question.')} {...ext}>Chat on WhatsApp</a></div>
        </div>
      </section>
      <div className="info"><div className="wrap">
        <div><b className="ic">☆</b><div><strong>{site.rating}/5</strong><small>Based on {site.reviewCount} Google reviews</small></div></div>
        <div><b className="ic">⌖</b><div><strong>Port Harcourt</strong><small>{site.region}</small></div></div>
        <div><b className="ic">◷</b><div><strong>{open ? 'Open Today' : 'Closed Today'}</strong><small>9:00 AM - 7:00 PM, Mon - Sat</small></div></div>
        <div><b className="ic">✆</b><div><strong>{site.phone}</strong><small>Call or WhatsApp</small></div></div>
      </div></div>
      <section id="about" className="wrap sec two">
        <img src={images.about} alt="Inside the FRO NATION salon" />
        <div><p className="eb rose">ABOUT US</p><h2>More Than Just a Salon</h2>
          <p>FRO NATION is a modern hair and beauty salon dedicated to celebrating natural beauty. We offer professional hair care, braiding, locs, wig installation and a range of beauty services in a relaxing and comfortable environment.</p>
          <div className="feat">{features.map(([i, t, d]) => <div key={t}><span className="ic pale">{i}</span><div><strong>{t}</strong><small>{d}</small></div></div>)}</div>
          <a className="btn rose" href="#services">Learn More →</a></div>
      </section>
      <section id="services" className="band"><div className="wrap sec svc">
        <div><p className="eb rose">OUR SERVICES</p><h2>Our Services</h2><p className="muted">From natural hair care to beauty treatments, we've got you covered.</p><a className="btn dark" href="#prices">View All Services →</a></div>
        <div className="cards">{services.map((s) => (
          <article key={s.name}><img src={s.img} alt={s.name} loading="lazy" /><div><h3>{s.name}<span>→</span></h3><p>{s.desc}</p></div></article>))}</div>
      </div></section>
      <section id="gallery" className="wrap sec gal">
        <div><p className="eb rose">OUR GALLERY</p><h2>Explore Our Work</h2><p className="muted">See the beauty we create every day.</p><a className="btn dark" href={wa('Hello, can I see more of your work?')} {...ext}>Book Your Style →</a></div>
        <div className="gr">{gallery.map((g) => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />)}</div>
      </section>
      <section id="prices" className="darkband"><div className="wrap sec pr">
        <img src={images.price} alt="Braided hair at the salon" loading="lazy" />
        <div><p className="eb pk">FEATURED SERVICES & PRICES</p><h2>Popular Services</h2><p className="mu2">Quality service at affordable prices.</p>
          <ul>{prices.map(([n, p]) => <li key={n}><span>{n}</span><b>{p}</b></li>)}</ul>
          <a className="btn pink sm" href={wa('Hello, please send me your full price list.')} {...ext}>View Full Price List →</a></div>
      </div></section>
      <section id="reviews" className="band"><div className="wrap sec">
        <div className="rh"><div><p className="eb rose">WHAT OUR CLIENTS SAY</p><h2>Real People. Real Results.</h2><p className="muted">We're grateful for every review. Here's what our amazing clients have to say.</p></div>
          <div className="score"><strong>{site.rating}/5</strong> <Stars /><p className="muted">Based on {site.reviewCount} Google reviews</p></div></div>
        <div className="revs">{reviews.map(([n, t]) => <blockquote key={n}><div className="who"><span className="av">{n[0]}</span><div><strong>{n}</strong><br /><Stars /></div></div><p>{t}</p></blockquote>)}</div>
      </div></section>
      <Contact />
      <footer><div className="wrap fw"><Brand /><nav>{nav.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <div className="soc">{site.socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} {...ext}>{s.short}</a>)}</div>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p></div></footer>
      <a className="fab" href={wa('Hello, I would like to make an enquiry.')} {...ext} aria-label="Chat on WhatsApp">WA</a>
    </div>
  )
}
