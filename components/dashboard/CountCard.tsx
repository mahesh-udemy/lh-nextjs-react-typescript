import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
  background-color: #ffffff;
  margin-bottom: 30px;
  background-color: #394a52 !important;
`;

const CardContent = styled.div`
  padding: 30px 15px;
  min-height: calc(100% - 123px);
`;

const CountCard = () => {
  return (
    <Card>
      <CardContent>123</CardContent>
    </Card>
  );
};

export default CountCard;
