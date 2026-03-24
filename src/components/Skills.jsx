import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'Testing', img: 'testing.png' },
  { name: 'Cypress', img: 'cypress.png' },
  { name: 'JavaScript', img: 'Javascript.png' },
  { name: 'Playwright', img: 'Playwrite.png' },
  { name: 'TypeScript', img: 'Typescript.jpg' },
  { name: 'VS Code', img: 'VSCode.png' },
  { name: 'Selenium', img: 'selenium.png' },
  { name: 'Java', img: 'java.png' },
  { name: 'Eclipse IDE', img: 'EclipseIDE.png' },
  { name: 'Cucumber', img: 'Cucumber.png' },
  { name: 'Jenkins', img: 'Jenkins.png' },
  { name: 'Mocha', img: 'Mocha.png' },
  { name: 'JMeter', img: 'jmeter-seeklogo.png' },
  { name: 'Postman', img: 'Postman.png' },
  { name: 'Jira', img: 'Jira.png' },
  { name: 'MySQL', img: 'MySQL.png' },
  { name: 'GitHub', img: 'Github.png' },
  { name: 'Git', img: 'Git.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section relative">
      <div className="container">
        <h2 className="section-title">
          My Tech Stack
        </h2>

        <div className="skills-layout">
          <motion.div
            className="skills-content glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3>Experienced QA Automation Engineer</h3>
            <p>
              With over 5 years of experience in manual and automated testing, I specialize in tools such as Cypress, Playwright, Selenium, and BDD frameworks like Cucumber. I am proficient in JavaScript, TypeScript, and Java, with strong expertise in designing and developing robust automation frameworks using Maven, TestNG, Data-Driven, and Keyword-Driven approaches, while adhering to the Page Object Model design pattern.
            </p>
            <p className="mt-4">
              I have successfully delivered high-quality testing solutions across diverse domains, including E-Commerce, Healthcare, Transport, and Social Media. My experience includes effective defect management and collaboration using tools like Jira, Redmine, Asana, and Mantis. Additionally, I possess hands-on experience in mobile application testing across Android, iOS Native, NativeScript, Flutter, and React Native platforms.
            </p>
            <p className="mt-4">
              Furthermore, I have experience in API testing using Postman and RestAssured, along with integrating test suites into CI/CD pipelines using tools like Jenkins and GitHub Actions. I am well-versed in Agile and Scrum methodologies, enabling effective collaboration with cross-functional teams. I focus on writing clean, maintainable, and reusable test scripts while building scalable and efficient automation frameworks.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                className="skill-card glass"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05, borderColor: 'var(--accent-color)' }}
              >
                <img src={`${import.meta.env.BASE_URL}Skills/${skill.img}`} alt={skill.name} className="skill-icon" onError={(e) => { e.target.style.display = 'none'; }} />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
