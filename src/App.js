import './App.css';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  const sections = [
    { key: 'about', label: 'About' },
    { key: 'education', label: 'Education' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'skills', label: 'Skills' },
    { key: 'contact', label: 'Contact' },
  ];

  // Section refs
  const sectionRefs = {
    about: useRef(),
    education: useRef(),
    experience: useRef(),
    projects: useRef(),
    skills: useRef(),
    contact: useRef(),
  };
  // EmailJS form ref
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    emailjs.sendForm(
      'service_ic5hv0r',
      'template_2g7h9ai',
      formRef.current,
      'w5WUCZ_S9cbRNPiNB'
    )
    .then((result) => {
      setSending(false);
      setSent(true);
    }, (error) => {
      setSending(false);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`} style={{ paddingTop: '80px', paddingBottom: '90px' }}>
      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionRefs={sectionRefs}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Render only the active section */}
      {activeSection === 'about' && <About ref={sectionRefs.about} />}
      {activeSection === 'education' && <Education ref={sectionRefs.education} />}
      {activeSection === 'experience' && <Experience ref={sectionRefs.experience} />}
      {activeSection === 'projects' && <Projects ref={sectionRefs.projects} />}
      {activeSection === 'skills' && <Skills ref={sectionRefs.skills} />}
      {activeSection === 'contact' && (
        <Contact 
          ref={sectionRefs.contact} 
          formRef={formRef} 
          sendEmail={sendEmail} 
          sending={sending} 
          sent={sent} 
        />
      )}

      <Footer 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionRefs={sectionRefs}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}

export default App;
