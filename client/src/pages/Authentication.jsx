import React, { useState } from "react";
import { Modal } from "@mui/material";
import styled from "styled-components";
import LogoImage from "../utils/Images/logo.png";
import AuthImage from "../utils/Images/AuthImage.png";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { Close } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 10;
  width: 120px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background: white; /* add this */
  z-index: 20; /* ensure it sits above the left image */
  border-radius: 8px; /* optional for nicer look */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 2px;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.primary + "20"};
  }
`;

const Text = styled.p`
  display: flex;
  gap: 12px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const TextButton = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = ({ openAuth, setOpenAuth }) => {
  const [Login, setLogin] = useState(false); // lowercase 'login' for consistency

  return (
    <Modal open={openAuth} onClose={() => setOpenAuth(false)}>
      <Container>
        <Left>
          <Logo src={LogoImage} />
          <Image src={AuthImage} />
        </Left>
        <Right>
          <CloseButton onClick={() => setOpenAuth(false)}>
            <Close />
          </CloseButton>

          {Login ? (
            <>
              <SignIn />
              <Text>
                Don't have an account?{" "}
                <TextButton onClick={() => setLogin(false)}>Sign Up</TextButton>
              </Text>
            </>
          ) : (
            <>
              <SignUp />
              <Text>
                Already have an account?{" "}
                <TextButton onClick={() => setLogin(true)}>Sign In</TextButton>
              </Text>
            </>
          )}
        </Right>
      </Container>
    </Modal>
  );
};

export default Authentication;
