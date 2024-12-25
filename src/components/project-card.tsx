import Link from 'next/link';
import { BuildingIcon, UserIcon } from 'lucide-react';
import type { ProjectCardProps } from "../types/project";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600">{project.category}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <BuildingIcon className="h-4 w-4" />
            <span>Listed by: {project.company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <UserIcon className="h-4 w-4" />
            <span>Mentor: {project.mentor}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6">
        <Link href={`/projects/${encodeURIComponent(project.title)}`} className="block w-full">
          <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

