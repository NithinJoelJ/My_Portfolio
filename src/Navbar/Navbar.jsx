import './Navbar.css'

function Navbar() {
    const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className="sticky-navbar container">
            <div className="nav-left">
                <nav>
                    <h2><a href="#home">Nithin Joel J</a></h2>
                </nav>
            </div>
            <div className="nav-right">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#certificates">Certificates</a>
                <a href="#papers">Papers</a>
                <button onClick={scrollToContact}>Let's Talk</button>
                
            </div>
        </div>
    );
}

export default Navbar;