import React, { useState } from 'react';
import './Sidebar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faFloppyDisk, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';



export default function Sidebar() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleUpgradeClick = () => setShowModal(true);

    return (

        <>
            <Container fluid id="sidebar">
                <div className="text-white my-4 d-flex justify-content-between align-items-end new-chat">
                    <Link to="/newchat" className='text-white ps-2 text-decoration-none'>
                        <span className='d-flex align-items-center'><FontAwesomeIcon icon={faReact} className='fs-5 pe-2' />NewChat</span>
                        </Link>
                <span><FontAwesomeIcon icon={faReact} className='fs-5' /></span>
            </div>

            <Row>
                <span className='today'>Today</span>
                <div className="text-white my-1 px-1 d-flex justify-content-between today-chat active">
                    <p className='m-2 text-flow'><Link to="/prechat" className=' text-decoration-none text-white'>React App Create Command Testing through Api</Link></p>
                    <div className='d-flex align-items-center'>
                        <a href='/' className='text-white'><FontAwesomeIcon icon={faEllipsis} /></a>
                        <a href='/' className='text-white mx-2'><FontAwesomeIcon icon={faFloppyDisk} /></a>
                    </div>
                </div>
            </Row>

            <Row className="mt-auto align-items-center">
                <Col>
                    <div className="py-4 text-white">

                        <Row className='upgradation align-items-center'>
                            <Col md={1} className='ps-1 pe-0'>
                                <FontAwesomeIcon icon={faStarOfLife} />
                            </Col>

                            <Col md={11} className='ps-3'>
                                <span className='fw-bold' onClick={handleUpgradeClick}>Upgrade Plan</span>
                                <p className='mb-0' style={{ fontSize: '11px' }} onClick={handleUpgradeClick}>Get GPT-4, DALL·E, and more</p>
                            </Col>

                            <Modal show={showModal} onHide={handleClose}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                className='modal'
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title className='fs-5'>Upgrade Your Plan</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col md={4} className="p-4 ">
                                            <div>
                                                <h4>Free</h4>
                                                <p className="amount">Free USD $0/month</p>
                                                <Button variant="secondary" className='disabled w-75 fw-bold my-3'>Secondary</Button>{' '}
                                                <p className="Heading my-4">For people just getting GPT</p>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Unlimited messages, interactions, and history
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div style={{ alignSelf: 'flex-end' }} >
                                                    <span className='fontsize'>Have an existing plan? See</span><a href='#' className='text-white fontsize px-1'>billing help</a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} className="borderr p-4 ">
                                            <div>
                                                <h4>Plus</h4>
                                                <p className="amount">USD $20/month</p>
                                                <Button variant="success" className='w-75 fw-bold my-3'>Secondary</Button>{' '}
                                                <p className="Heading my-4">Everything in Free, and:</p>

                                            </div>
                                            <div>
                                                <ul className="ps-3">
                                                    <li className="fontsize fw-bold">
                                                        Unlimited messages, interactions, and history
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul className="ps-3">
                                                    <li className="fontsize fw-bold">
                                                        Access to our GPT-3.5 model
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul className="ps-3">
                                                    <li className="fontsize fw-bold">
                                                        Access to our GPT-3.5 model
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <ul className="ps-3">
                                                    <li className="fontsize fw-bold">
                                                        Access to our GPT-3.5 model
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={4} className="p-4 ">
                                            <div>
                                                <h4>Team</h4>
                                                <p className="amount">USD $25 per person/month*</p>
                                                <Button variant="primary" className='w-75 fw-bold my-3'>Secondary</Button>{' '}
                                                <p className="Heading my-4">Everything in Plus, and:</p>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul className="ps-3">
                                                        <li className="fontsize fw-bold">
                                                            Access to our GPT-3.5 model
                                                        </li>
                                                    </ul>
                                                </div>

                                                <span className='fontsize' style={{ color: "#999999" }}>* Price billed annually, minimum 2 users</span>

                                            </div>

                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer className="d-flex justify-content-center align-items-center fw-bold" style={{ fontSize: "13px" }}>
                                    <p>
                                        Need more capabilities? <a href="#" className='text-white'>See ChatGPT Enterprise</a>
                                    </p>
                                </Modal.Footer>
                            </Modal>

                        </Row>

                        <div className='d-flex align-items-center'>
                            <Image src="holder.js/171x180" roundedCircle />
                            <span className='mx-2'>User Founded</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
        </>
    );
}
