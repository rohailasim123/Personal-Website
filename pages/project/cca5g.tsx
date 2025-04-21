import {NextPage} from 'next';

const cca: NextPage<unknown> = () => (
    <>
    <main>
      
      <section>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '1em' }}>
        Evaluating Congestion Control Protocols in 5G Environments
        </h1>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>
          Abstract
        </h2>
        <p style={{ lineHeight: '1.6' }}>
        The rapid evolution of the next generation of mobile networks has paved the path for the development of a wide array of exciting new applications. Instead of gradual and incremental enhancements, each new generation of mobile networks is improving the capabilities of cellular networks tenfold, with 5G typically being 10 times faster than 4G, and 6G anticipated to be an improvement over 5G with an even higher factor. With these rapid exponential improvements, it is important to ensure that all layers of the network stack are able to keep up and support the performance improvements that are available with these new technologies. However, we still lack a clear understanding of the performance characteristics of current state-of-the-art Congestion Control Algorithms (CCA) in 5G environments with high channel fluctuations over short time scales. In this paper, we use the Zeus evaluation framework to conduct an in-depth analysis of 10 CCAs across various 5G environments, including recently proposed and conventional ones, revealing several interesting results.
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

export default cca;