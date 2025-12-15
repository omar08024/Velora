import React from "react"; // Home.jsx
import styled from "styled-components";
import HeaderImage from "../utils/Images/Header.png";
const Container = styled.div`
 padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};`
const Section = styled.div`
 max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;`;
const Img=styled.img`
  width: 90%;
  height: 700px;
  object-fit: cover;
  max-width: 1200px;`;
const Title=styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;`

const Home = () => {
  return (
    <Container>
     <Section
      style={{ alignItems: "center"}}>
      <Img src={HeaderImage}/>
     </Section>
      <Section
      style={{ alignItems: "center"}}>
      <Title> Shop By Category</Title>
     </Section>
    </Container>
  );
};

export default Home;
