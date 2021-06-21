import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#aboutMe">Mayra Leiva</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#skill">Skills</Nav.Link>
                    <Nav.Link href="#project">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact me</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
