import { NextPage } from 'next';
import Head from 'next/head';

const Sustainability: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sustaining AI in Emerging Regions with Cost-Aware Infrastructure</title>
        <meta name="description" content="A sustainability-aware AI service planning tool that enables economic deployment of AI models across diverse global regions." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sustaining AI in Emerging Regions with Cost-Aware Infrastructure</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
            Sustainability Optimization for Neural Infrastructure and Computation is a holistic tool for evaluating the
            economic and environmental feasibility of AI model deployment in emerging regions. By integrating real-world energy,
            cost, and carbon data with model workloads, this simulator enables decision-makers to assess whether AI services can be deployed
            sustainably and affordably. The tool factors in regional power prices, purchasing power parity, carbon intensity,
            and renewable capacity to compute optimal deployment plans that minimize both cost and emissions.
          </p>
          <img src="/images/projects/simarch2.png" alt="Architecture Diagram" className="my-4 mx-auto rounded shadow" />
        </section>

          <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Status</h2>
          This is an ongoing project designing tools and investigating techniques to analyse and improve the environmental sustainability of energy-intensive AI services. Additionally, we are also exploring techniques to evaluate and overcome the economic challenges that plague compute-intensive services in emerging regions.
          <p>

          </p>
        </section>

        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-6">
            <li>Models cost and emissions trade-offs for AI workloads</li>
            <li>Integrates economic factors like PPP and deployment incentives</li>
            <li>Supports renewable-aware regional scheduling</li>
            <li>Flexible modeling for inference and training scenarios</li>
            <li>Visualizes deployment viability across countries and energy mixes</li>
          </ul>
          <img src="/images/projects/modeling.png" alt="Modeling and tradeoff engine" className="my-4 w-80 mx-auto rounded shadow" />
        </section> */}

        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
          <ul className="list-disc pl-6">
            <li>Reveals {`>`}3× cost differences for same AI workload across regions</li>
            <li>Enables up to 60% emissions reduction via regional planning</li>
            <li>Demonstrates sustainable AI viability under variable constraints</li>
            <li>Policy-aware and infrastructure-adaptive recommendations</li>
          </ul>
          <img src="/images/projects/results.png" alt="Results" className="my-4 w-80 mx-auto rounded shadow" />
        </section> */}
{/* 
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the full paper: <a href="/papers/sustainability.pdf" className="text-blue-600 underline">Sustaining AI in Emerging Regions with Cost-Aware Infrastructure</a>
          </p>
        </section> */}




        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citation</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@inproceedings{asim2025sustainability,
  title={Sustaining AI in Emerging Regions with Cost-Aware Infrastructure},
  author={Asim, Rohail and Bhardwaj, Ankit and Subramanian, Lakshmi and Zaki, Yasir},
  booktitle={Arxiv Preprint},
  year={2025}
}`}
          </pre>
        </section> */}

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li><a href="https://sites.google.com/view/ankitbhardwaj/home?authuser=0" className="text-blue-600 underline hover:text-blue-800 transition">Ankit Bhardwaj</a> (NYU) </li>
          <li><a href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"  className="text-blue-600 underline hover:text-blue-800 transition">Lakshmi Subramanian</a> (Advisor, NYU)</li>
          <li><a href="https://yasirzaki.net/"  className="text-blue-600 underline hover:text-blue-800 transition"> Yasir Zaki</a>  (Advisor, NYU Abu Dhabi)</li>
        </ul>
      </section>
      </main>
    </>
  );
};

export default Sustainability;
