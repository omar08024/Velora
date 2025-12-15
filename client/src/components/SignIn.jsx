import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

 const container = styled.div`
 width: 100%;
 max-width: 500px;
 display: flex;
 flex-direction: column;
 gap: 36px;
 `
 const Title = styled.div`
font-size: 30px;
font-weight: 800;
color: ${({theme})=> theme.primary};`
 const Span= styled.div`
 font-size: 16px;
 font-weight: 400;
 color: ${({theme})=> theme.text_secondary+90};`
 
 const TextButton = styled.div`
 width:100%
 text-align:end
 color: ${({ theme }) => theme.primary};
 cursor: pointer;
transition: all 0.3s ease;
font-weight: 500;
&:hover {
color: ${({ theme }) => theme.primary };`
 const SignIn = () => {
  return (
    <container>
      <div>
      <Title> Welcome Back 👋</Title>
      <Span> Please Enter Your Info</Span>
      </div>
      <div style={{display:"flex",gap:"20px", flexDirection:"column"}}>
        <TextInput label ="Email Address" placeholder="Enter your Email Address"/>
        <TextInput label ="Password" placeholder="Enter your Password"/>
         <Button text="Sign In"/>
         <TextButton>Forgot Password?</TextButton>
      </div>
    </container>
    
  );
};

export default SignIn;
