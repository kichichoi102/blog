import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import UserProfileBox from './UserProfileBox';
import ProfileDetails from './ProfileDetails';
import SocialHandles from './SocialHandles';

export function Profile() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center" style={{ paddingBottom: '1rem' }}>
          <Col md="auto">
            <UserProfileBox />
          </Col>
          <Col>
            <ProfileDetails />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <SocialHandles />
          </Col>
        </Row>
      </Container>
    </>
  );
}
