import './App.css'
import Navbar from './Navbar/Navbar'
import Herosection from './Herosection/Herosection'
import Page_2 from './Page_2/Page_2'
import Section from './Section/Section'
import Skills from './Skills/Skills'
import Page from './Page_1.5/Page_1.5.jsx'
import Projects_cards from './Projects/Projects_cards.jsx'
import Certificatecards from './Certificate/Certificatecards.jsx'
import Passions from './Passions/Passions.jsx'
import Papercard from './Paper/Papercard.jsx'
import Contact from './Contact/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Herosection />
        <Page />
      </div>

      <div id="about">
        <Section name="ABOUT ME" />
        <Page_2 />
      </div>

      <div id="skills">
        <Section name="SKILLS" />
        <Skills />
      </div>

      <div id="projects">
        <Section name="PROJECTS" />
        <Projects_cards />
      </div>

      <div id="certificates">
      <Section name="CERTIFICATES" />
      <Certificatecards />
      </div>

      <Section name="PASSIONS" />
      <Passions />

      <div id="papers">
      <Section name="SSRN-WORKS" />
      <Papercard />
      </div>

      <div id="contact">
        <Section name="CONTACT" />
        <Contact />
      </div>

      <div className="ptag">
        <p>© 2025 Nithin Joel J. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;