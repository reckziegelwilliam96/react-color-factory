import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { color } = useParams();

  if (!colors.includes(color)) {
    return <Redirect to="/colors" />;
  }

  return (
    <div
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>This is {color}!</h1>
      <h2 style={{ color: 'white' }}>
        Isn't it beautiful?
      </h2>
      <Link to="/colors">
        <button style={{ color: 'white', backgroundColor: 'black', marginTop: '1rem' }}>Go Back</button>
      </Link>
    </div>
  );
};

export default ColorDetails;