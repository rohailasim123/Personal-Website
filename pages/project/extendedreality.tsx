import {NextPage} from 'next';

const xr: NextPage<unknown> = () => (
    <>
        <main>
      <section>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '1em' }}>
        Impact of Congestion Control on Mixed Reality Applications
        </h1>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>
          Abstract
        </h2>
        <p style={{ lineHeight: '1.6' }}>
        The Multi-user Immersive Reality (MIR) landscape is evolving rapidly, with applications spanning virtual collaboration, entertainment, and training. However, wireless network limitations—particularly in Wi-Fi and 5G environments—create a critical bottleneck, struggling to meet the high-bandwidth and ultra-low latency demands essential for next-generation MIR experiences. These challenges are exacerbated by bandwidth variability and congestion in both indoor and outdoor network settings, impacting the smoothness, visual fidelity, and responsiveness of MIR applications.
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

export default xr;