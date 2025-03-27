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
					<p className = "text-sm text-gray-400" style={{marginLeft: '18%'}}>
					<br /><ExtLink href="mailto:rohail.asim@nyu.edu"> ✉️ rohail.asim@nyu.edu </ExtLink>
					</p> 
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					{/* <p>
						I am a {personalInfo.about.year} PhD student
						in <ExtLink href= {personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
						advised by <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}. </ExtLink>
						</p> */}
					{/* <p className = "text-sm text-gray-600">
						PhD Advisors: <ExtLink href="https://yasirzaki.net/"> Yasir Zaki </ExtLink>, <ExtLink href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"> Lakshminarayanan Subramanian  </ExtLink>
					</p> */}
					<p>
					I am a PhD Candidate in <ExtLink href="https://cs.nyu.edu/home/index.html"> Computer Science </ExtLink> at the <ExtLink href="https://cims.nyu.edu/dynamic/"> Courant Institute of Mathematical Sciences, New York University </ExtLink> advised by Professor <ExtLink href="https://yasirzaki.net/"> Yasir Zaki </ExtLink> and Professor <ExtLink href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"> Lakshminarayanan Subramanian  </ExtLink>. My research interests include Computer Networks, Artificial Intelligence, and Sustainable Computing. I completed my BS in <ExtLink href="https://sbasse.lums.edu.pk/department-of-computer-science"> Computer Science </ExtLink> in 2019 from <ExtLink href="https://lums.edu.pk/"> Lahore University of Management Sciences (LUMS) </ExtLink> where I also worked as a Research Assistant at the <ExtLink href="https://tpi.lums.edu.pk/">Technology for People Initiative (TPI)</ExtLink> before joining NYU. I am currently working on multiple projects within the domain of Computer Networks especially involving the analysis and advancement of Congestion Control protocols for next generation wireless networks.
					</p>
						{/* Under construction......<br/>
						Re-architecting this site with some modern web technologies. */}
				</div>
			</div>
		</section>
	);
};

export default About;
