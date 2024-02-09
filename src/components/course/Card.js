import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseCard = ({ imageUrl, courseName }) => (
  <Card className="text-center mb-4" style={{ width: '15rem', height: '17rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: 'white' }}>
    <Card.Img variant="top" src={imageUrl} alt={courseName} style={{ borderRadius: '15px 15px 0 0', paddingTop: '30px', paddingBottom: '30px', width: '70%', height: '50%', objectFit: 'cover' }} />
    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '50%' }}>
      <Card.Title
        style={{
          fontWeight: 600,
          fontSize: '1.5rem', // Adjust the font size as needed
          color: 'black',
          textDecoration: 'none',
          paddingTop: '20px',
          paddingBottom: '20px',
          boxShadow: '4px 0 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {courseName}
      </Card.Title>
      {/* <Card.Text>{description}</Card.Text> */}
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
);

export default CourseCard;
