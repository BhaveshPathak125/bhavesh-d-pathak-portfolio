import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import './Contact.css';

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Add an Email Service (Gmail) → copy the Service ID below
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" to pathakbhavesh2005@gmail.com in the template
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_cheattn';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_axbwghe';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'fBYTETdN_YSHOQK0q';   // e.g. 'AbCdEfGhIjKlMnOp'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/bhavesh-pathak-013368295/',
    handle: 'Bhavesh Pathak',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/BhaveshPathak125',
    handle: 'BhaveshPathak125',
  },
  {
    name: 'Gmail',
    icon: <HiMail />,
    url: 'mailto:pathakbhavesh2005@gmail.com',
    handle: 'pathakbhavesh2005@gmail.com',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com/bhavesh_pathak15',
    handle: '@bhavesh_pathak15',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:       formData.name,
          from_email: formData.email,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error status:', err?.status);
        console.error('EmailJS error text:', err?.text);
        console.error('EmailJS full error:', JSON.stringify(err));
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <span>Get In Touch</span>
      </h2>

      <div className="contact-container">
        {/* Left — Social Links */}
        <div className="contact-social fade-in">
          <h3 className="contact-social-heading">
            Let's <span>Connect</span>
          </h3>
          <p className="contact-social-sub">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing.
          </p>

          <div className="contact-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <div className="contact-social-icon">{link.icon}</div>
                <div className="contact-social-link-text">
                  <h4>{link.name}</h4>
                  <p>{link.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="contact-form-card fade-in">
          <h3 className="contact-form-title">Send Me a Message</h3>
          <p className="contact-form-sub">
            Fill in the form below and I'll get back to you as soon as possible.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="contact-form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="contact-form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="contact-form-input contact-form-textarea"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {status === 'success' ? (
              <div className="contact-form-success">
                ✨ Message sent! I'll get back to you soon.
              </div>
            ) : status === 'error' ? (
              <div className="contact-form-error">
                ⚠️ Something went wrong. Please try again or email me directly.
              </div>
            ) : (
              <button
                type="submit"
                className="contact-form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="contact-form-sending">
                    <span className="contact-form-spinner" /> Sending…
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer fade-in">
        <p>
          © 2026 <span>Bhavesh D Pathak</span>. Built with Creativity & Passion.
        </p>
        <p className='contact-footer-text'>
          <span>Thank You!</span> for visiting my portfolio.
        </p>
      </div>
    </section>
  );
};

export default Contact;
