import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
// import { AiOutlineOpenAI } from "react-icons/ai";

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<SectionTitle> Technologies </SectionTitle>
		<SectionText>
			I bring expertise across a range of technologies in web development and automation, from back-end engineering to front-end design and innovative automation solutions.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Proficient with JavaScript frameworks and libraries, including React.js, Angular, and Redux, to create responsive and dynamic interfaces.
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Skilled in Node.js, MongoDB, PostgreSQL, MySQL, and noSQL databases, with cloud experience on Azure and AWS, and frameworks like Express for robust server-side solutions.
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				// <AiOutlineOpenAI size='3rem' />
				<ListContainer>
					<ListTitle>AI/Automation</ListTitle>
					<ListParagraph>
						Focused on using cutting-edge tools like Make and n8n, enabling advanced system automation and workflow optimization.
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
