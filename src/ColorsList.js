import React from "react";

const ColorsList = () => {
    return (
        <div>
          <h1>Welcome to the color factory.</h1>
          <Link to="/colors/new">Add a color</Link>
          <ul>
            {colors.map((color, index) => (
              <li key={index}>
                <Link to={`/colors/${color}`}>{color}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    
}

export default ColorsList;