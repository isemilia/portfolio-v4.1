'use client';

import { TComponent } from '@/shared/types/components';
import Filters from '@/ui/components/filters';
import { z } from 'zod';
import { projectsListSchema } from '@/shared/api/types/projects';
import Project from '@/ui/components/project';
import { useState } from 'react';

const filters = [
  { name: 'spa', label: 'SPA' },
  { name: 'plain', label: 'Plain JS' },
  { name: 'static', label: 'Static' },
  { name: 'other', label: 'Other' },
];

const ProjectList: TComponent<
  false,
  { projects: z.infer<typeof projectsListSchema> }
> = ({ projects }) => {
  const [filter, setFilter] = useState('spa');

  return (
    <div className={'space-y-[30px]'}>
      <Filters
        options={filters}
        value={filter}
        onChange={(option) => {
          setFilter(option.name);
        }}
        defaultValue={'spa'}
      />
      {projects
        .filter((project) => project.categories.includes(filter))
        .map((project) => {
          return (
            <Project
              key={project.id}
              href={project.href}
              title={project.title}
              description={project.description}
              img={project.img}
              links={project.links}
              chips={project.tags.map((tag) => ({
                color: tag.type,
                label: tag.label,
              }))}
            />
          );
        })}
    </div>
  );
};

export default ProjectList;
