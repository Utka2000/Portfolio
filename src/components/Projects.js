import React from 'react';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)' }}>
      <div className="section-title">Featured Projects</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <div className="card App-link" style={{ minWidth: 280, maxWidth: 340, textAlign: 'left', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', transition: 'all 0.3s', display: 'block', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', border: 'none', cursor: 'pointer' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🛒</div>
          <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>E-Commerce Web Application</strong>
          <div style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1rem', fontSize: '0.9rem' }}>React.js • React Router • FakeStore API</div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.95)' }}>
            <li>Dynamic product browsing from FakeStore API</li>
            <li>Shopping cart with real-time cost updates</li>
            <li>Seamless navigation via React Router</li>
          </ul>
        </div>
        <div className="card App-link" style={{ minWidth: 280, maxWidth: 340, textAlign: 'left', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', transition: 'all 0.3s', display: 'block', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', border: 'none', cursor: 'pointer' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🎬</div>
          <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>Movie Search Application</strong>
          <div style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1rem', fontSize: '0.9rem' }}>React.js • Context API • OMDb API</div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.95)' }}>
            <li>Movie search and display using OMDb API</li>
            <li>Efficient state management with Context API</li>
            <li>Detailed info, loading/error handling</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Projects;
