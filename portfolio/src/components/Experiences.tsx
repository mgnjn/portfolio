import {
  Container,
  List,
  ListItem,
  ListItemText,
  styled,
  Card,
} from "@mui/material";
import React from "react";

const StyledExperiencesContainer = styled(Container)({
  backgroundColor: "#c5e3c6",
});

const StyledExperienceContainer = styled(Card)({
  display: "flex",
});

export type ExperienceProps = {
  company: string;
  role: string;
  skills: string[];
};

const experiences: ExperienceProps[] = [
  {
    company: "comp1",
    role: "role1",
    skills: ["pythojn"],
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

const Experience = ({ company, role, skills }: ExperienceProps) => {
  return (
    <>
      <Card>
        <List>
          <ListItem> {company}</ListItem>
          <ListItem> {role}</ListItem>
          <ListItem>
            <List>
              {skills.map((skill, id) => {
                return <ListItem key={id}>{skill}</ListItem>;
              })}
            </List>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

const Experiences = () => {
  return (
    <>
      <StyledExperiencesContainer>
        <List>
          {experiences.map((e, id) => {
            return (
              <StyledExperienceContainer key={id}>
                <ListItem>
                  <ListItemText> {e.company}</ListItemText>
                  <Experience
                    company={e.company}
                    role={e.role}
                    skills={e.skills}
                  />
                </ListItem>
              </StyledExperienceContainer>
            );
          })}
        </List>
      </StyledExperiencesContainer>
    </>
  );
};

export { Experiences };
