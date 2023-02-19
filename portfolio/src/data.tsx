export const Goals = [{ goal: "Proj1" }, { goal: "Proje2" }];

export const Projects = [
  {
    name: "Learning to wipe",
    tech: ["Python", "Java"],
    github: "github.com/mgnjn",
    blurb: "lorem ipson",
  },
  {
    name: "Learning to wipe",
    tech: ["Python", "Java"],
    github: "github.com/mgnjn",
    blurb: "lorem ipson",
  },
];

export type ExperienceProps = {
  company: string;
  role: string;
  skills: string[];
};

export const Experiences: ExperienceProps[] = [
  {
    company: "comp1",
    role: "role1",
    skills: ["python"],
  },
  {
    company: "comp2",
    role: "role2",
    skills: ["Java"],
  },
  {
    company: "comp3",
    role: "role3",
    skills: ["C++"],
  },
];
