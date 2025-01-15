import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import Helment from '../components/Helmet/Helment'
import CommonSection from '../components/UI/CommonSection'
import BlogList from '../components/UI/BlogList'
function Blog() {
  return (<Helment title='Blogs'>
    <CommonSection title='Blogs'></CommonSection>
    <section>
      <Container>
        <Row>
          <BlogList/>
          <BlogList/>
        </Row>
      </Container>
    </section>
  </Helment>
  )
}

export default Blog