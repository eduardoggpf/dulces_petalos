import HeaderComponent from '../components/headerComponent';
import DetailComponent from '../components/detailComponent';

function Detail(item) {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <h3>Detalle del producto</h3>
      <DetailComponent id={item}></DetailComponent>
    </div>
  );
}

export default Detail;