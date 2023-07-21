import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaUser, FaUserFriends } from 'react-icons/fa'
import { MdOutlineCardGiftcard, MdOutlineCategory, MdOutlineProductionQuantityLimits, MdOutlineVerifiedUser } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const AdminHome = () => {
  return (
    <Container >
      <Row>
        <Col>
        <Card className='mt-4'>
          <Card.Body className='shadow text-center'>
            <h3 className='text-center'>Welcome to Admin Dashboard</h3>
          <p className='text-center text-muted'>Customise Dasboard for Admin, to add categories, to add products, to view categories, products, orders, manage orders and many more </p>
          <Container className='d-grid gap-3'>
            <Button as={Link} className='' variant='outline-secondary' to={'/admin/categories'}>Start Managing Categories</Button>
            <Button as={Link} variant='outline-secondary' to={'/admin/products'}>Start Managing Products</Button>
            <Button as={Link} variant='outline-secondary' to={'/admin/orders'}>Start Managing Orders</Button>
            <Button as={Link} variant='outline-secondary' to={'/admin/users'}>Start Managing Users</Button>
          </Container>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className='m-4'>
            <Card.Body className='text-center'>
             <MdOutlineProductionQuantityLimits size={70} />
             <h3>({2523})</h3>
             <h3>Number of Products</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='m-4'>
            <Card.Body className='text-center'>
             <MdOutlineCategory size={70} />
             <h3>({2523})</h3>
             <h3>Number of Categories</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='m-4'>
            <Card.Body className='text-center'>
             <MdOutlineCardGiftcard size={70} />
             <h3>({2523})</h3>
             <h3>Number of Orders</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='m-4'>
            <Card.Body className='text-center'>
             <FaUserFriends size={70} />
             <h3>({2523})</h3>
             <h3>Number of Users</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
