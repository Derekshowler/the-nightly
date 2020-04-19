import React from 'react';
import {
    Nav,
    NavTitle,
    NavItems,
    NavItem,
    NavItemButton
} from '../styles/navbar';

export default function NavbarStyledComponents() {
    return (
        <Nav>
            <NavTitle to="/">The Nightly</NavTitle>
            <NavItems>
                <NavItem to="/pricing">Explore The Community</NavItem>
                <NavItem>Docs</NavItem>
                <NavItemButton to = "/login">Login</NavItemButton>
                <NavItemButton primary>Sign Up!</NavItemButton>
            </NavItems>
        </Nav>
    );
}