import me from "../../assets/me.png";

function Home() {

  return (
    <section id="home" className="home-wrapper">
      <div className="home-text">
        <h5>Hello, I'm</h5>
        <h1>Esraa Gamal <span>Khater</span></h1>
        <div className="typing-wrapper">
          <span className="typing-text">Full Stack Developer</span>
        </div>
        <p>I build thoughtful web apps, from modern UIs to secure APIs.</p>

        <div className="btn-group">
          <a href={`${import.meta.env.BASE_URL}esraa-cv.pdf`} download="Esraa_Gamal_CV.pdf" className="btn-item">Download CV</a>
          <a href="#contact" className="btn-item btn-filled">Let's Talk</a>
        </div>
      </div>

      <div className="home-image-container">
        <div className="glow-ring" aria-hidden="true"></div>
        <div className="glow-ring-2" aria-hidden="true"></div>
        <img src={me} alt="Esraa Gamal Khater" />
      </div>
    </section>
  );
}

export default Home;
