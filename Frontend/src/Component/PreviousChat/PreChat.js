import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';
import InputPrompt from '../InputPrompt/InputPrompt';


function PreChat({data}) {
  return (
    <>
      <Container fluid className="main-page">

        <Row>
          <Col md={2} className='sidebar'>
            <Sidebar />
          </Col>

          <Col md={10} className='text-white main-page'>
            <InputPrompt data={data}/>
          </Col>

        </Row>

      </Container>
    </>
  )
}

export default PreChat
