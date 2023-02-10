import React from "react";
import { styled, Card } from "@mui/material";

export type ProjectProps = {
  name: string;
  link: string;
};

const StyledProject = styled(Card)({
  display: "flex",
  backgroundColor: "seagreen",
});

const Project = ({ name, link }: ProjectProps) => {
  return (
    <>
      <StyledProject>{name}</StyledProject>
    </>
  );
};

export default Project;
