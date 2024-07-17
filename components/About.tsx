import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

// https://github.com/lydhr/NextJSAcademicTheme?tab=readme-ov-file

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					{/* <p>
						I am a {personalInfo.about.year} PhD student
						in <ExtLink href= {personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
						advised by <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}. </ExtLink>
						 <br/><a className = "text-sm">✉️ {personalInfo.about.email}</a>
					</p> */}
					<p>
					I am a PhD candidate in Computer Science at New York University. My research interests include Computer Networks, Artificial Intelligence, and Computer Security. I received my BS degree in Computer Science in 2019 from Lahore University of Management Sciences (LUMS) where I also worked as a Research Assistant at the Technology for People Initiative (TPI) before joining NYU. I am currently working on multiple projects within the domain of Computer Networks especially involving the analysis and advancement of Congestion Control protocols for next generation wireless networks.
					</p>
					{/* <p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p> */}
					{/* <p className = "text-sm text-gray-400">
						Under construction......<br/>
						Re-architecting this site with some modern web technologies.
					</p> */}
				</div>
			</div>
		</section>
	);
};

export default About;
