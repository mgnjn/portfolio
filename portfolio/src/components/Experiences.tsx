import {
  Container,
  List,
  ListItem,
  ListItemText,
  styled,
  Card,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { withTheme } from "@emotion/react";
import { Experiences as ExperienceData, ExperienceProps } from "@/data";

const StyledExperiencesContainer = styled(withTheme(Container))((props) => ({
  backgroundColor: props.theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
}));

const StyledExperienceCard = styled(Card)({
  display: "inline-block",
  alignSelf: "stretch",
  borderRadius: 5,
});

const Experiences = () => {
  const [experiences, setExperiences] = useState(ExperienceData);

  return (
    <>
      <StyledExperiencesContainer>
        <Typography variant="h4">Experiences</Typography>
        {experiences.map((e, id) => {
          return (
            <StyledExperienceCard key={id}>
              <ListItem>
                <ListItemText> {e.company}</ListItemText>
              </ListItem>
            </StyledExperienceCard>
          );
        })}
      </StyledExperiencesContainer>
    </>
  );
};

export { Experiences };
