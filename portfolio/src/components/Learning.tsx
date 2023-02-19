import {
  Container,
  styled,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { withTheme } from "@emotion/react";
import { Goals } from "../data";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const StyledLearningContainer = styled(withTheme(Container))((props) => ({
  backgroundColor: props.theme.palette.primary.main,
}));

const Learning = () => {
  const [goals, setGoals] = useState(Goals);

  return (
    <>
      <StyledLearningContainer>
        <Typography variant="h4">2023 Learning Goals</Typography>
        <List>
          {goals.map((goal) => {
            return (
              <>
                <ListItemIcon>{<KeyboardDoubleArrowRightIcon />} </ListItemIcon>
                <ListItem>{goal.goal}</ListItem>
              </>
            );
          })}
        </List>
      </StyledLearningContainer>
    </>
  );
};

export { Learning };
