import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  color: inherit;
`;

const Logo = styled.img`
  height:70px
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileIcons = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  list-style: none;
  width: 80%;
  background: ${({ theme }) => theme.card_light + "99"};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = ({ openAuth, setOpenAuth, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New Arrivals</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>

        <MobileMenu isOpen={isOpen}>
          <Navlink to="/" onClick={() => setIsOpen(false)}>Home</Navlink>
          <Navlink to="/Shop" onClick={() => setIsOpen(false)}>Shop</Navlink>
          <Navlink to="/New_Arrivals" onClick={() => setIsOpen(false)}>New Arrivals</Navlink>
          <Navlink to="/Orders" onClick={() => setIsOpen(false)}>Orders</Navlink>
          <Navlink to="/Contact" onClick={() => setIsOpen(false)}>Contact</Navlink>
          {currentUser ? (
            <Button text="Logout" small onClick={() => console.log("logout")} />
          ) : (
            <div style={{ display: "flex", gap: "12px", flex: 1 }}>
              <Button text="Sign Up" outlined small onClick={() => setOpenAuth(!openAuth)} />
              <Button text="Sign In" small onClick={() => setOpenAuth(!openAuth)} />
            </div>
          )}
        </MobileMenu>

        <MobileIcons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: 30 }} />
          </Navlink>
          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: 28 }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined sx={{ color: "inherit", fontSize: 28 }} />
              </Navlink>
              <Avatar>{currentUser.name[0]}</Avatar>
            </>
          ) : (
            <Button text="SignIn" small onClick={() => setOpenAuth(!openAuth)} />
          )}
        </MobileIcons>

        <ButtonContainer>
          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: 28 }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined sx={{ color: "inherit", fontSize: 28 }} />
              </Navlink>
              <Avatar>{currentUser.name[0]}</Avatar>
              <Button text="Logout" small onClick={() => console.log("logout")} />
            </>
          ) : (
            <Button text="SignIn" small onClick={() => setOpenAuth(!openAuth)} />
          )}
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
