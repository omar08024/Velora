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
 
 const SignUp = () => {
  return (
    <container>
      <div>
      <Title> Welcome To Velora 👋</Title>
      <Span> Please Enter Your Info to create a new account</Span>
      </div>
      <div style={{display:"flex",gap:"20px", flexDirection:"column"}}>
        <TextInput label ="Full Name" placeholder="Enter your Full Name"/>
        <TextInput label ="Email Address" placeholder="Enter your Email Address"/>
        <TextInput label ="Password" placeholder="Enter your Password"/>
         <Button text="Sign Up"/>
      </div>
    </container>
    
  );
};

export default SignUp;
