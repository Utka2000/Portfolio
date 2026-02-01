import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={require('../assets/about-photo.jpg')} alt="Utkarsh Yashraj" style={{ width: 200, height: 270, objectFit: 'cover', objectPosition: 'top', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.18)', marginBottom: 32, marginTop: 48, background: '#e9ecef', padding: 4 }} />
      <h1 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: '0.5rem', letterSpacing: '-1px', background: 'linear-gradient(135deg, #2c3e50 0%, #6c757d 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        Utkarsh Yashraj
      </h1>
      <p style={{ color: '#6c757d', marginBottom: '2rem', fontSize: '1.1rem', fontWeight: 500 }}>
        Software Engineer | MERN Stack | UI/UX Enthusiast
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a className="App-link" href="mailto:utkarshyashraj@gmail.com">📧 utkarshyashraj@gmail.com</a>
        <a className="App-link" href="tel:9162267803">📱 +91 9162267803</a>
        <a className="App-link" href="https://linkedin.com/in/utkarsh-yashraj" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        <a className="App-link" href="https://github.com/Utka2000" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
      </div>
      <div className="section-title" style={{ marginBottom: '1.5rem' }}>About Me</div>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#495057', textAlign: 'justify', maxWidth: '700px', margin: '0 auto' }}>
        Hi, I'm Utkarsh Yashraj, a passionate Software Engineer specializing in the MERN stack and UI/UX design. I love building interactive and visually appealing applications that deliver great user experiences. With a keen eye for detail and a commitment to clean code, I strive to create digital experiences that are both functional and beautiful.
      </p>
    </section>
  );
});

export default About;
