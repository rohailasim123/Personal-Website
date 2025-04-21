import { NextPage } from 'next';

const sonic: NextPage = () => (
  <>
    {/* <head>
      <title>SONIC: Internet via FM Radio</title>
    </head> */}
    <main>
      <section>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '1em' }}>
          SONIC: Delivering Connectivity via FM Radio Infrastructure
        </h1>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>
          Abstract
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Over 2.6 billion people remain without access to the Internet in 2025.
          This disparity is most pronounced in developing regions, with
          affordability being the primary barrier. Existing solutions like
          satellite internet (Starlink) and high-altitude networks (Aquila, Loon)
          are costly and difficult to scale, making them impractical for
          low-resource areas. We introduce SONIC, a novel connectivity solution
          that leverages FM radio infrastructure—already covering 70% of the
          world’s population—to deliver simplified webpages. SONIC exploits the
          broadcast nature of the radio network, utilizing highly available unused
          frequencies, to reach long distances. SONIC compresses webpages into
          images, encodes them to audio signals, and transmits via FM stations.
          Mobile devices running the SONIC app decode these signals to
          reconstruct webpages. SONIC also enables Large Language Model (LLM)
          interactions, transmitting text-based responses.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>
          BibTeX
        </h2>
        <pre style={{ backgroundColor: '#f0f0f0', padding: '1em', borderRadius: '5px', overflowX: 'auto' }}>
          <code style={{ color: '#000' }}>
            {`@article{sonic2025,
  title={SONIC: Low-Cost Internet Access via FM Radio Infrastructure},
  author={Author Names},
  journal={Journal Name (if applicable)},
  year={2025},
  keywords={Internet access, FM radio, developing regions, low-cost connectivity, digital divide, LLM}
}`}
          </code>
        </pre>
        <p style={{ marginTop: '1em', color: '#777' }}>
          Please replace "Author Names" and "Journal Name (if applicable)" with the
          correct information when available.
        </p>
      </section>
    </main>
  </>
);

export default sonic;