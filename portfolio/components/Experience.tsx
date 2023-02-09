import { Card, ListItem, List } from "@mui/material";
import React from "react";
import { ExperienceProps } from "./Experiences";

function Experience({ company, role, skills }: ExperienceProps) {
  return (
    <>
      <Card>
        <List>
          <ListItem> {company}</ListItem>
          <ListItem> {role}</ListItem>
          <ListItem>
            <List>
              {skills.map((skill) => {
                return <ListItem>{skill}</ListItem>;
              })}
            </List>
          </ListItem>
        </List>
      </Card>
    </>
  );
}

export default Experience;
