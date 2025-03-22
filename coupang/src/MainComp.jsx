import './css/MainComp.css';
import Slide from './Slide';



function MainComp () {


  return (
    <div className='Main_container'>
      <div className='Main_title'>
        <p>함께 비교하면 좋을 상품</p>
      </div>
      <Slide type='middle' />
    </div>
  )
}

export default MainComp;