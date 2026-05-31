import { useState, useEffect, useRef, useCallback } from 'react';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';
import {
  FaRobot, FaDatabase, FaCode, FaLaptopCode, FaChartBar
} from 'react-icons/fa';
import './Experience.css';

/* ── Data: Bottom-to-Top chronological order ── */
const experienceData = [
  {
    company: 'IBM',
    role: 'Data Analyst',
    type: 'Internship',
    duration: 'Dec 2023 – Jan 2024',
    length: '2 months',
    location: 'India · Remote',
    description:
      'Learned insightful and useful Data Visualization and Analysis Techniques.',
    skills: ['Data Visualization', 'Data Analysis'],
    icon: <FaChartBar />,
    color: '#0062FF',
  },
  {
    company: 'TechnoHacks EduTech',
    role: 'Full Stack Developer',
    type: 'Internship',
    duration: 'Jan 2024 – Feb 2024',
    length: '2 months',
    location: 'India · Remote',
    description:
      'Developed 3 Major Projects and gained hands-on experience on Full Stack Development.',
    skills: ['Node.js', 'MEAN Stack'],
    icon: <FaCode />,
    color: '#FF6B35',
  },
  {
    company: 'Levaze Digital',
    role: 'Full Stack Developer',
    type: 'Internship',
    duration: 'Apr 2024 – Jun 2024',
    length: '3 months',
    location: 'India · Remote',
    description:
      'Managed a Group of 4 and Developed an E-Commerce Book Selling Website for the Company.',
    skills: ['Front-End Development', 'MEAN Stack'],
    icon: <FaLaptopCode />,
    color: '#10B981',
  },
  {
    company: 'IBM',
    role: 'AI & ML Intern',
    type: 'Internship',
    duration: 'Jun 2024 – Jul 2024',
    length: '2 months',
    location: 'India · Remote',
    description:
      'Developed an Eco-Energy Chatbot with the help of Watson Assistant of IBM.',
    skills: ['Artificial Intelligence', 'Machine Learning'],
    icon: <FaRobot />,
    color: '#0062FF',
  },
  {
    company: 'BlackHole Infiverse',
    role: 'AI & ML Intern',
    type: 'Full-time',
    duration: 'Jun 2025 – Nov 2025',
    length: '6 months',
    location: 'Goregaon, Maharashtra · On-site',
    description:
      'Built many AI Agents for various applications and worked with Unreal Engine 5, implementing AI in UE5.',
    skills: ['Agentic AI Development', 'Artificial Intelligence', 'Unreal Engine 5'],
    icon: <FaDatabase />,
    color: '#8B5CF6',
  },
];

/* ── SVG path through which the ball travels ── */
const PATH_D =
  'M 150 60 C 80 160, 280 180, 150 300 S 50 400, 150 500 C 250 600, 50 650, 150 750 S 280 850, 150 950 C 50 1050, 280 1100, 150 1200';

const Experience = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [ballPos, setBallPos] = useState({ x: 150, y: 60 });
  const [activeIndex, setActiveIndex] = useState(-1);

  /* Checkpoint positions along the path (0–1) */
  const checkpoints = [0.1, 0.28, 0.48, 0.68, 0.88];

  /* ── Fade-in observer for section title ── */
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

  /* ── Calculate scroll progress within the section ── */
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionH = sectionRef.current.offsetHeight;
    const viewH = window.innerHeight;

    // Progress from 0 (top enters viewport) to 1 (bottom leaves)
    // Multiply by 1.6 so the ball runs ahead of the scroll position
    const raw = ((viewH - rect.top) / (sectionH + viewH)) * 1.2;
    const clamped = Math.max(0, Math.min(1, raw));
    setProgress(clamped);

    // Determine which checkpoint is active
    let idx = -1;
    for (let i = checkpoints.length - 1; i >= 0; i--) {
      if (clamped >= checkpoints[i] - 0.04) {
        idx = i;
        break;
      }
    }
    setActiveIndex(idx);
  }, []);

  /* ── Move ball along the SVG path ── */
  useEffect(() => {
    if (!pathRef.current) return;
    const pathEl = pathRef.current;
    const len = pathEl.getTotalLength();
    const point = pathEl.getPointAtLength(progress * len);
    setBallPos({ x: point.x, y: point.y });
  }, [progress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ── Get checkpoint positions on the path ── */
  const getCheckpointPos = (t) => {
    if (!pathRef.current) return { x: 150, y: 60 };
    const len = pathRef.current.getTotalLength();
    const pt = pathRef.current.getPointAtLength(t * len);
    return { x: pt.x, y: pt.y };
  };

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <span>Experience</span>
      </h2>
      <p className="experience-total">My Professional Journey</p>

      <div className="experience-track">
        {/* ── SVG Path + Ball ── */}
        <svg
          ref={svgRef}
          className="experience-svg"
          viewBox="0 0 300 1300"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background dashed path */}
          <path
            d={PATH_D}
            className="exp-path-bg"
          />

          {/* Traced (filled) path */}
          <path
            ref={pathRef}
            d={PATH_D}
            className="exp-path-traced"
            style={{
              strokeDashoffset: pathRef.current
                ? pathRef.current.getTotalLength() * (1 - progress)
                : 2000,
            }}
          />

          {/* ── Start Flag ── */}
          <g className="exp-flag-start">
            {/* Pole */}
            <line x1="150" y1="15" x2="150" y2="60" stroke="#fff" strokeWidth="2.5" />
            {/* Checkered flag */}
            <rect x="150" y="10" width="28" height="20" fill="#fff" rx="2" />
            <rect x="150" y="10" width="7" height="5" fill="#111" />
            <rect x="164" y="10" width="7" height="5" fill="#111" />
            <rect x="157" y="15" width="7" height="5" fill="#111" />
            <rect x="171" y="15" width="7" height="5" fill="#111" />
            <rect x="150" y="20" width="7" height="5" fill="#111" />
            <rect x="164" y="20" width="7" height="5" fill="#111" />
            <rect x="157" y="25" width="7" height="5" fill="#111" />
            <rect x="171" y="25" width="7" height="5" fill="#111" />
            <text x="150" y="48" className="exp-flag-text" textAnchor="end">START</text>
          </g>

          {/* ── Finish Ribbon ── */}
          <g className="exp-flag-finish">
            <line x1="150" y1="1200" x2="150" y2="1260" stroke="#fff" strokeWidth="2" />
            {/* Ribbon */}
            <path
              d="M 100 1240 Q 125 1230, 150 1240 Q 175 1250, 200 1240"
              fill="none"
              stroke="#EF4444"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 105 1248 Q 130 1238, 150 1248 Q 170 1258, 195 1248"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <text x="150" y="1280" className="exp-flag-text" textAnchor="middle" fill="#EF4444">PRESENT</text>
          </g>

          {/* ── Checkpoint circles on path ── */}
          {checkpoints.map((t, i) => {
            const pos = getCheckpointPos(t);
            const isActive = i <= activeIndex;
            return (
              <g key={i}>
                {/* Outer glow ring */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="18"
                  className={`exp-checkpoint-ring ${isActive ? 'active' : ''}`}
                />
                {/* Inner filled circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="12"
                  className={`exp-checkpoint ${isActive ? 'active' : ''}`}
                />
                {/* Number */}
                <text
                  x={pos.x}
                  y={pos.y + 4}
                  textAnchor="middle"
                  className="exp-checkpoint-num"
                >
                  {i + 1}
                </text>
              </g>
            );
          })}

          {/* ── Moving Ball ── */}
          <circle
            cx={ballPos.x}
            cy={ballPos.y}
            r="10"
            className="exp-ball"
          />
          <circle
            cx={ballPos.x}
            cy={ballPos.y}
            r="16"
            className="exp-ball-glow"
          />
        </svg>

        {/* ── Experience Cards (positioned alongside checkpoints) ── */}
        <div className="experience-cards">
          {experienceData.map((exp, i) => {
            const pos = getCheckpointPos(checkpoints[i]);
            const isLeft = i % 2 === 0;
            const isActive = i <= activeIndex;

            return (
              <div
                className={`exp-card ${isLeft ? 'left' : 'right'} ${isActive ? 'active' : ''}`}
                key={`${exp.company}-${i}`}
                style={{ top: `${(pos.y / 1300) * 100}%` }}
              >
                <div className="exp-card-connector" />
                <div className="exp-card-icon" style={{ background: exp.color }}>
                  {exp.icon}
                </div>
                <div className="exp-card-content">
                  <div className="exp-card-header">
                    <h4 className="exp-card-company">{exp.company}</h4>
                    <span className="exp-card-type">{exp.type}</span>
                  </div>
                  <p className="exp-card-role">{exp.role}</p>
                  <div className="exp-card-meta">
                    <span><HiCalendar /> {exp.duration} · {exp.length}</span>
                    <span><HiLocationMarker /> {exp.location}</span>
                  </div>
                  <p className="exp-card-desc">{exp.description}</p>
                  <div className="exp-card-skills">
                    {exp.skills.map((s) => (
                      <span className="exp-card-skill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
