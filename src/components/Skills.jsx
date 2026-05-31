import { useEffect, useRef } from 'react';
import {
  SiPython, SiPytorch, SiTensorflow, SiLangchain, SiHuggingface,
  SiReact, SiNodedotjs, SiExpress, SiFlask, SiFastapi,
  SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiPostman, SiGit,
  SiPandas, SiNumpy,
} from 'react-icons/si';
import { HiCode, HiChip, HiCog, HiLightningBolt } from 'react-icons/hi';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
  {
    title: 'AI / ML',
    subtitle: 'Machine Learning & AI Frameworks',
    icon: <HiChip />,
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'RAG', icon: <HiLightningBolt /> },
      { name: 'NLP', icon: <HiChip /> },
      { name: 'LangGraph', icon: <HiCog /> },
    ],
  },
  {
    title: 'Full Stack',
    subtitle: 'Web Development & Databases',
    icon: <HiCode />,
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'HTML/CSS/JS', icon: <SiHtml5 /> },
    ],
  },
  {
    title: 'Tools',
    subtitle: 'Development & Automation Tools',
    icon: <HiCog />,
    skills: [
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'N8N', icon: <HiCog /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Groq', icon: <HiLightningBolt /> },
    ],
  },
  {
    title: 'Other',
    subtitle: 'Data Science & Concepts',
    icon: <HiLightningBolt />,
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Data Viz', icon: <HiChip /> },
      { name: 'System Design', icon: <HiCog /> },
      { name: 'Seaborn', icon: <SiPython /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <span>Skills & Tech Stack</span>
      </h2>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card fade-in" key={category.title}>
            <div className="skill-card-header">
              <div className="skill-card-icon">{category.icon}</div>
              <div>
                <h3 className="skill-card-title">{category.title}</h3>
                <p className="skill-card-subtitle">{category.subtitle}</p>
              </div>
            </div>

            <div className="skill-badges">
              {category.skills.map((skill) => (
                <div className="skill-badge" key={skill.name}>
                  <span className="skill-badge-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
