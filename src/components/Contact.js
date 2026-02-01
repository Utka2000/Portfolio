import React from 'react';

const Contact = React.forwardRef(({ formRef, sendEmail, sending, sent }, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)' }}>
      <div className="section-title">Get In Touch</div>
      <p style={{ color: '#6c757d', marginBottom: '2rem', fontSize: '1.05rem' }}>Have a project in mind? Let's talk!</p>
      <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 500, margin: '0 auto' }} onSubmit={sendEmail}>
        <input name="from_name" type="text" placeholder="Your Name" required style={{ padding: '0.9em 1.2em', borderRadius: 10, border: '2px solid #e9ecef', fontSize: '1rem', transition: 'all 0.3s', outline: 'none' }} onFocus={e => e.target.style.borderColor = '#6c757d'} onBlur={e => e.target.style.borderColor = '#e9ecef'} />
        <input name="reply_to" type="email" placeholder="Your Email" required style={{ padding: '0.9em 1.2em', borderRadius: 10, border: '2px solid #e9ecef', fontSize: '1rem', transition: 'all 0.3s', outline: 'none' }} onFocus={e => e.target.style.borderColor = '#6c757d'} onBlur={e => e.target.style.borderColor = '#e9ecef'} />
        <textarea name="message" placeholder="Your Message" required rows={5} style={{ padding: '0.9em 1.2em', borderRadius: 10, border: '2px solid #e9ecef', fontSize: '1rem', transition: 'all 0.3s', outline: 'none', resize: 'vertical' }} onFocus={e => e.target.style.borderColor = '#6c757d'} onBlur={e => e.target.style.borderColor = '#e9ecef'} />
        <button type="submit" style={{ background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '1em', fontSize: '1.05rem', cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s' }} onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'} disabled={sending}>
          {sending ? 'Sending...' : 'Send Message 📩'}
        </button>
      </form>
      {sent && <div style={{ color: '#28a745', marginTop: '1.5rem', fontWeight: 600 }}>Message sent successfully! ✅</div>}
      <div style={{ marginTop: '2.5rem', color: '#6c757d', fontSize: '1.05rem' }}>
        Or reach out via <a className="App-link" href="mailto:utkarshyashraj@gmail.com">Email</a> or <a className="App-link" href="tel:9162267803">Phone</a>
      </div>
    </section>
  );
});

export default Contact;
