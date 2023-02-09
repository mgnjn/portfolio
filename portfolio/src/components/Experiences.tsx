import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import Experience from "./Experience";

const StyledExperiencesContainer = styled(Container)`
  backgroundolor: #c5e3c6;
`;

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

const Experiences = () => {
  return (
    <>
      <StyledExperiencesContainer
        maxWidth={false}
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <List>
          {experiences.map((e) => {
            return (
              <ListItem>
                <ListItemText> {e.company}</ListItemText>
                <Experience
                  company={e.company}
                  role={e.role}
                  skills={e.skills}
                />
              </ListItem>
            );
          })}
        </List>
      </StyledExperiencesContainer>
    </>
  );
};

export { Experiences };
