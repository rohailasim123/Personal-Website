import { NextPage } from 'next';
import Head from 'next/head';

const Zeus: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Quest for the Best: Evaluating Congestion Control in 5G</title>
        <meta name="description" content="Zeus is a unified evaluation framework for testing congestion control algorithms in real and simulated 5G environments." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">The Quest for the Best: Evaluating Congestion Control in 5G</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
            With the explosive rise of 5G networks, a wide variety of congestion control algorithms (CCAs) have been proposed to take advantage of the increased bandwidth and mobility. However, a comprehensive, reproducible, and realistic evaluation of these CCAs in real-world 5G conditions has remained elusive. In this paper, we introduce <strong>Zeus</strong>, a unified framework that enables trace-driven evaluation of congestion control across both real 5G deployments and simulated environments. We evaluate 10 prominent CCAs across a diverse set of 5G scenarios, including urban, rural, and mmWave channels, revealing the complex trade-offs between throughput, latency, fairness, and buffer sensitivity.
          </p>
          <img src="/images/projects/zeus_arch_5.png" alt="Zeus Framework Architecture" className="my-4 w-100 bg-white mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-6">
            <li>Unified framework for 5G CCA benchmarking across real and emulated traces</li>
            <li>Supports real-world 5G data collection using modified Android and Linux tools</li>
            <li>Enhanced Mahimahi emulator for multi-Gbps throughput</li>
            <li>Evaluates 10 state-of-the-art congestion control algorithms</li>
            <li>Trace-driven simulation with full control over network parameters</li>
          </ul>
          <img src="/images/projects/zeus_res.png" alt="CCA Comparison in Zeus" className="my-4 rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <ul className="list-disc pl-6">
            <li>Evaluated 10 CCAs including Cubic, Reno, BBR, Copa, Allegro, Vivace, and more</li>
            <li>BBR emerged as the most balanced CCA in 5G environments</li>
            <li>Legacy CCAs (Reno, Cubic) still achieve top throughput in high-buffer scenarios</li>
            <li>Protocols like Copa and Vivace excel in low-delay, low-buffer settings</li>
            <li>Includes fairness and harm analysis for CCA coexistence</li>
          </ul>
          <img src="/images/projects/zeus_ternary.jpg" alt="Ternary Tradeoff Plot" className="my-4 w-90 rounded shadow" />
          <p>A ternary plot showing trade-offs between throughput, delay, and buffer resilience for each evaluated CCA.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the full paper: <a href="https://arxiv.org/abs/2208.13985" className="text-blue-600 underline">The Quest for the Best: Evaluating Congestion Control in 5G</a>
          </p>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citation</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@misc{asim2022zeusexperimentaltoolkitevaluating,
      title={ZEUS: An Experimental Toolkit for Evaluating Congestion Control Algorithms in 5G Environments}, 
      author={Rohail Asim and Muhammad Khan and Luis Diez and Shiva Iyer and Ramon Aguero and Lakshmi Subramanian and Yasir Zaki},
      year={2022},
      eprint={2208.13985},
      archivePrefix={arXiv},
      primaryClass={cs.NI},
      url={https://arxiv.org/abs/2208.13985}, 
}`}
          </pre>
        </section>

        <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
        <ul className="list-disc pl-6">
          <li>Muhammad Khan (NYUAD)</li>
          <li>Luis Diez (University of Cantabria)</li>
          <li>Ramon Aguero (University of Cantabria)</li>
          <li>Shiva Iyer (NYU)</li>
          <li><a href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html"  className="text-blue-600 underline hover:text-blue-800 transition">Lakshmi Subramanian</a> (Advisor, NYU)</li>
          <li><a href="https://yasirzaki.net/"  className="text-blue-600 underline hover:text-blue-800 transition"> Yasir Zaki</a>  (Advisor, NYU Abu Dhabi)</li>
        </ul>
      </section>
      </main>
    </>
  );
};

export default Zeus;
