import React from "react";
import styled from "styled-components";
import HeaderImage from "../utils/Images/New.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;


const NewArrival = () => {
  return (
    <Container>
      <Image src={HeaderImage} alt="New Arrivals" />
      <h1>New Arrivals Page</h1>
    </Container>
  );
};

export default NewArrival;
