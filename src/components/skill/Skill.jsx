import React from 'react';
import './skill.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython,
  FaAngular, FaBootstrap, FaGithub, FaServer, FaMicrosoft
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs, SiMongodb,
  SiPostgresql, SiGraphql, SiJquery, SiCplusplus, SiMysql
} from 'react-icons/si';

function Skill() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
        { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'var(--color-ink)' },
        { name: 'Angular', icon: <FaAngular />, color: '#dd0031' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
        { name: 'jQuery', icon: <SiJquery />, color: '#0769ad' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#cccccc' },
        { name: 'NestJS', icon: <SiNestjs />, color: '#e0234e' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#e535ab' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'RESTful APIs', icon: <FaServer />, color: '#4db5ff' },
      ]
    },
    {
      title: 'Languages & Tools',
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'GitHub', icon: <FaGithub />, color: 'var(--color-ink)' },
        { name: 'Office', icon: <FaMicrosoft />, color: '#d83b01' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h5>What I Know</h5>
          <h2>My Skills</h2>
        </div>
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div className="skill-category reveal-up" key={idx}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i} style={{ '--skill-color': skill.color }}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
