import React from 'react';
import './about.css';
import { FaGraduationCap, FaBriefcase, FaAward, FaBookOpen } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <section className="experience-panel" id="experience" aria-labelledby="experience-title">
            <div className="experience-heading">
              <span className="experience-icon"><FaBriefcase aria-hidden="true" /></span>
              <div>
                <p className="eyebrow">Where I&apos;ve worked</p>
                <h3 id="experience-title">Experience</h3>
              </div>
              <span className="experience-count">02 roles</span>
            </div>

            <div className="experience-list">
              <article className="experience-entry reveal-up">
                <div className="experience-meta">
                  <span>Feb 2026 — Aug 2026</span>
                  <span className="experience-status"><span aria-hidden="true" /> Freelance</span>
                </div>
                <h4>Backend &amp; API Developer</h4>
                <p className="experience-company">Factory Management System <span>·</span> Node.js, MySQL, Flutter Integration</p>
                <ul className="about-list experience-details">
                  <li>Designed the backend architecture and REST APIs for a full-scale factory management system used by a Flutter desktop and web application.</li>
                  <li>Built sales workflows, inventory tracking, invoice generation with Arabic-font PDF support, and payment and collection tracking across Admin, Sales, and Warehouse modules.</li>
                  <li>Managed database structure and relationships for the complete order-to-invoice lifecycle.</li>
                  <li>Set up and configured servers, deployed to production, and maintained stable, secure live services.</li>
                </ul>
              </article>

              <article className="experience-entry reveal-up">
                <div className="experience-meta">
                  <span>April 2025 — July 2025</span>
                  <span className="experience-status"><span aria-hidden="true" /> Internship</span>
                </div>
                <h4>Full Stack Web Developer Intern</h4>
                <p className="experience-company">SustainGRC <span>·</span> London, United Kingdom (Remote)</p>
                <ul className="about-list experience-details">
                  <li>Contributed across the frontend and backend of the company&apos;s ESG-focused web application in a collaborative Agile environment.</li>
                  <li>Worked hands-on with React.js, Next.js, NestJS, and Node.js (Express.js) to build responsive, accessible interfaces and secure, scalable backend APIs.</li>
                  <li>Integrated real-time data and optimized performance to improve the user experience.</li>
                  <li>Connected client and server workflows for reliable application behavior, collaborating with cross-functional teams using Git and code reviews.</li>
                </ul>
              </article>
            </div>
          </section>

          <div className="about-grid">
            <div className="about-card reveal-up">
              <div className="about-card-header">
                <FaGraduationCap className="about-icon" />
                <h3>Education</h3>
              </div>
              <div className="about-card-body">
                <h4>Bachelor of Computer Science</h4>
                <p className="about-meta">Higher Technological Institute | 2020 - 2024</p>
                <p className="about-meta">Grade: 3.39 | Graduation Project: A</p>
              </div>
            </div>

            <div className="about-card reveal-up">
              <div className="about-card-header">
                <FaAward className="about-icon" />
                <h3>Scholarships</h3>
              </div>
              <div className="about-card-body">
                <ul className="about-list">
                  <li><strong>Digital Egypt Pioneers Initiative (DEPI)</strong> — Full Stack .NET Track (28 Nov 2025 – 10 May 2026)</li>
                  <li><strong>NTI</strong> - MEAN-Stack Track (Aug 2024 - Oct 2024)</li>
                  <li><strong>ITI</strong> - MEANSTACK Track, Smart Village (Aug 2023)</li>
                  <li><strong>ITI</strong> - Frontend Track, Ismailia (Jul 2023 - Aug 2023)</li>
                </ul>
              </div>
            </div>

            <div className="about-card reveal-up">
              <div className="about-card-header">
                <FaBookOpen className="about-icon" />
                <h3>Courses</h3>
              </div>
              <div className="about-card-body">
                <ul className="about-list">
                  <li>Back-End Development Diploma - Route IT Training Center (May 2023 - Oct 2023)</li>
                  <li>Front-End Development Diploma - Senior Steps IT Training Center (Jun 2022 - Sep 2022)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-extra">
            <div className="about-extra-card soft-skills reveal-up">
              <h3>Soft Skills</h3>
              <div className="skills-tags">
                <span>Problem-solving</span>
                <span>Communication</span>
                <span>Teamwork</span>
                <span>Time Management</span>
                <span>Adaptability</span>
                <span>Decision Making</span>
              </div>
            </div>
            <div className="about-extra-card languages reveal-up">
              <h3>Languages</h3>
              <div className="skills-tags">
                <span>Arabic (Native)</span>
                <span>English (Good)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
