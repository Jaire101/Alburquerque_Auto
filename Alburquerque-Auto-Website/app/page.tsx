"use client";

import { FormEvent, useState } from "react";

const services = [
  { code: "01", title: "Diagnostics", copy: "Clear answers before parts get replaced. A focused diagnostic starts at $100.", tag: "Starts at $100" },
  { code: "02", title: "General Repair", copy: "Thoughtful mechanical and electrical repairs across a wide range of makes and models.", tag: "$150/hr labor" },
  { code: "03", title: "Preventive Maintenance", copy: "Fluids, filters, brakes, tune-ups, inspections, and maintenance that protects the miles ahead.", tag: "Quote required" },
  { code: "04", title: "A/C Service", copy: "Performance checks, leak diagnosis, repair, and recharge to get your cabin comfortable again.", tag: "20 min–day" },
  { code: "05", title: "Tires & Wheels", copy: "Tire mounting and related wheel service handled with care and attention to fitment.", tag: "Quote required" },
  { code: "06", title: "Performance", copy: "Smart, reliable modifications guided by real diagnostic knowledge—not guesswork.", tag: "Consultation first" },
];

const hours = [
  ["Monday–Tuesday", "8:00 AM–9:00 PM"],
  ["Wednesday", "8:00 AM–6:00 PM"],
  ["Thursday–Friday", "8:00 AM–9:00 PM"],
  ["Saturday–Sunday", "9:00 AM–3:00 PM"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Alburquerque Auto home">
          <img src="/logo.png" alt="Alburquerque Auto logo" />
          <span><strong>ALBURQUERQUE</strong><small>AUTO</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="tel:+14753492969">Call (475) 349-2969</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="eyebrow"><span></span> Automotive Technician · NY / CT / NJ</div>
        <h1>THE ISSUE<br />STOPS <em>HERE.</em></h1>
        <p className="hero-copy">Diagnostics, repairs, maintenance, and performance work delivered with honesty, precision, and respect for the person behind the wheel.</p>
        <div className="hero-actions">
          <a className="button primary" href="#booking">Request an appointment <span>↗</span></a>
          <a className="button secondary" href="tel:+14753492969">Same-day? Call the shop</a>
        </div>
        <div className="hero-stats">
          <div><strong>$100</strong><span>Diagnostic starting rate</span></div>
          <div><strong>$150<small>/HR</small></strong><span>Labor rate</span></div>
          <div><strong>7 DAYS</strong><span>Appointment availability</span></div>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>A</span></div>
      </section>

      <section className="marquee" aria-label="Core values"><div>
        <span>DIAGNOSTICS & REPAIRS</span><i>◆</i><span>HONESTY & QUALITY</span><i>◆</i><span>EXPERTISE ACROSS MAKES</span><i>◆</i><span>DIAGNOSTICS & REPAIRS</span>
      </div></section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><span className="kicker">WHAT WE DO</span><h2>SKILL FOR THE<br /><em>WHOLE MACHINE.</em></h2></div>
          <p>From a warning light you can’t explain to performance work you’ve been planning, every job starts with understanding the vehicle—and your goals.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.code}>
              <span className="service-code">{service.code}</span>
              <div className="service-line"></div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-visual">
          <div className="photo-placeholder">
            <span>SHOP PHOTO</span><small>Owner image can be added here</small>
          </div>
          <div className="experience-badge"><strong>VAST</strong><span>multi-make<br />expertise</span></div>
        </div>
        <div className="about-copy">
          <span className="kicker">ABOUT ALBURQUERQUE AUTO</span>
          <h2>MORE THAN A FIX.<br /><em>A STRAIGHT ANSWER.</em></h2>
          <p className="lead">“Let’s get that issue that’s in need of attention taken care of.”</p>
          <p>Alburquerque Auto was built around a simple idea: clients deserve to understand what is happening with their car. That means careful diagnostics, honest recommendations, and quality work across many different makes and models.</p>
          <div className="values">
            <div><b>01</b><span><strong>Honesty first</strong><small>No pressure. Clear findings and real options.</small></span></div>
            <div><b>02</b><span><strong>Quality always</strong><small>Work approached with pride and attention.</small></span></div>
            <div><b>03</b><span><strong>Broad expertise</strong><small>Knowledge that reaches beyond one badge.</small></span></div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-heading compact">
          <div><span className="kicker">HOW IT WORKS</span><h2>FROM CONCERN<br /><em>TO CONFIDENCE.</em></h2></div>
        </div>
        <div className="process-row">
          <div><span>01</span><h3>Tell us what’s happening</h3><p>Share the symptoms, vehicle details, and timing that works for you.</p></div>
          <div><span>02</span><h3>Get a clear plan</h3><p>The shop reviews your request and follows up with timing and a quote.</p></div>
          <div><span>03</span><h3>Approve the work</h3><p>Major maintenance may require a deposit before parts or time are reserved.</p></div>
          <div><span>04</span><h3>Drive informed</h3><p>Leave knowing what was done and what your vehicle may need next.</p></div>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-info">
          <span className="kicker">REQUEST AN APPOINTMENT</span>
          <h2>LET’S TAKE<br />CARE OF <em>IT.</em></h2>
          <p>Send the details below. This is a request—not a confirmed appointment. The owner will follow up to confirm availability, timing, and any quote or deposit.</p>
          <div className="policy-note"><b>PLEASE NOTE</b><span>Same-day service requires a phone call. Major work should be requested 48 hours to 2 weeks ahead.</span></div>
        </div>
        <form className="booking-form" onSubmit={submitBooking}>
          {submitted ? (
            <div className="success" role="status">
              <span>✓</span><h3>Request prepared.</h3>
              <p>Thanks—your appointment details are ready for review. For this preview, no information was sent. Connect the final booking service to deliver confirmations and reminders.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Send another request</button>
            </div>
          ) : <>
            <div className="form-row"><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" /></label></div>
            <div className="form-row"><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@email.com" /></label><label>Service needed<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.code}>{s.title}</option>)}</select></label></div>
            <label>Service address<input required name="address" autoComplete="street-address" placeholder="Street, city, state, ZIP" /></label>
            <div className="form-row"><label>Preferred date<input required name="date" type="date" /></label><label>Vehicle<input required name="vehicle" placeholder="Year, make, model" /></label></div>
            <label>What’s the concern?<textarea required name="concern" rows={4} placeholder="Describe what you’re noticing, any warning lights, sounds, or recent work…"></textarea></label>
            <label className="check"><input required type="checkbox" /><span>I understand this is a request. Appointments are confirmed by the owner, and cancellations for major work may forfeit the deposit.</span></label>
            <button className="submit" type="submit">Submit appointment request <span>↗</span></button>
            <small className="form-fine">You’ll receive confirmation after the owner reviews your request. Reminder timing: 24 hours before confirmed appointments.</small>
          </>}
        </form>
      </section>

      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="section-heading compact"><div><span className="kicker">WORK IN PROGRESS</span><h2 id="gallery-title">THE WORK<br /><em>SPEAKS NEXT.</em></h2></div><p>Reserved for real repairs, builds, diagnostics, and behind-the-scenes shop photos as the owner sends them.</p></div>
        <div className="gallery-grid">
          {["DIAGNOSTIC WORK", "REPAIRS", "PERFORMANCE"].map((label, i) => <div className={`gallery-slot slot-${i+1}`} key={label}><span>0{i+1}</span><b>{label}</b><small>Photo coming soon</small></div>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-main"><span className="kicker">GET IN TOUCH</span><h2>A BETTER ANSWER<br />IS ONE <em>CALL AWAY.</em></h2><a className="phone" href="tel:+14753492969">(475) 349-2969 <span>↗</span></a><a className="email" href="mailto:lexusis3002jzgte@yahoo.com">lexusis3002jzgte@yahoo.com</a></div>
        <div className="hours"><h3>Appointment hours</h3>{hours.map(([day,time]) => <div key={day}><span>{day}</span><b>{time}</b></div>)}<p>Serving clients across NY, CT & NJ.</p></div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/logo.png" alt="" /><span><strong>ALBURQUERQUE AUTO</strong><small>Honesty and quality.</small></span></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#booking">Booking</a><a href="#contact">Contact</a><a href="#" aria-label="Instagram placeholder">Instagram ↗</a></div>
        <p>© {new Date().getFullYear()} Alburquerque Auto. All rights reserved.</p>
      </footer>
    </main>
  );
}
