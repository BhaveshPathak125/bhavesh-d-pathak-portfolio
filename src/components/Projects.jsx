import { useEffect, useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import './Projects.css';

const projectsData = [
  {
    title: 'Swar AI',
    subtitle: 'Voice-Based AI Assistant App',
    date: 'Jun 2025 – Jun 2026',
    status: 'In Progress',
    description:
      'Developing a Voice-Based AI Assistant App automating tasks like WhatsApp messaging, calling, searching, and chat features.',
    detailDescription:
      'A comprehensive voice-controlled AI assistant that integrates with WhatsApp for automated messaging, initiates calls, performs intelligent web searches, and provides conversational chat capabilities — all through natural voice commands.',
    tech: ['Python', 'MERN', 'MySQL', 'HTML/CSS/JS', 'Crew AI'],
    image: '/images/swar-ai.png',
    github: 'https://github.com/BhaveshPathak125/Swar_AI',
  },
  {
    title: 'Daily Money',
    subtitle: 'AI-Powered Expense Tracker',
    date: 'Present',
    status: 'In Progress',
    description:
      'Expense Tracker with AI Assistant providing insights and personalized advice on daily spending.',
    detailDescription:
      'Smart expense tracking application powered by AI that analyzes spending patterns, provides personalized financial advice, and helps users manage their daily expenses for better financial management.',
    tech: ['React.JS', 'Python', 'HTML', 'CSS'],
    image: '/images/daily-money.png',
    github: 'https://github.com/BhaveshPathak125/DailyMoney',
  },
  {
    title: 'Camelot AI',
    subtitle: 'RAG-Based Document Chatbot',
    date: 'Feb 2026',
    status: 'In Progress',
    description:
      'RAG-Based Chatbot that answers questions over multiple uploaded documents with accurate context retrieval.',
    detailDescription:
      'An intelligent RAG-based chatbot capable of processing multiple uploaded documents, analyzing their content, and providing accurate answers by retrieving the most relevant context — built with Flask and FastAPI.',
    tech: ['Flask', 'FastAPI', 'Python', 'JavaScript'],
    image: '/images/camelot-ai.png',
    github: 'https://github.com/BhaveshPathak125/Camelot-AI',
  },
];

const Projects = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <span>Featured Projects</span>
      </h2>

      <div className="projects-bento">
        {projectsData.map((project) => (
          <div className="project-card fade-in" key={project.title}>
            <div className="project-card-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="project-card-image-overlay" />
              <span className="project-card-status">{project.status}</span>
            </div>

            <div className="project-card-body">
              <p className="project-card-date">{project.date}</p>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Hover detail overlay */}
            <div className="project-card-detail">
              <h3>{project.title} — {project.subtitle}</h3>
              <p>{project.detailDescription}</p>
              <div className="project-card-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                View Project <HiExternalLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
