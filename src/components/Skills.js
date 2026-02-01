import React from 'react';

const Skills = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)' }}>
      <div className="section-title">Skills & Technologies</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        <div className="card" style={{ minWidth: 200, maxWidth: 240, textAlign: 'left', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 500, border: 'none' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
          <strong style={{ fontSize: '1.2rem' }}>Languages</strong>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.8rem', lineHeight: '1.8' }}>
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript, Java</li>
          </ul>
        </div>
        <div className="card" style={{ minWidth: 200, maxWidth: 240, textAlign: 'left', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', fontWeight: 500, border: 'none' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛠️</div>
          <strong style={{ fontSize: '1.2rem' }}>Developer Tools</strong>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.8rem', lineHeight: '1.8' }}>
            <li>VS Code, Git</li>
            <li>Figma, Postman</li>
            <li>Siebel CRM</li>
          </ul>
        </div>
        <div className="card" style={{ minWidth: 200, maxWidth: 240, textAlign: 'left', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#fff', fontWeight: 500, border: 'none' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
          <strong style={{ fontSize: '1.2rem' }}>Frameworks & Tech</strong>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.8rem', lineHeight: '1.8' }}>
            <li>React.js, Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Skills;
