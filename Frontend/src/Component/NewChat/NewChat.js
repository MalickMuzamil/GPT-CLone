import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Container,Row,Col } from 'react-bootstrap'
import InputPrompt2 from './InputPrompt2'

export default function NewChat() {
  return (
    <>
      <Container fluid className="main-page">

        <Row>
          <Col md={2} className='sidebar'>
            <Sidebar />
          </Col>

          <Col md={10} className='text-white main-page'>
            <InputPrompt2 />
          </Col>
        </Row>

      </Container>
    </>
  )
}
