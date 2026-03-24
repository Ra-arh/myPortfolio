import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, MonitorSmartphone } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Simply Simple',
    desc: 'Loan application system including three types of users: Borrower, Admin, and Bank.',
    skills: ['testing.png', 'cypress.png', 'Javascript.png', 'VSCode.png', 'Postman.png', 'Git.png', 'Github.png', 'website.png'],
    github: '#',
    live: '#',
    disabledLive: true
  },
  {
    id: 2,
    title: 'Office Share',
    desc: 'Office sharing rent and lease application. Features Web, native Android and iOS applications, and an admin panel.',
    skills: ['testing.png', 'selenium.png', 'java.png', 'EclipseIDE.png', 'Jira.png', 'Postman.png', 'testNG.png', 'Jenkins.png', 'website.png', 'Apple.png', 'Android.png'],
    github: '#',
    live: 'https://office-share.io/#/'
  },
  {
    id: 3,
    title: 'OrderEzy',
    desc: 'Multivendor e-commerce application encompassing Android/iOS Flutter apps catering to Customer, Driver, and Vendor.',
    skills: ['testing.png', 'postman-icon.png', 'Jira.png', 'MySQL.png', 'website.png', 'Apple.png', 'Android.png'],
    github: '#',
    live: 'https://orderezy.com.au/'
  },
  {
    id: 4,
    title: 'myGlobal',
    desc: 'Automobile service application which includes Android/iOS native application and Admin panel.',
    skills: ['testing.png', 'Jira.png', 'Postman.png', 'website.png', 'Apple.png', 'Android.png'],
    github: '#',
    live: 'https://www.globalautocare.co.uk/my-global-app/'
  },
  {
    id: 5,
    title: 'GoHobby',
    desc: 'Social media application which includes iOS native application and Admin panel.',
    skills: ['testing.png', 'postman-icon.png', 'Jira.png', 'Apple.png'],
    github: '#',
    live: 'https://apps.apple.com/us/app/gohobby/id1664666578'
  },
  {
    id: 6,
    title: 'Mandobk',
    desc: 'Grocery Ecommerce including Android and iOS native applications for Customer, Driver and Vendor, plus Admin panel.',
    skills: ['testing.png', 'Postman.png', 'website.png', 'Android.png', 'Apple.png'],
    github: '#',
    live: 'https://mandobk.com.sa/'
  },
  {
    id: 7,
    title: 'Buitanda',
    desc: 'E-Commerce application where users can buy and sell products across Web, Android, iOS, and Admin panel.',
    skills: ['testing.png', 'postman-icon.png', 'Jira.png', 'website.png', 'Android.png', 'Apple.png'],
    github: '#',
    live: 'https://www.buitanda.com/'
  },
  {
    id: 8,
    title: 'Five',
    desc: 'Social Media application for creating posts and challenges on Android/iOS Flutter applications and Admin Panel.',
    skills: ['testing.png', 'Postman.png', 'Android.png', 'Apple.png'],
    github: '#',
    live: 'https://play.google.com/store/apps/details?id=com.fivesocialmedia.fivesocialmedia&hl=en-IN'
  },
  {
    id: 9,
    title: 'Adwumapa',
    desc: 'On Demand Services app enabling users to book services from Web, Android and iOS applications plus Admin panel.',
    skills: ['testing.png', 'postman-icon.png', 'Jira.png', 'website.png', 'Android.png', 'Apple.png'],
    github: '#',
    live: 'https://www.adwumapa.com/'
  }
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="projects-grid">
          <AnimatePresence>
            {projectsData.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--accent-color)' }}
              >
                <div className="project-number">0{project.id}</div>
                <div className="project-content">
                  <div className="project-header">
                    <MonitorSmartphone className="project-icon" size={32} />
                    <div className="project-links">
                      {project.disabledLive ? (
                        <span className="icon-link disabled" title="Not Available">
                          <ExternalLink size={20} />
                        </span>
                      ) : (
                        <a href={project.live} className="icon-link" title="Live Preview" target="_blank" rel="noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  
                  <div className="project-stack">
                    {project.skills.map((skillImg, idx) => (
                      <img 
                        key={idx} 
                        src={`${import.meta.env.BASE_URL}Skills/${skillImg}`} 
                        alt="tech" 
                        className="stack-icon" 
                        onError={(e) => { e.target.style.display = 'none'; }}
                        title={skillImg.replace('.png', '').replace('.jpg', '')}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {visibleCount < projectsData.length && (
          <div className="load-more-container flex-center">
            <button className="btn btn-secondary glass" onClick={handleLoadMore}>
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
