import React from 'react';

const Footer = ({ activeSection, setActiveSection, sectionRefs, setMenuOpen }) => {
  const navItems = [
    { key: 'about', label: 'About', icon: '👤' },
    { key: 'education', label: 'Education', icon: '🎓' },
    { key: 'experience', label: 'Experience', icon: '💼' },
    { key: 'projects', label: 'Projects', icon: '🚀' },
    { key: 'skills', label: 'Skills', icon: '⚡' },
    { key: 'contact', label: 'Contact', icon: '📧' },
  ];

  const handleNavClick = (key) => {
    setActiveSection(key);
    setMenuOpen(false);
    // No scroll, just show content at top
  };

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      boxShadow: '0 -2px 16px rgba(0,0,0,0.1)',
      padding: '0.8rem 1rem',
      zIndex: 100,
      borderTop: '1px solid rgba(0,0,0,0.05)',
      overflowX: 'auto',
      overflowY: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'nowrap',
        minWidth: 'max-content',
        margin: '0 auto',
        paddingBottom: '0.2rem'
      }}>
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleNavClick(item.key)}
            style={{
              background: activeSection === item.key ? 'linear-gradient(135deg, #6c757d 0%, #495057 100%)' : 'transparent',
              color: activeSection === item.key ? '#fff' : '#6c757d',
              border: 'none',
              borderRadius: '8px',
              padding: '0.3rem 0.6rem 0.5rem 0.6rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.15rem',
              fontWeight: activeSection === item.key ? 600 : 400,
              minWidth: '60px',
              flexShrink: 0,
              height: 'auto',
              boxShadow: 'none',
              outline: 'none',
              WebkitBoxShadow: 'none',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.key) {
                e.target.style.background = 'transparent';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.key) {
                e.target.style.background = 'transparent';
              }
            }}
          >
            <span style={{ lineHeight: 1, background: 'none', border: 'none', boxShadow: 'none' }}>{item.icon}</span>
            <span style={{ fontSize: '0.6rem', whiteSpace: 'nowrap', lineHeight: 1, marginTop: '0.1rem', background: 'none', border: 'none', boxShadow: 'none', padding: 0 }}>{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
