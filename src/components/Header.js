import React from 'react';

const Header = ({ menuOpen, setMenuOpen, sections, activeSection, setActiveSection, sectionRefs, darkMode, setDarkMode }) => {
  const handleNavClick = (key) => {
    setActiveSection(key);
    setMenuOpen(false);
    // No scroll, just show content at top
  };

  return (
    <div>
      {/* Dark Mode Toggle */}
      <div style={{ position: 'fixed', top: 22, right: 22, zIndex: 101 }}>
        <button
          aria-label="Toggle dark mode"
          style={{
            background: darkMode ? '#232526' : '#fff',
            color: darkMode ? '#f5f5f5' : '#222',
            border: 'none',
            borderRadius: '50%',
            width: 26,
            height: 26,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            transition: 'background 0.2s, color 0.2s',
            padding: 0
          }}
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Header with Logo and Name */}

      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        padding: '1rem 2rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        minHeight: 72
      }}>
        {/* Hamburger Menu */}
        <button
          aria-label="Open menu"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            zIndex: 102
          }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div style={{ width: 24, height: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
            <span style={{ display: 'block', height: 3, background: '#444', borderRadius: 2 }}></span>
            <span style={{ display: 'block', height: 3, background: '#444', borderRadius: 2 }}></span>
            <span style={{ display: 'block', height: 3, background: '#444', borderRadius: 2 }}></span>
          </div>
        </button>

        {/* Centered Logo and Name */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          <div style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontWeight: 900,
            fontSize: '2.2rem',
            color: 'linear-gradient(90deg, #e94560 0%, #533483 100%)',
            background: 'linear-gradient(90deg, #e94560 0%, #533483 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            marginTop: '0.2rem',
          }}>Portfolio</div>
        </div>

        {/* Hamburger Dropdown */}
        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 20,
            background: '#fff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            borderRadius: 12,
            padding: '1rem 2rem',
            minWidth: 160,
            marginTop: '0.5rem'
          }}>
            {sections.map((section) => (
              <div
                key={section.key}
                style={{
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                  color: activeSection === section.key ? '#222' : '#666',
                  fontWeight: activeSection === section.key ? 600 : 400,
                }}
                onClick={() => handleNavClick(section.key)}
              >
                {section.label}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
