import React, { useState } from 'react'
import './InputPrompt.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function InputPrompt({ data }) {

    const [inputValue, setInputValue] = useState('');
    const [inputValuesArray, setinputValuesArray] = useState([]);
    const url = "/message";
    const [postdata, setPostData] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = async (e) => {
        e.preventDefault();
        try {
            console.log("input: ", inputValue);
            let body = {
                query: inputValue
            };
            const response = await axios.post(`http://localhost:3001${url}`, body);
            console.log(response);

            setinputValuesArray([...inputValuesArray, inputValue, response]);
            setInputValue('');
        }
        catch (error) {
            console.log("Error: ", error);
            console.log("Nahi chaala: ", error);
        }

    }



    return (
        <>
            <Container fluid style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <Row>
                    <Col>
                        <Navbar variant="dark">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="ChatGPT 3.5"
                                className='fw-bold w-100'
                            >
                                <NavDropdown.Item href="# " className="my-2 me-2 pe-3">
                                    <Row className=' align-items-center px-2 row-hover'>
                                        <Col md={1} className='pe-0 text-light'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                        <Col md={10} className='ps-3 text-light'>
                                            <span className='fw-bold'>GPT-3.5</span>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Great for everyday tasks</p>
                                        </Col>
                                        <Col md={1} className='pe-0 text-light mt-2'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                    </Row>
                                </NavDropdown.Item>

                                <NavDropdown.Item href="# " className="me-2 pe-3">
                                    <Row className=' align-items-center px-2 text-light'>
                                        <Col md={1} className='pe-0'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                        <Col md={10} className='ps-3'>
                                            <span className='fw-bold'>GPT-4</span>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Our Smartest and Most Capable model.</p>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Includes DALL-E, browsing, and more.</p>
                                        </Col>
                                        <Col md={1} className='pe-0 mt-3'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                    </Row>
                                </NavDropdown.Item>
                                <Row className='text-center d-flex mx-auto w-75 px-0 my-3'>
                                    <Button variant="primary" className="text-center">Upgrade</Button>{' '}
                                </Row>
                            </NavDropdown>

                            <Nav className="ms-auto">
                                <Link to="/">
                                    <Nav.Link href="/">
                                        <FontAwesomeIcon icon={faUpload} className='log-out' />
                                    </Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar>

                    </Col>
                </Row>

                <Row className="align-items-center scrol-able">
                    <Col className="mt-auto mx-5">
                        <Row>
                            <Col md={6}>
                                <div style={{ float: 'left' }} className="ms-5">
                                    {inputValuesArray.map((item, index) => (
                                        index % 2 === 0 &&
                                        <div key={index} className="py-3">
                                            <div className='d-flex align-items-center'>
                                                <Image src="holder.js/171x180" roundedCircle />
                                                <span className="ms-2 fw-bold">You</span>
                                            </div>
                                            <div className="my-2">
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>

                            <Col md={6}>
                                <div style={{ float: 'right' }} className="me-5">
                                    {inputValuesArray.map((item, index) => (
                                        index % 2 !== 0 &&
                                        <div key={index} className="py-3">
                                            <div className='d-flex align-items-center'>
                                                <FontAwesomeIcon icon={faReact} />
                                                <span className="ms-2 fw-bold">Chat GPT</span>
                                            </div>
                                            <div >
                                                {item instanceof Object && 'data' in item && item.data}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row className="mt-auto align-items-center">
                    <Col className=" mx-5">
                        <Form onSubmit={handleKeyPress} className="mx-5 pt-4 text-white text-center">
                            <Form.Group >
                                <Form.Control
                                    type="text"
                                    placeholder="Message CHATGPT..."
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form>

                        <div className="mx-5 my-1 text-white text-center">
                            <span className='font-size'>ChatGPT can make mistakes. Consider checking important information.</span>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
