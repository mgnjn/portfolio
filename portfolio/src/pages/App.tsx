import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Head from "next/head";

import { About, Experiences, Learning, Projects } from "@/components";
import { Container, styled } from "@mui/material";
import { withTheme } from "@emotion/react";

const ContentContainer = styled(withTheme(Container))((props) => ({
  width: "80%",
}));

export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer maxWidth={false}>
        <About />
        <Experiences />
        <Projects />
        <Learning />
      </ContentContainer>
    </>
  );
}
