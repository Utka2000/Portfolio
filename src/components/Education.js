import React from 'react';

const Education = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="card fade-in" style={{ width: '100%', maxWidth: '100%', margin: '0', padding: '3rem 2rem', minHeight: 'calc(100vh - 180px)' }}>
      <div className="section-title">Education</div>
      <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
        <li style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(108, 117, 125, 0.05)', borderRadius: '12px', borderLeft: '4px solid #6c757d' }}>
          <strong style={{ fontSize: '1.2rem', color: '#2c3e50' }}>🎓 MIT School of Engineering, Pune</strong> 
          <br />
          <span style={{ color: '#6c757d' }}>B.Tech in Computer Science (2019–2023)</span>
          <br />
          <span style={{ color: '#495057', fontWeight: 600 }}>CGPA: 7.4/10</span>
        </li>
        <li style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(108, 117, 125, 0.05)', borderRadius: '12px', borderLeft: '4px solid #6c757d' }}>
          <strong style={{ fontSize: '1.2rem', color: '#2c3e50' }}>📚 Thakur Om Prakash Singh U.M.V, Saran</strong> 
          <br />
          <span style={{ color: '#6c757d' }}>12th/BSEB, 2019</span>
          <br />
          <span style={{ color: '#495057', fontWeight: 600 }}>75%</span>
        </li>
        <li style={{ padding: '1.5rem', background: 'rgba(108, 117, 125, 0.05)', borderRadius: '12px', borderLeft: '4px solid #6c757d' }}>
          <strong style={{ fontSize: '1.2rem', color: '#2c3e50' }}>📖 Gyan Niketan, Patna</strong> 
          <br />
          <span style={{ color: '#6c757d' }}>10th/CBSE, 2017</span>
          <br />
          <span style={{ color: '#495057', fontWeight: 600 }}>71%</span>
        </li>
      </ul>
    </section>
  );
});

export default Education;
