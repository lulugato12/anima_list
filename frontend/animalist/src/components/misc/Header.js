import React from 'react'
import './Header.css'
import { Container, Carousel, Row } from 'react-bootstrap'
import Banner from "../misc/Banner";

const Header = () => {
    return (
        <Container className='header'>
            <header className="bg-image">
                <Row>
                    <div className="bg-container">
                        <h1 className='header-title'>Welcome to AnimaList!</h1>
                        <h2>Start watching</h2>
                    </div>
                </Row>
                <Row>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Banner />
                    </Carousel.Item>
                </Carousel>
                </Row>
            </header>
        </Container>
    )
}

export default Header;