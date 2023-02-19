import React from "react";
import {
  Container,
  styled,
  Typography,
  Button,
  Chip,
  Link,
} from "@mui/material";
import { withTheme } from "@emotion/react";

const StyledAboutContainer = styled(withTheme(Container))((props) => ({
  backgroundColor: props.theme.palette.primary.main,
}));

const About = () => {
  return (
    <>
      <StyledAboutContainer maxWidth={false}>
        <Typography variant="h1"> name.</Typography>
        <Typography variant="body1">
          LoremLibero sit eveniet ipsum doloribus soluta mollitia ratione.
          Voluptatum suscipit et architecto sint quasi voluptatem placeat. Ipsa
          voluptas sed iste ipsam delectus. Rerum minus et necessitatibus
          debitis maiores. Qui qui labore debitis alias in et autem. Rem unde
          consequatur eos.
        </Typography>
        {/* Links */}
        <Link href="http://www.github.com/mgnjn">
          <Chip label="Github" />
        </Link>
        <Link href="http://www.github.com/mgnjn">
          <Chip label="Github" />
        </Link>
        <Link href="http://www.github.com/mgnjn">
          <Chip label="Github" />
        </Link>
      </StyledAboutContainer>
    </>
  );
};
export { About };
