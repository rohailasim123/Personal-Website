import { NextPage } from 'next';
import Head from 'next/head';

const WebFM: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tuning into the Web: Low-Cost Internet Access via FM Radio</title>
        <meta name="description" content="WebFM is a novel system that delivers web content and AI responses over FM radio and SMS, enabling affordable connectivity in developing regions." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tuning into the Web: Low-Cost Internet Access via FM Radio</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
Over 2.6 billion people remain without access to the Internet in 2025. This phenomenon is especially pronounced in developing regions, where cost and infrastructure limitations are major barriers to connectivity. In response, we design Sonic, a low-cost, scalable data delivery system that builds on existing infrastructures: FM radio for downlink broadcasting, and SMS for personalized uplink. Sonic is motivated by the widespread availability of FM radio and SMS infrastructure in developing regions, along with embedded FM radio tuners in affordable mobile phones. Sonic offers several innovations to effectively transmit Web content over sound over FM radio, in a reliable and compressed form. For example, we transmit pre-rendered webpages and leverage pixel interpolation to recover errors at the receiver. We further modify Android to offer a simpler deployment pipeline, supporting a wide range of devices. We deployed Sonic at an FM radio station in Cameroon for six weeks with 30 participants. Our results demonstrate a sustained downlink throughput of 10~kbps, less than 20% loss for a majority of transmissions with signal strength above -90~dbM, and a strong user engagement across both Web browsing and ChatGPT interactions.
          </p>
          <img src="/images/projects/sonicimage2.jpg" alt="WebFM Deployment Results" className="my-4 w-100 mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-6">
            <li>Delivers simplified web content via FM radio in image form</li>
            <li>Supports SMS-based interaction with LLMs like ChatGPT</li>
            <li>Works on low-end Android phones with FM receivers</li>
            <li>Operates offline with no need for traditional internet</li>
            <li>Robust under lossy conditions with pixel interpolation and FEC</li>
          </ul>
          <img src="/images/projects/sonicthumb.gif" alt="WebFM Architecture Diagram" className="my-4 w-250 mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
          <ul className="list-disc pl-6">
            <li>Real-world deployment in Cameroon with 30 users over 6 weeks</li>
            <li>Achieved 10 kbps throughput with &gt;70% decoding accuracy</li>
            <li>Broadcast web pages and AI responses with no internet access</li>
            <li>FM-capable phones available under local income thresholds</li>
            <li>Scalable architecture using existing broadcast infrastructure</li>
          </ul>
          <img src="/images/projects/sonicimage1.png" alt="WebFM Mobile App Interface" className="my-4 w-80 mx-auto rounded shadow" />
          <p>Figure: A prototype of this system where a webpage is encoded as audio on the server and sent to the transmitter to broadcast. The client receives the audio transmission and decodes it back into the original image.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the paper: <a href="https://dl.acm.org/doi/10.1145/3680121.3697812" className="text-blue-600 underline">SONIC: Connect the Unconnected via FM Radio & SMS</a>
          </p>
        </section>



        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citations</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@inproceedings{10.1145/3680121.3697812,
author = {Pandey, Ayush and Asim, Rohail and Mengal, Khalid and Varvello, Matteo and Zaki, Yasir},
title = {SONIC: Connect the Unconnected via FM Radio & SMS},
year = {2024},
isbn = {9798400711084},
doi = {10.1145/3680121.3697812},
booktitle = {Proceedings of the 20th International Conference on Emerging Networking EXperiments and Technologies},
series = {CoNEXT '24}
}\n\n`}

{`@misc{pandey2025soniccosteffectivewebaccess,
title={SONIC: Cost-Effective Web Access for Developing Countries}, 
author={Ayush Pandey and Rohail Asim and Jean Louis K. E. Fendji and Talal Rahwan and Matteo Varvello and Yasir Zaki},
year={2025},
eprint={2505.16519},
archivePrefix={arXiv},
primaryClass={cs.NI},
url={https://arxiv.org/abs/2505.16519}, 
}`}
          </pre>
        </section> */}

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li>Ayush Pandey (NYUAD)</li>
          <li>Matteo Varvello (Bell Labs)</li>
          <li>Khalid Mengal (NYUAD)</li>
          <li>Jean Louis K. E. Fendji (University of Ngaoundéré)</li>
          <li><a href="https://yasirzaki.net/"  className="text-blue-600 underline hover:text-blue-800 transition"> Yasir Zaki</a>  (Advisor, NYU Abu Dhabi)</li>
          {/* Add more if needed */}
        </ul>
      </section>
        {/* <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li><a href="https://sites.google.com/view/ankitbhardwaj/home?authuser=0" className="text-blue-600 underline hover:text-blue-800 transition">Ankit Bhardwaj</a> (NYU) </li>
          <li><a href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"  className="text-blue-600 underline hover:text-blue-800 transition">Lakshmi Subramanian</a> (Advisor, NYU)</li>
        </ul>
      </section> */}
      </main>
    </>
  );
};

export default WebFM;
