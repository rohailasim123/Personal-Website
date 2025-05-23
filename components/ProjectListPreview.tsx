import ProjectItem from './ProjectItem'
// import data from './data/projectsShort.json'
import data from './data/projects.json'

const ProjectListPreview = (): JSX.Element => {
    return (
        <section className="grid" id="projects">
            <h2 className="text-xl font-bold mt-12 mb-4">Projects</h2>
            <div>
                {data.map((project, index) => (
                    <ProjectItem project={project} index={index}/>
                ))}
            </div>
        </section>
        
    );
};



export default ProjectListPreview;
