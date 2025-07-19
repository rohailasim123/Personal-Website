// pages/hera.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Hera: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enabling Next-Generation Immersive Applications in 5G</title>
        <meta name="description" content="Modular framework for QoE-optimized AR/VR streaming and congestion control in 5G environments." />
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enabling Next-Generation Immersive Applications in 5G</h1>

        <img src="/images/projects/arch2.png" alt="Overview illustration" className="my-4 w-100 mx-auto rounded shadow" />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
              The Multi-user Immersive Reality (MIR) landscape is evolving rapidly, with applications spanning virtual collaboration, entertainment, and training. However, wireless network limitations create a critical bottleneck, struggling to meet the high-bandwidth and ultra-low latency demands essential for next-generation MIR experiences. This paper presents Hera, a modular framework for next-generation immersive applications, comprising a high-level streaming and synchronization layer for AR/VR systems and a low-level delay-based QoE-aware rate control protocol optimized for dynamic wireless environments. The Hera framework integrates application-aware streaming logic with a QoE-centric rate control core, enabling adaptive video quality, multi-user fairness, and low-latency communication across challenging 5G network conditions. We demonstrate that Hera outperforms existing state-of-the-art rate control algorithms by maintaining up to 66% lower latencies with comparable throughput performance, higher visual quality with 50% average bitrate improvements in our analysis, and improved fairness. By bridging the gap between application-level responsiveness and network-level adaptability, Hera lays the foundation for more scalable, robust, and high-fidelity multi-user immersive experiences.

          </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="text-center">
              <img src="/images/projects/giflow.gif" alt="Go from this" className="rounded shadow mx-auto" />
              <p className="mt-2 text-sm text-gray-600">Low quality and high latency</p>
            </div>
            <div className="text-center">
              <img src="/images/projects/gifhigh.gif" alt="To this" className="rounded shadow mx-auto" />
              <p className="mt-2 text-sm text-gray-600">Optimized</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">Not Actual Gameplay Footage</p>
        </section>

        {/* <section className="mb-10 text-center">
          <Link href="/project/xr" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
              Enter VR
          </Link>
        </section> */}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc pl-6">
            <li>Real-time AR/VR synchronization via WebXR</li>
            <li>Delay-based congestion control protocol with histogram-based RTT tracking</li>
            <li>Adaptive video quality and dynamic synchronization rates</li>
            <li>Integrated benchmarking tools with real and synthetic VR clients</li>
            <li>Supports experiments with DASH streaming and multiple congestion control protocols</li>
          </ul>
          <img src="/images/projects/mermaid_design.png" alt="Overview illustration" className="my-4 w-80 mx-auto rounded shadow" />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Performance Highlights</h2>
          <ul className="list-disc pl-6">
            <li>Up to 66% lower latency than legacy protocols like Cubic</li>
            <li>50% average bitrate improvement in high-mobility 5G settings</li>
            <li>Consistent 4K streaming across clients in mixed-reality scenarios</li>
            <li>High fairness index (0.965), ensuring equitable bandwidth allocation</li>
          </ul>
          <img src="/images/projects/hera_res.png" alt="Overview illustration" className="my-4 rounded shadow" />
        </section>

        {/* <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Paper</h2>
          <p>
            Read the full paper: <a href="/papers/hera-5g-mir.pdf" className="text-blue-600 underline">Towards Next Generation Immersive Applications in 5G Environments</a>
          </p> */}
          {/* <p>
            GitHub repo: <a href="https://github.com/rohailasim123/Hera" className="text-blue-600 underline">https://github.com/rohailasim123/Hera</a>
          </p> */}
        {/* </section> */}


        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Citation</h2>
          <pre className="bg-black-100 p-4 rounded text-sm overflow-x-auto">
{`@inproceedings{10.1145/3672196.3673395,
author = {Asim, Rohail and Subramanian, Lakshmi and Zaki, Yasir},
title = {Impact of Congestion Control on Mixed Reality Applications},
year = {2024},
publisher = {Association for Computing Machinery},
doi = {10.1145/3672196.3673395},
location = {Sydney, NSW, Australia},
series = {EMS '24}
}\n
@inproceedings{10.1145/3672202.3673754,
author = {Asim, Rohail and Bhardwaj, Ankit and Subramanian, Lakshmi and Zaki, Yasir},
title = {Demo: Enabling High Bandwidth Applications over 5G Environments},
year = {2024},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
doi = {10.1145/3672202.3673754},
booktitle = {Proceedings of the ACM SIGCOMM 2024 Conference: Posters and Demos},
location = {Sydney, NSW, Australia},
}`}
          </pre>
        </section>

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

export default Hera;
