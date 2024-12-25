import Layout from '@/components/layout';
import { SkillBar } from '@/components/skill-bar';
import { projects } from '@/data/projects';
import { ClockIcon, UsersIcon, BarChartIcon as ChartIcon } from 'lucide-react';

export default function ProjectDetail({ params }: { params: { title: string } }) {
  const project = projects.find(p => p.title === decodeURIComponent(params.title));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{project.subtitle}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.matchPercentage}% Match</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Problem Statement</h3>
                <p className="text-gray-600">{project.problemStatement}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Objectives</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.objectives?.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Timeline & Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{project.timeline?.totalWeeks} weeks total</div>
                      <div className="text-sm text-gray-600">{project.timeline?.hoursPerWeek} hours/week</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <UsersIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium">{project.timeline?.teamSize} team members</div>
                      <div className="text-sm text-gray-600">{project.timeline?.level}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Evaluation Criteria</h3>
                <ul className="space-y-3">
                  {project.evaluationCriteria?.map((criteria, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChartIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Phases</h3>
                <div className="space-y-3">
                  {project.phases?.map((phase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-gray-600">{phase.name}</span>
                      <span className="text-sm text-gray-400">({phase.duration})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Required Skills</h3>
                <div className="space-y-4">
                  {project.requiredSkills?.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

