
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

interface Project {
  company: string;
  members: string[];
  budget: string;
  completion: number;
  logo?: string;
}

interface ProjectsTableProps {
  projects: Project[];
  className?: string;
}

export function ProjectsTable({ projects, className }: ProjectsTableProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-white">Projects</CardTitle>
          <Badge className="bg-green-900 text-green-300 hover:bg-green-800">
            <Check size={12} className="mr-1" />
            30 done this month
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="pb-2 pt-4 text-left text-xs font-medium uppercase text-slate-500">COMPANIES</th>
              <th className="pb-2 pt-4 text-left text-xs font-medium uppercase text-slate-500">MEMBERS</th>
              <th className="pb-2 pt-4 text-left text-xs font-medium uppercase text-slate-500">BUDGET</th>
              <th className="pb-2 pt-4 text-left text-xs font-medium uppercase text-slate-500">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-slate-800">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    {project.logo && (
                      <div className="h-8 w-8 rounded-md bg-sidebar-accent">
                        <img 
                          src={project.logo} 
                          alt={`${project.company} logo`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <span className="font-medium text-white">{project.company}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {project.members.map((member, i) => (
                      <div
                        key={i}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white ring-2 ring-sidebar-accent"
                      >
                        {member.charAt(0)}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm text-white">{project.budget}</span>
                </td>
                <td className="py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white">{project.completion}%</span>
                    </div>
                    <Progress value={project.completion} className="h-1" indicatorClassName="bg-blue-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
