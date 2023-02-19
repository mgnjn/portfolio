import {
  Container,
  styled,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { withTheme } from "@emotion/react";
import { Projects as ProjectsData } from "../data";
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const StyledProjectsContainer = styled(withTheme(Container))((props) => ({
  backgroundColor: props.theme.palette.primary.main,
}));

const Projects = () => {
  const [projects, setProjects] = useState(ProjectsData);

  return (
    <>
      <StyledProjectsContainer>
        <Typography variant="h4">2023 Projects</Typography>
        <List>
          {projects.map((project) => {
            return (
              <>
                <ListItem>{project.name}</ListItem>
                <ListItem>{project.blurb}</ListItem>
              </>
            );
          })}
        </List>
      </StyledProjectsContainer>
    </>
  );
};

export { Projects };
