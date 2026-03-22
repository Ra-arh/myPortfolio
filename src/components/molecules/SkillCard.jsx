import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div 
      className="skill-card glass"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -10, scale: 1.05, borderColor: 'var(--accent-color)' }}
    >
      <img 
        src={`/Images/Skills/${skill.img}`} 
        alt={skill.name} 
        className="skill-icon" 
        onError={(e) => { e.target.style.display = 'none'; }} 
      />
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

export default SkillCard;
