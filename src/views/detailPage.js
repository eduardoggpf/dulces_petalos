import HeaderComponent from '../components/headerComponent';
import DetailComponent from '../components/detailComponent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch('https://dulces-petalos.herokuapp.com/api/product/' + id)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="Home">
      <HeaderComponent flower = {data.name}></HeaderComponent>
      <DetailComponent flower = {data}></DetailComponent>
    </div>
  );
}

export default Detail;