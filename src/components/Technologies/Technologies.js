import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
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
			I've worked with a range of Technologies in the web dev world. From
			back-end to design.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						JavaScript, React.js, Angular, Redux
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node, MongoDB, PostgreSQL, noSQL, MySQL, Azure, AWS, Express
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Figma, CSS, Styled Components, Bootstrap, MaterialUI, PostCss, Sass,
						Scss, Adobe
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
