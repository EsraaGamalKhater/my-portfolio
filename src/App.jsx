import React from 'react'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .skill-category').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
