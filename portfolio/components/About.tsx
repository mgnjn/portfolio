import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";

const StyledAboutContainer = styled(Container)``;

function About() {
  return (
    <>
      <StyledAboutContainer
        maxWidth={false}
        sx={{
          backgroundColor: "secondary.dark",
          width: 1,
        }}
      >
        <Typography variant="h1"> name.</Typography>
        <Typography variant="body1">
          LoremLibero sit eveniet ipsum doloribus soluta mollitia ratione.
          Voluptatum suscipit et architecto sint quasi voluptatem placeat. Ipsa
          voluptas sed iste ipsam delectus. Rerum minus et necessitatibus
          debitis maiores. Qui qui labore debitis alias in et autem. Rem unde
          consequatur eos.
        </Typography>
      </StyledAboutContainer>
    </>
  );
}

export default About;
