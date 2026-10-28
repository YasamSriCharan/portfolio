import React from 'react';
import { DotField } from './ui/dot-field';

const Hero = () => {
  const pillStyle = "inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium tracking-[-0.02em] outline-none transition-transform active:scale-[.97] focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <DotField
      headline="Yasam Sri Charan"
      eyebrow="Computer Science Student · Developer"
      description="I build thoughtful software solutions with algorithms, clean interfaces, and practical problem-solving."
      accent="#EF233C"
      actions={
        <>
          <a href="#projects" className={`${pillStyle} bg-[#EDF2F4] text-[#2B2D42]`}>
            View Projects
          </a>
          <a href="#contact" className={`${pillStyle} border border-[#8D99AE]/30 bg-[#8D99AE]/10 text-[#EDF2F4] backdrop-blur-md`}>
            Contact Me
          </a>
        </>
      }
    />
  );
};

export default Hero;
