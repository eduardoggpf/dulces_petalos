import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import '../ui/listView.css';
//import "@/app/src/ui/listView.css";

function ListView() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dulces-petalos.herokuapp.com/api/product')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())||item.binomialName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grid-container">
      <input type="text" class="search-bar" placeholder="Busca por nombre" onChange={e => setSearchTerm(e.target.value)} />
      {/* Esto es como el ngFor de angular*/}
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredData.map((item, id) => (
            <Grid item xs={6} md={3} sm={4} spacing={2}>
                <th className="grid-item" key={item.id}>
                <section>
                    <h3>{item.name}</h3>
                    <p>{item.binomialName}</p>
                </section>
                <img src={item.imgUrl} class="grid-img"/>
                <p>{item.price + "€"}</p>
                </th>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ListView;
