import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  COMMENTS_ROUTE,
  STICKERS_ROUTE,
  HOME_ROUTE,
  MEDITATESTEPS_ROUTE,
  FORM_ROUTE,
} from "../../app/routing/config";
import { Button, Menu } from "antd";
import styled from "styled-components";
import MyButton from "../MyButton";

export const MenuStyle = styled(Menu)`
  &.ant-menu {
    font-family: "Rubik", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: transparent;
    }
  }
`;

export const MenuItem = styled(Menu.Item)`
  &.ant-menu-item {
    font-weight: 600;
    width: max-content;
    color: var(--black);
    height: max-content;
    background-color: var(--white);

    &:hover {
      background-color: var(--white);
      color: var(--grey-light);
    }
  }
`;

export const MenuLink = styled(Link)`
  &.ant-menu-link {
    padding: 0;
    margin: 0;
    display: block;
    line-height: 0;
    &:focus {
      background-color: var(--white);
    }
    &:hover {
      color: var(--grey-light);
    }
  }
`;

interface NavbarProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setIsAuth, isAuth }) => {
  const handleAuthToggle = () => {
    setIsAuth((prevIsAuth: boolean) => !prevIsAuth);
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  interface StyledProps {
    height?: string;
  }

  const NavbarWrapper = styled.div<StyledProps>`
    display: flex;
    gap: 20px;

    /* background-color: #219ebc;
    height: ${({ height }) => height ?? "300px"}; */
  `;

  return (
    <MenuStyle>
      <NavbarWrapper>
        <MenuItem key="1">
          <MenuLink to={HOME_ROUTE}>Home</MenuLink>
        </MenuItem>
        <MenuItem key="2">
          <MenuLink to={COMMENTS_ROUTE}>Comments</MenuLink>
        </MenuItem>
        <MenuItem key="3">
          <MenuLink to={MEDITATESTEPS_ROUTE}>Let's meditate</MenuLink>
        </MenuItem>
        <MenuItem key="4">
          <MenuLink to={STICKERS_ROUTE}>Stickers</MenuLink>
        </MenuItem>
        <MenuItem key="5">
          <MenuLink to={FORM_ROUTE}>Form</MenuLink>
        </MenuItem>
      </NavbarWrapper>
      <NavbarWrapper>

        <MyButton onClick={handleAuthToggle}>
          {isAuth ? "Logout" : "Login"}
        </MyButton>
        <MyButton onClick={changeTheme}>{"Change theme"}</MyButton>
      </NavbarWrapper>
    </MenuStyle>
  );
};

export default Navbar;
