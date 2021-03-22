import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const MainDiv = styled.div`
  border: 0;
  border-radius: 0;
  background-color: #759ca3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  padding: 1px;
`;

const Header1 = styled.h2`
  text-align: center;
  color: #f2b334;
`;

const Header2 = styled.h4`
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <MainDiv>
      <Grid item xs={12}>
        <Header1>LEVEL HOMES</Header1>
        <Header2>Warranty Dashboard Overview</Header2>
      </Grid>
    </MainDiv>
  );
};

export default Header;
