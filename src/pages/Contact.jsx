import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helment";
import CommonSection from "../components/UI/CommonSection";
import "../style/Contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact Us" />
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h2 className="section-title mb-4">Get in Touch</h2>
              <p className="section-description mb-5">
                Have questions or inquiries? Fill out the form below, and we’ll
                get back to you as soon as possible.
              </p>

              <Form>
                <FormGroup className="contact-form-group">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    className="contact-input"
                  />
                </FormGroup>
                <FormGroup className="contact-form-group">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="contact-input"
                  />
                </FormGroup>
                <FormGroup className="contact-form-group">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="contact-textarea"
                  ></textarea>
                </FormGroup>

                <button className="example btn contact-btn contact-here" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                <p className="contact-description">
                  We’d love to hear from you! Reach out to us through any of the
                  following channels.
                </p>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <h6>Address:</h6>
                    <p>123 ZindaBazar, Sylhet, Bangladesh</p>
                  </div>
                  <div className="contact-detail-item">
                    <h6>Phone:</h6>
                    <p>+88683896366</p>
                  </div>
                  <div className="contact-detail-item">
                    <h6>Email:</h6>
                    <p>example@gmail.com</p>
                  </div>
                </div>

                <h2 className="section-title mt-4">Follow Us</h2>
                <div className="social-links d-flex gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={index} className="social-link">
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
