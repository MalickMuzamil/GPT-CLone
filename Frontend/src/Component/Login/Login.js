import React, { useState } from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';


export default function Login() {

    const [Email, setEmail] = useState("");
    const url = "/login";
    const navigate = useNavigate();

    const showSuccessAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User SuccessFully Login",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const showErrorAlert = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Valid Credentials!",
            footer: 'Try Again'
        });
    };

    const showErrorAlert3 = (e) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login failed",
            footer: 'Try Again for SignUp'
        });
    };

    const handleChanged = (e) => {
        setEmail(e.target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            console.log('hassan');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (Email.trim() === "" || !emailRegex.test(Email.trim())) {
                showErrorAlert();
            }

            else {

                let body = {
                    Email: Email
                }

                const response = await axios.post(`http://localhost:3001${url}`, body);
                console.log(response)

                setEmail([Email])

                if (response.status === 200) {
                    showSuccessAlert()
                    navigate("/newchat")
                }
            }
        }

        catch (error) {
            if (error.response.status === 404) {
                showErrorAlert3()
            }
            // console.log(error.response.status);
            console.log("Nahi Chl rha Login ka Function")
        }
    }

    return (
        <>
            <Container>
                <Row className='text-center my-5'>

                    <Col md={12}>
                        <FontAwesomeIcon icon={faReact} className='fs-1 my-3' />
                        <div className='mt-5'>
                            <h2 className='fw-bold heading2 mb-4'>Welcome back</h2>

                            <label className="custom-field one">
                                <Form onSubmit={handleForm}>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder=" "
                                            className='form-control form-class'
                                            onChange={handleChanged}
                                            value={Email}
                                        />
                                        <span className="placeholder">Email Address</span>
                                    </Form.Group>
                                </Form>

                                <div className='custom-field w-100 my-3'>
                                    <Button onClick={handleForm} variant="success" className='w-100 py-3'>Continue</Button>{' '}


                                    <p className='account fw-bold'>Don't have an account?
                                        <Link to="/signup" className="px-2 sign-up">SignUp</Link>
                                    </p>
                                    <div className='header my-3'>
                                        <p className="email font-size">OR</p>
                                    </div>
                                    <div className='custom-field w-100'>
                                        <Button variant="outline-secondary" className='w-100 py-3 my-2 text-start text-dark'>
                                            <FontAwesomeIcon icon={faReact} className='fs-6 pe-3' /> Continue with Google
                                        </Button>{' '}
                                    </div>
                                    <div className='custom-field w-100'>
                                        <Button variant="outline-secondary" className='w-100 py-3 my-2 text-start text-dark'>
                                            <FontAwesomeIcon icon={faMicrosoft} className='fs-5 pe-3' /> Continue with Microsoft Account
                                        </Button>{' '}
                                    </div>
                                    <div className='custom-field w-100'>
                                        <Button variant="outline-secondary" className='w-100 py-3 my-2 text-start text-dark'>
                                            <FontAwesomeIcon icon={faApple} className='fs-5 pe-3' /> Continue with Apple
                                        </Button>{' '}
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <a href="" className='sign-up mx-3'>Term</a>
                                    <a href="" className='sign-up mx-3'>Policy</a>
                                </div>


                            </label>

                        </div>
                    </Col>
                </Row>
            </Container>


            {/* Alert component */}

        </>
    )
}
