import HeaderComponent from '../components/headerComponent';
import DetailComponent from '../components/detailComponent';

function Detail(item) {
  return (
    <div className="Home">
      <HeaderComponent></HeaderComponent>
      <DetailComponent></DetailComponent>
    </div>
  );
}

export default Detail;