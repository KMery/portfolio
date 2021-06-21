import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" className="d-flex justify-content-around">
                <Nav className="mr-auto">
                    <Nav.Link href="#aboutMe">AboutMe</Nav.Link>
                    <Nav.Link href="#skill">Skills</Nav.Link>
                    <Nav.Link href="#project">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact me</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
