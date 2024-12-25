import type { SkillBarProps } from "../types/project";

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">{name}</div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full" 
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

