import React from 'react';

const Experience = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)' }}>
      <div className="section-title">Professional Experience</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="card" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'all 0.3s', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', borderLeft: '5px solid #6c757d' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💼</div>
          <strong style={{ fontSize: '1.3rem', color: '#2c3e50' }}>Dymensions Inc</strong> <br />
          <span style={{ color: '#6c757d', fontWeight: 600 }}>Software Engineer</span>
          <br />
          <span style={{ color: '#868e96', fontSize: '0.95rem' }}>May 2023 – Present • Bangalore, Karnataka</span>
          <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.8', color: '#495057' }}>
            <li>Developed and enhanced MERN stack mobile/desktop apps with innovative features</li>
            <li>Designed responsive Figma templates for Siebel-based products</li>
            <li>Implemented desktop view for mobile apps, dynamic footer, and React-oidc-context authentication</li>
            <li>Refactored state management to React Context for maintainability</li>
            <li>Optimized NGINX configs and routing, upgraded react-router-dom v5→v7</li>
            <li>Developed multi-app section with IDP-based configurations</li>
          </ul>
        </div>
        <div className="card" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'all 0.3s', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', borderLeft: '5px solid #6c757d' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎓</div>
          <strong style={{ fontSize: '1.3rem', color: '#2c3e50' }}>Ernet, India</strong> <br />
          <span style={{ color: '#6c757d', fontWeight: 600 }}>Intern</span>
          <br />
          <span style={{ color: '#868e96', fontSize: '0.95rem' }}>Jan 2023 – June 2023 • Delhi</span>
          <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.8', color: '#495057' }}>
            <li>Tested websites manually using Burp Suite, identified vulnerabilities</li>
            <li>Created static web pages with HTML/CSS, improved security and UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Experience;
