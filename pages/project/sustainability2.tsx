import {NextPage} from 'next';

const sust: NextPage<unknown> = () => (
    <>
        <main>
      <section>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '1em' }}>
        Sustainable Computing
        </h1>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>
          Abstract
        </h2>
        <p style={{ lineHeight: '1.6' }}>
        Breakthroughs in Artificial Intelligence have fueled a rising demand for a broad spectrum of services harnessing these advanced technologies. These high-demand services rely on data centers, which consume significant amounts of electricity. The resulting carbon emissions from these data centers threaten to exacerbate the climate crisis. Unfortunately, in their current state, it is challenging to rely solely on renewable energy sources such as wind energy and solar energy to support these energy demands in an economically feasible manner. New policies are being implemented to reduce carbon emissions, prompting the need for sustainable design in new systems, such as data centers for AI computation. To satisfy these policy requirements and mitigate carbon emissions, any new system must prioritize sustainability. This project aims to develop a system to assess the economic feasibility of sustainable computing within AI services. The simulator will model interactions between key stakeholders and evaluate the environmental and economic impact of sustainability policies. This tool can serve as a testing ground for future policies, helping stakeholders make informed decisions about the trade-offs between sustainability and economic feasibility.
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

export default sust;