import Layout from '../../components/layout';
import { ProjectCard } from '../../components/project-card';
import type { Project } from '../../types/project';

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Full-stack Development",
    company: "Microsoft Corporation",
    mentor: "John Smith",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Mobile Health App",
    category: "Mobile Development",
    company: "Apple Inc.",
    mentor: "Sarah Johnson",
    technologies: ["Swift", "Firebase", "UI/UX"]
  },
  {
    title: "AI Chat Assistant",
    category: "Machine Learning",
    company: "Google LLC",
    mentor: "David Chen",
    technologies: ["Python", "TensorFlow", "NLP"]
  }
];

export default function Page() {
  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome, Choose Your Project</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <code className="text-sm">&lt;/&gt;</code>
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">|</span>
              <span>Stanford University</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

