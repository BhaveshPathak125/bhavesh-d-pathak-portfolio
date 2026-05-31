import { useEffect, useRef } from 'react';
import { HiAcademicCap, HiBriefcase, HiBadgeCheck, HiStar } from 'react-icons/hi';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <span>About Me</span>
      </h2>

      <div className="about-container">
        {/* Left Panel — Personal */}
        <div className="about-panel about-panel-left fade-in">
          <div className="about-panel-label">Personal</div>

          <div className="about-panel-item">
            <h4>Age</h4>
            <p>21 Years Old</p>
          </div>

          <div className="about-panel-item">
            <h4>Location</h4>
            <p>Sion, Mumbai — 400022</p>
          </div>

          <div className="about-panel-item">
            <h4>Hobbies</h4>
            <div className="hobby-tags">
              <span className="hobby-tag">🎨 Drawing</span>
              <span className="hobby-tag">🏐 Volleyball</span>
              <span className="hobby-tag">💻 Coding</span>
            </div>
          </div>

          <div className="about-panel-item">
            <h4>Languages</h4>
            <p>English, Hindi, Marathi</p>
          </div>
        </div>

        {/* Center Card — Photo */}
        <div className="about-card fade-in">
          <div className="about-card-image">
            {/* Replace with your actual photo */}
            <img
              src="portfolio-Photoroom.png"
              alt="Bhavesh D Pathak"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-card-image-placeholder" style={{ display: 'none', position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center' }}>
              ⟐
            </div>
            <div className="about-card-glow" />
          </div>
          <div className="about-card-info">
            <h3 className="about-card-name">Bhavesh D Pathak</h3>
            <div className="about-card-divider" />
            <p className="about-card-role">AI & ML Developer</p>
            <p className="about-card-summary" style={{ marginTop: '12px' }}>
              Passionate about leveraging data-driven solutions to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Right Panel — Professional */}
        <div className="about-panel about-panel-right fade-in">
          <div className="about-panel-label">Professional</div>

          <div className="about-panel-item">
            <h4>Education</h4>
            <p>B.E. in AI & Data Science</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CGPA: 8.49</p>
          </div>

          <div className="about-panel-item">
            <h4>Experience</h4>
            <p>1 Year 3 Months in Industry</p>
          </div>

          <div className="about-panel-item">
            <h4>Current Focus</h4>
            <p>AI Pipelines & LLM Apps</p>
          </div>

          <div className="about-panel-achievement">
            <HiBadgeCheck className="about-panel-achievement-icon" />
            <p>Postman API Certified</p>
          </div>

          <div className="about-panel-achievement">
            <HiStar className="about-panel-achievement-icon" />
            <p>Technical Head — AI & DS Dept</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
