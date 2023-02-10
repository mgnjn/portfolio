import { Container, styled } from "@mui/material";
import React from "react";

import Project from "./Project";

const StyledProjectsContainer = styled(Container)`
  backgroundcolor: primary.dark;
`;

const Projects = () => {
  return (
    <>
      <StyledProjectsContainer
        sx={{ backgroundColor: "secondary.dark" }}
        maxWidth={false}
      >
        <Project name="proj1" link="github.com" />
        <Project name="proj2" link="github.com" />
        <Project name="proj3" link="github.com" />
      </StyledProjectsContainer>
    </>
  );
};

export { Projects };
