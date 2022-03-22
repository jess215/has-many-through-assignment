import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import '../App.css'

const Nav = () => {
    return (
        <nav>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'><img 
                        src={require('../images/fox_head_logo_white.png')}
                        width='30px'
                        height='30px'
                        /> {' '}
                    <Link to='/about'>About</Link> 
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Nav