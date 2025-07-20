import { NextPage } from 'next';
import Head from 'next/head';

const HomeworkAI: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rethinking Homework in the Age of AI</title>
        <meta name="description" content="Zeus is a unified evaluation framework for testing congestion control algorithms in real and simulated 5G environments." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Rethinking Homework in the Age of AI</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
          The emergence of large language models has led to the development of powerful tools such as ChatGPT that can produce text indistinguishable from human-generated work. With the increasing accessibility of such technology, students across the globe may utilize it to help with their school work—a possibility that has sparked ample discussion on the integrity of student evaluation processes in the age of artificial intelligence (AI). To date, it is unclear how such tools perform compared to students on university-level courses across various disciplines. Further, students’ perspectives regarding the use of such tools in school work, and educators’ perspectives on treating their use as plagiarism, remain unknown. Here, we compare the performance of the state-of-the-art tool, ChatGPT, against that of students on 32 university-level courses. We also assess the degree to which its use can be detected by two classifiers designed specifically for this purpose. Additionally, we conduct a global survey across five countries, as well as a more in-depth survey at the authors’ institution, to discern students’ and educators’ perceptions of ChatGPT’s use in school work. We find that ChatGPT’s performance is comparable, if not superior, to that of students in a multitude of courses. Moreover, current AI-text classifiers cannot reliably detect ChatGPT’s use in school work, due to both their propensity to classify human-written answers as AI-generated, as well as the relative ease with which AI-generated text can be edited to evade detection. Finally, there seems to be an emerging consensus among students to use the tool, and among educators to treat its use as plagiarism. Our findings offer insights that could guide policy discussions addressing the integration of artificial intelligence into educational frameworks.
          </p>
          <img src="/images/projects/AIHomework.png" alt="Homework AI" className="my-4 w-100 bg-white mx-auto rounded shadow" />
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-6">
            <li>Benchmarked ChatGPT against students in 32 university courses</li>
            <li>Evaluated AI-detection tools like GPTZero across paraphrased and original outputs</li>
            <li>Surveyed 1,600+ students and faculty across five countries</li>
            <li>Measured norm conflict between institutional expectations and student intentions</li>
            <li>Highlighted gaps in academic policy regarding AI-assisted work</li>
          </ul>
          <img src="/images/projects/AIFinal.png" alt="Homework AI" className="my-4 w-100 bg-white mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <ul className="list-disc pl-6">
            <li>ChatGPT matched or outperformed students in 12 of 32 courses (38%)</li>
            <li>AI-text detectors misclassified both AI and human text frequently</li>
            <li>Paraphrased ChatGPT outputs bypassed detectors in 95% of cases</li>
            <li>74% of students expressed intent to use ChatGPT next semester</li>
            <li>Faculty underestimated student AI use and strongly favored treating it as plagiarism</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the full paper: <a href="https://www.nature.com/articles/s41598-023-38964-3" className="text-blue-600 underline">Perception, performance, and detectability of conversational AI across 32 university courses</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citation</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@article{ibrahim2023perception,
  author    = {Ibrahim, H. and Liu, F. and Asim, R. et al.},
  title     = {Perception, performance, and detectability of conversational artificial intelligence across 32 university courses},
  journal   = {Scientific Reports},
  year      = {2023},
  publisher = {Nature Publishing Group},
  doi       = {10.1038/s41598-023-38964-3},
}\n

@article{10111520,
  author={Ibrahim, Hazem and Asim, Rohail and Zaffar, Fareed and Rahwan, Talal and Zaki, Yasir},
  journal={IEEE Intelligent Systems}, 
  title={Rethinking Homework in the Age of Artificial Intelligence}, 
  year={2023},
  volume={38},
  number={2},
  pages={24-27},
  doi={10.1109/MIS.2023.3255599}}`}
          </pre>
        </section>        
        
    <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li>Hazem Ibrahim (NYUAD)</li>
          <li>Fareed Zaffar (LUMS)</li>
          <li>Talal Rahwan (NYUAD)</li>
          <li>Fengyuan Liu (NYUAD)</li>
          <li><a href="https://yasirzaki.net/"  className="text-blue-600 underline hover:text-blue-800 transition"> Yasir Zaki</a>  (Advisor, NYU Abu Dhabi)</li>
        </ul>
      </section>
      </main>
    </>
  );
};

export default HomeworkAI;
