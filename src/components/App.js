import React, {useState, useEffect} from 'react';
import { HeroSection } from './Sections/HeroSection';
import { AboutSection } from './Sections/AboutSection';
import { ProjectsSection } from './Sections/ProjectsSection';

import about from '../web/images/about.png'

export const App = () => {
  const [me] = useState({
    name: 'Julius Regalado',
    title: 'Web Dev',
    taglines: [
      'Develop and Conquer',
      'Turning ideas into action.',
      'Write code, not excuses.',
      'Programmer. Engineer.',
      'Hello, World! it’s time code',
      'Elegant code is its documentation',
      'Less Code, More Testing',
      'Good code is its own best documentation.',
      'Developing apps like a boss',
      'Got Developer?',
      'The Best Developer Under One Roof.',
      'Open And Loaded',
      'Building The Future',
    ],
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
  });

  const [tagline, setTagline] = useState(null);

  function getTagline(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    setTagline(me.taglines[rand]);
    return tagline;
  }

  useEffect(() => {
    getTagline(me.taglines)
  });

  return (
    <div className="App"> 
      <HeroSection me={me} heroLayout="full-width" />
      <AboutSection photo={about} about={me} tagline={tagline} />
      <ProjectsSection />
    </div>
  );
}