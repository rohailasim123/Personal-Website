import { motion } from 'framer-motion';

interface ProjectProps {
  project: any;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <motion.a
      href={project.href}
      target={index == 5 ? "_blank" : ""}
      rel="noopener noreferrer"
      className="block"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 bg-white flex flex-col h-full">
        {/* Image */}
        <div className="w-full aspect-square">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text & button */}
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {project.short || project.title}
            </p>
          </div>
          <div>
            <span className="inline-block px-4 py-2 mt-auto text-sm font-medium text-indigo-600 bg-indigo-50 rounded hover:bg-indigo-100 transition">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectItem;
