import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #024d60;
  height: 100vh;
  overflow: hidden;
  background-color: #e6edef;
`;
const Header = styled.span`
  font-size: 40px;
  margin-bottom: 50px;
  font-weight: 700;
`;
const SubHeader = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Header>404</Header>
      <SubHeader>Page not found</SubHeader>
    </Container>
  );
};

export default NotFound;
