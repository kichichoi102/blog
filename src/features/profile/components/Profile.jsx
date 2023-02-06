import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import UserProfileBox from './UserProfileBox';
import ProfileDetails from './ProfileDetails';
import SocialHandles from './SocialHandles';
import Posts from './Posts';

export function Profile() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Container>
              <Row className='justify-content-md-center' style={{ paddingBottom: '1rem' }}>
                <Col md='auto'>
                  <UserProfileBox />
                </Col>
              </Row>
              <Row className='justify-content-md-center' style={{ paddingBottom: '1rem' }}>
                <Col md='auto'>
                  <SocialHandles />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container style={{ paddingBottom: '1rem' }}>
              <Row className='justify-content-md-center' style={{ paddingBottom: '1rem' }}>
                <Col>
                  <ProfileDetails />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Posts />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
