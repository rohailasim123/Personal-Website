import { NextPage } from 'next';
import Head from 'next/head';

const ALCCZeus: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rethinking Congestion Control in 5G</title>
        <meta name="description" content="A combined look at ALCC and Zeus frameworks for congestion control in emerging 5G environments." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Rethinking Congestion Control in 5G</h1>

        <img src="/images/projects/ccthumb2.png" alt="ALCC Overview" className="my-4 w-100 bg-white mx-auto rounded shadow" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
            The shift to 5G networks has introduced a wave of network challenges—short-timescale variability, high-throughput demands, and bottleneck buffer sensitivity. Two novel frameworks, <strong>ALCC</strong> and <strong>Zeus</strong>, offer orthogonal but complementary approaches to tackling these issues. ALCC enables user-space deployment of congestion control over legacy TCP tunnels, making real-world deployment feasible even with application-layer constraints. Zeus presents a unified benchmarking framework to rigorously evaluate congestion control algorithms in real and emulated 5G environments. Together, they pave the way for a rethinking of congestion control strategies in mobile systems.
          </p>
          <img src="/images/projects/zeus_arch_5.png" alt="ALCC Overview" className="my-4 w-100 bg-white mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-6">
            <li><strong></strong> Application-Layer Congestion Control over TCP tunnels without OS/kernel changes</li>
            <li><strong></strong> Easily deploy Verus, Sprout, and Copa in user-space with comparable performance</li>
            <li><strong></strong> Unified 5G CCA benchmarking framework supporting real and emulated network traces</li>
            <li><strong></strong> Enhanced Mahimahi for multi-Gbps 5G channel emulation</li>
            <li><strong></strong> Side-by-side comparison of 10 CCAs with fairness and harm analysis</li>
          </ul>
          <img src="/images/projects/zeus_res.png" alt="CCA Comparison in Zeus" className="my-4 rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <ul className="list-disc pl-6">
            <li><strong></strong> Achieves 90–97% of native CC performance (throughput & delay) from user-space</li>
            <li><strong></strong> Enables server-only deployment for Verus and Copa with zero client-side changes</li>
            <li><strong></strong> Cubic and Reno dominate throughput on large-buffer 5G channels; Copa and Vivace excel at low latency</li>
            <li><strong></strong> BBR is the most balanced across throughput and delay tradeoffs in varied 5G topologies</li>
            <li><strong></strong> Includes fairness and harm metrics to evaluate CCA coexistence with legacy TCP</li>
          </ul>
          {/* <img src="/images/projects/zeus_results.png" alt="Zeus CCA Result Summary" className="my-4 w-90 rounded shadow" /> */}
          {/* <p>Summary of performance trade-offs across 10 congestion control algorithms on real and simulated 5G channels.</p> */}
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Papers</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="https://arxiv.org/abs/2208.13985" className="text-blue-600 underline">ZEUS: An Experimental Toolkit for Evaluating Congestion Control Algorithms in 5G Environments</a>
            </li>
            <li>
              <a href="https://openreview.net/forum?id=moVPhXtxQo7" className="text-blue-600 underline">ALCC: Migrating Congestion Control to the Application Layer in Cellular Networks</a>
            </li>
          </ul>
        </section>

        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citations</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@misc{asim2022zeus,
title={ZEUS: An Experimental Toolkit for Evaluating Congestion Control Algorithms in 5G Environments},
author={Rohail Asim and Muhammad Khan and Luis Diez and Shiva Iyer and Ramon Aguero and Lakshmi Subramanian and Yasir Zaki},
year={2022},
eprint={2208.13985},
archivePrefix={arXiv},
url={https://arxiv.org/abs/2208.13985}
}

@misc{
anonymous2021alcc,
title={{ALCC}: Migrating Congestion Control to the Application Layer in Cellular Networks},
author={Yasir Zaki, Rohail Asim, Muhammad Khan, Shiva R. Iyer, Talal Ahmad, Thomas Pötsch, Lakshmi Subramanian},
year={2021},
url={https://openreview.net/forum?id=moVPhXtxQo7}
}`}
          </pre>
        </section> */}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Collaborators</h2>
          <ul className="list-disc pl-6">
            <li>Muhammad Khan (NYUAD)</li>
            <li>Rohail Asim (NYU)</li>
            <li>Luis Diez (University of Cantabria)</li>
            <li>Ramon Aguero (University of Cantabria)</li>
            <li><a href="https://cs.nyu.edu/~lakshmi/Lakshmi/Home.html" className="text-blue-600 underline hover:text-blue-800 transition">Lakshmi Subramanian</a> (NYU)</li>
            <li><a href="https://yasirzaki.net/" className="text-blue-600 underline hover:text-blue-800 transition">Yasir Zaki</a> (NYU Abu Dhabi)</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default ALCCZeus;
