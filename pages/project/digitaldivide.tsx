import { NextPage } from 'next';
import Head from 'next/head';

const DigitalDivide: NextPage = () => {
  return (
    <>
      <Head>
        <title>Towards a World Wide Web without digital inequality</title>
        <meta name="description" content="Frameworks to bridge the digital divide" />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Towards a World Wide Web without digital inequality</h1>

        <section className="mb-10">
          <img src="/images/projects/digitaldividethumb.png" alt="Zeus Framework Architecture" className="my-4 w-100 bg-white mx-auto rounded shadow" /> 
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
          The World Wide Web (WWW) empowers people in developing regions by eradicating illiteracy, supporting women, and generating economic opportunities. However, their reliance on limited bandwidth and low-end phones leaves them with a poorer browsing experience compared to privileged users across the digital divide. To evaluate the extent of this phenomenon, we sent participants to 56 cities to measure the cost of mobile data and the average page load time. We found the cost to be orders of magnitude greater, and the average page load time to be four times slower, in some locations compared to others. Analyzing how popular webpages have changed over the past years suggests that they are increasingly designed with high processing power in mind, effectively leaving the less fortunate users behind. Addressing this digital inequality through new infrastructure takes years to complete and billions of dollars to finance. A more practical solution is to make the webpages more accessible by reducing their size and optimizing their load time. To this end, we developed a solution called Lite-Web and evaluated it in the Gilgit-Baltistan province of Pakistan, demonstrating that it transforms the browsing experience of a Pakistani villager using a low-end phone to almost that of a Dubai resident using a flagship phone. A user study in two high schools in Pakistan confirms that the performance gains come at no expense to the pages’ look and functionality. These findings suggest that deploying Lite-Web at scale would constitute a major step toward a WWW without digital inequality.
          </p>
        </section>

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
        <ul className="list-disc pl-6">
            <li>New frameworks such as LiteWeb and MAML that dynamically streamlines webpages for low-end devices</li>
            <li>Reduces page size by eliminating non-essential scripts, media, and styling</li>
            <li>Preserves visual layout and interactive functionality across simplified pages</li>
            <li>Supports deployment across regions with limited bandwidth and aging hardware</li>
            <li>Real-world implementation tested in Gilgit-Baltistan with end-users and schools</li>
        </ul>
          <img src="/images/projects/digitaldivide.jpg" alt="Zeus Framework Architecture" className="my-4 w-100 bg-white mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <ul className="list-disc pl-6">
            <li>Measured 4× faster page loads and significantly lower data usage in constrained settings</li>
            <li>Browsing experience on a low-end phone in Pakistan nearly matched that of a flagship phone in Dubai</li>
            <li>User studies in two Pakistani high schools showed no perceived loss in page quality or usability</li>
            <li>Demonstrated potential for cost-effective, scalable reduction in global digital inequality</li>
            <li>Highlights webpage optimization as a viable alternative to expensive infrastructure upgrades</li>
        </ul>
          <img src="/images/projects/digitaldivide2.jpg" alt="Zeus Framework Architecture" className="my-4 w-100 bg-white mx-auto rounded shadow" /> 

        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the full paper: <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2212649120" className="text-blue-600 underline">Towards a World Wide Web without digital inequality</a>
          </p>
        </section>


        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citation</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@article{10.1073/pnas.2212649120,
author = {Moumena Chaqfeh  and Rohail Asim  and Bedoor AlShebli  and Muhammad Fareed Zaffar  and Talal Rahwan  and Yasir Zaki },
title = {Towards a World Wide Web without digital inequality},
journal = {Proceedings of the National Academy of Sciences},
volume = {120},
number = {3},
pages = {e2212649120},
year = {2023},
doi = {10.1073/pnas.2212649120}
}\n\n

@inproceedings{10.1145/3672202.3673751,
author = {Pandey, Ayush and Asim, Rohail and Varvello, Matteo and Subramanian, Lakshmi and Zaki, Yasir},
title = {Demo: Towards Faster Web in Developing Regions},
year = {2024},
isbn = {9798400707179},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
doi = {10.1145/3672202.3673751},
booktitle = {Proceedings of the ACM SIGCOMM 2024 Conference: Posters and Demos},
location = {Sydney, NSW, Australia},
series = {ACM SIGCOMM Posters and Demos '24}
}`}
          </pre>
        </section> */}

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li>Moumena Chaqfeh (NYUAD)</li>
          <li>Matteo Varvello (Bell Labs)</li>
          <li>Fareed Zaffar (LUMS)</li>
          <li>Talal Rahwan (NYUAD)</li>
          <li>Ayush Pandey (NYUAD)</li>
          <li>Bedoor AlShebli (NYUAD)</li>
          <li><a href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"  className="text-blue-600 underline hover:text-blue-800 transition">Lakshmi Subramanian</a> (Advisor, NYU)</li>
          <li><a href="https://yasirzaki.net/"  className="text-blue-600 underline hover:text-blue-800 transition"> Yasir Zaki</a>  (Advisor, NYU Abu Dhabi)</li>
        </ul>
      </section>
      </main>
    </>
  );
};

export default DigitalDivide;
