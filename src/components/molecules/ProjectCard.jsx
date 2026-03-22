import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, ExternalLink, Github } from 'lucide-react';
import SocialIcon from '../atoms/SocialIcon';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
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
              <SocialIcon Icon={ExternalLink} href={project.live} title="Live Preview" className="icon-link" />
            )}
          </div>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        
        <div className="project-stack">
          {project.skills.map((skillImg, idx) => (
            <img 
              key={idx} 
              src={`/Images/Skills/${skillImg}`} 
              alt="tech" 
              className="stack-icon" 
              onError={(e) => { e.target.style.display = 'none'; }}
              title={skillImg.replace('.png', '').replace('.jpg', '')}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
