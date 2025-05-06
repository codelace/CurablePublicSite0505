
import { useState, useEffect } from 'react';

export interface VisibleSections {
  mission: boolean;
  values: boolean;
  team: boolean;
}

export const useScrollReveal = () => {
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({
    mission: false,
    values: false,
    team: false
  });

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Check mission section
      const missionEl = document.getElementById('mission-section');
      if (missionEl && scrollY + windowHeight * 0.8 > missionEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, mission: true }));
      }
      
      // Check values section
      const valuesEl = document.getElementById('values-section');
      if (valuesEl && scrollY + windowHeight * 0.8 > valuesEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, values: true }));
      }
      
      // Check team section
      const teamEl = document.getElementById('team-section');
      if (teamEl && scrollY + windowHeight * 0.8 > teamEl.offsetTop) {
        setVisibleSections(prev => ({ ...prev, team: true }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visibleSections;
};

export default useScrollReveal;
