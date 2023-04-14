import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [color, setColor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    history.push('/colors');
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={color}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;