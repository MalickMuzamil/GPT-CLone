import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios'
import Swal from 'sweetalert2';
import './Signup.css'

export default function Signup() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();
    const url = "/signup";

    const showSuccessAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User SuccessFully Register",
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
    
    const showErrorAlert2 = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Already Exist",
            footer: 'Please Login'
          });
    };

    const showErrorAlert3 = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "SignUp failed",
            footer: 'Try Again for SignUp'
          });
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    };

    const handleKeyPress = async (e) => {
        e.preventDefault();
        try {

            if (userEmail.trim() === "" || userPassword.trim() === "") {
                showErrorAlert()
            }

            else {

                let body = {
                    Email: userEmail,
                    Password: userPassword
                };

                const response = await axios.post(`http://localhost:3001${url}`, body);

                setUserEmail([userEmail]);
                setUserPassword([userPassword]);

                if (response.status === 400) {
                    showErrorAlert2();
                }

                else if (response.status === 200) {
                    showSuccessAlert();
                    navigate("/login");
                }

                else {
                    showErrorAlert3();
                }
            }
        }
        catch (error) {
            console.log("Error: ", error);
            console.log("Nahi chaala: ", error);
        }

    }


    return (
        <>
            <Container>
                <Row className='text-center my-5'>
                    <Col md={12}>
                        <FontAwesomeIcon icon={faReact} className='fs-1 my-3' />
                        <div className='mt-5'>
                            <h2 className='fw-bold heading2 mb-4'>Create your Account</h2>

                            <div>
                                <label className="custom-field one">
                                    <Row>
                                        <Col md={12}>
                                            <Form onSubmit={handleKeyPress}>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder=" "
                                                        className="form-control form-class"
                                                        value={userEmail}
                                                        onChange={handleEmailChange}
                                                    />
                                                    <span className="placeholder">Email Address</span>
                                                </Form.Group>
                                            </Form>

                                        </Col>
                                    </Row>
                                </label>
                            </div>




                            <div className="my-3">
                                <label className="custom-field one">
                                    <Row>
                                        <Col md={12}>
                                            <Form onSubmit={handleKeyPress}>
                                                <Form.Group>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder=" "
                                                        className="form-control form-class"
                                                        value={userPassword}
                                                        onChange={handlePasswordChange}
                                                    />
                                                    <span className="placeholder">Password</span>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </label>
                            </div>

                            <Row className='my-3' >
                                <Col md={12}>
                                    <Link onClick={handleKeyPress} >
                                        <Button variant="success" className='w-25 py-3'>Continue</Button>{' '}
                                    </Link>
                                    <p className='account fw-bold'>Do you have an account?
                                        <Link to="/login" className="px-2 sign-up">Login</Link>
                                    </p>

                                    <div className='header my-3 w-25'>
                                        <p className="email font-size">OR</p>
                                    </div>
                                    <div >
                                        <Button variant="outline-secondary" className='w-25 py-3 my-2 text-start text-dark d-inline-flex align-items-center'>
                                            <FontAwesomeIcon icon={faReact} className='fs-6 pe-3' /> Continue with Google
                                        </Button>{' '}
                                    </div>
                                    <div >
                                        <Button variant="outline-secondary" className='w-25 py-3 my-2 text-start text-dark d-inline-flex align-items-center'>
                                            <FontAwesomeIcon icon={faMicrosoft} className='fs-5 pe-3' /> Continue with Microsoft
                                        </Button>{' '}
                                    </div>
                                    <div>
                                        <Button variant="outline-secondary" className='w-25 py-3 my-2 text-start text-dark d-inline-flex align-items-center'>
                                            <FontAwesomeIcon icon={faApple} className='fs-5 pe-3' /> Continue with Apple
                                        </Button>{' '}
                                    </div>
                                </Col>
                            </Row>

                            <div className='mt-5'>
                                <a href="" className='sign-up mx-3'>Term</a>
                                <a href="" className='sign-up mx-3'>Policy</a>
                            </div>

                        </div>
                    </Col>
                </Row >
            </Container >
        </>
    )
}
