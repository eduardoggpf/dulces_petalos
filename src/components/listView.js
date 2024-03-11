import React, { useEffect, useState } from 'react';

function ListView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dulces-petalos.herokuapp.com/api/product')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid-container">
      {/* Esto es como el ngFor de angular*/}
      {data.map(item => (
        <div className="grid-item" key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.imgUrl} />
        </div>
      ))}
    </div>
  );
}

export default ListView;
