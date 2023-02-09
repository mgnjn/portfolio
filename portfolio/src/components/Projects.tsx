import { Container, styled } from "@mui/material";
import React from "react";

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
        Hello
      </StyledProjectsContainer>
    </>
  );
};

export { Projects };
