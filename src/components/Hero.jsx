import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Open to Opportunities
        </div>

        <h1 className="hero-heading">
          I Don't Just Write Code —{' '}
          <span className="highlight">I Teach Machines to Think.</span>
        </h1>

        <p className="hero-sub">
          Crafting intelligent solutions at the intersection of AI, Machine Learning,
          and Full-Stack Development. Turning data into decisions and prompts into products.
        </p>

        <div className="hero-cta-group">
          <a href="#projects" className="hero-cta hero-cta-primary">
            View My Work
          </a>
          <a href="#contact" className="hero-cta hero-cta-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
