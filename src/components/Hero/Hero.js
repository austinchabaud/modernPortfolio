import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Helping you automate your day to day with code.
      </SectionTitle>
      <SectionText>
As a software engineer, I am passionate about harnessing the power of AI to streamline your workflows. 
Whether you are looking to optomize existing systems or innovate through automation, I'm here to turn your vision into reality.
      </SectionText>
      <Button onClick={() => window.open('https://calendly.com/austinchabaud/strategy-session', '_blank')}>
        Book a Call
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
