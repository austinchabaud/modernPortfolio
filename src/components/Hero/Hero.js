import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! I am <br />
        Austin Chabaud
      </SectionTitle>
      <SectionText>
        Software Engineer with experience in full stack web application development. I design and develop beautifully simple things and I love what I do. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/austinchabaud'}>My GitHub</Button>
    </LeftSection>
  </Section>
);

export default Hero;