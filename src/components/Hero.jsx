function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text-block">
          <h1 className="hero-name">
            <span className="hero-greeting">Hi, I'm </span>
            <span className="hero-name-highlight">Arnipalli Jeevan Sai</span>
          </h1>

          <h2>Electronics & Communication Engineer & Full Stack Developer</h2>

          <p className="hero-text">
            Passionate about IoT systems, web development,
            and modern web applications.
          </p>

          <div className="hero-btn-group">
            <a href="#projects">
              <button className="hero-btn">View Projects</button>
            </a>
            <a
              href="https://www.linkedin.com/in/jeevan-sai-arnipalli/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="hero-btn hero-btn-secondary">
                LinkedIn Profile
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQFZ2SDWOwEWhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731338214465?e=1775088000&v=beta&t=M4PqnKsgU5Nvgi8GLk5b4oYkqaI3QggqYLTEVGgPDz0" alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero