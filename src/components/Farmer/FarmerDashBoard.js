import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
// import ChatBox from "./ChatBox"; // Import the ChatBox component
import "./FarmerDashBoard.css";

const FarmerDashBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <div>Overview: Details about your banana crops and export status.</div>;
      case "profile":
        return <div>Profile Management: Update your details and view export status.</div>;
      case "appointments":
        return <div>Book Appointment: Schedule a meeting with agents.</div>;
      case "billing":
        return <div>Billing & Payments: View billing history and make payments.</div>;
      case "listings":
        return <div>Fruit Listings: View and manage your banana listings.</div>;
      case "notifications":
        return <div>Notifications: Alerts about payments and appointments.</div>;
      case "feedback":
        return <div>Feedback & Suggestions: Provide feedback about the platform.</div>;
      case "photo-upload":
        return (
          <div>
            <h5>Photo Upload</h5>
            <p>Upload images of your banana crops and provide additional details.</p>
            
            {/* File Upload Input */}
            <input type="file" className="form-control mt-3" />
            
            {/* Text Area for Description */}
            <textarea
              className="form-control mt-3"
              rows="4"
              placeholder="Enter any additional details or comments about the upload."
            ></textarea>
            
            {/* Submit Button */}
            <Button variant="primary" className="mt-3">
              Submit
            </Button>
          </div>
        );
      case "price-feed":
        return <div>Price Feed: Access current export prices for bananas.</div>;
      default:
        return <div>Welcome to the Farmer's Dashboard</div>;
    }
  };

  return (
    <div className="dashboard">
      {/* Sticky Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 sticky-top">
        <Navbar.Brand href="#">Fresh Horizons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sticky Sidebar */}
          <Col xs={3} className="sidebar bg-light p-3 position-sticky top-0 vh-100">
            <h5>Navigation</h5>
            <Nav className="flex-column">
              <Button
                variant={activeTab === "overview" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Button>
              <Button
                variant={activeTab === "profile" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("profile")}
              >
                Profile Management
              </Button>
              <Button
                variant={activeTab === "appointments" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("appointments")}
              >
                Book Appointments
              </Button>
              <Button
                variant={activeTab === "billing" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("billing")}
              >
                Billing & Payments
              </Button>
              <Button
                variant={activeTab === "listings" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("listings")}
              >
                Fruit Listings
              </Button>
              <Button
                variant={activeTab === "notifications" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("notifications")}
              >
                Notifications
              </Button>
              <Button
                variant={activeTab === "feedback" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("feedback")}
              >
                Feedback
              </Button>
              <Button
                variant={activeTab === "photo-upload" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("photo-upload")}
              >
                Photo Upload
              </Button>
              <Button
                variant={activeTab === "price-feed" ? "primary" : "outline-primary"}
                className="mb-2"
                onClick={() => setActiveTab("price-feed")}
              >
                Price Feed
              </Button>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col xs={9} className="main-content p-4">
            {renderContent()}
          </Col>
        </Row>
      </Container>

      {/* Chat Box at the Bottom */}
      {/* <ChatBox /> */}

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center p-3">
        <Container>
          <Row>
            <Col>
              <p>© 2024 Fresh Horizons. All Rights Reserved.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <a href="/terms" className="text-white">Terms & Conditions</a> | 
                <a href="/privacy" className="text-white ms-2">Privacy Policy</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default FarmerDashBoard;
