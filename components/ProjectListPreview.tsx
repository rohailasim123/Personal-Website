import ProjectItem from './ProjectItem'
import data from './data/projects.json'

const ProjectList = (): JSX.Element => {
    return (
        <section className="" id="projects">
            <h2 className="text-2xl font-bold mt-12 mb-6">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}
            </div>
        </section>
    );
};

export default ProjectList;
