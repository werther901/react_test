import './css/Slide.css';
import { StarFilled } from '@ant-design/icons';


function Slide(props) {
  const { type, item } = props;
  
  // "와우할인가" + "36% 18,000원"
  const label = (item.discount || "").split(' ').slice(0, 1).join(" ");
  const discount_percent = (item.discount || "").split(' ').slice(1, 2).join(" ");
  const discount_price = (item.discount || "").split(' ').slice(2).join(" ");

  return (
    <div 
    className={type === 'large' ? 'large' :
      type === 'middle' ? 'middle' : 'small' }>
      <div className='middle_slide_wrap'>
        <div className='slide_img_container'>
          <img src={item.url} />
        </div>
        <div className='slide_goods_title'>
          <p>{item.name}</p>
        </div>
        <div className='large_discount'>
          <span>{label} </span> 
          <span>{discount_percent} </span> 
          <s>{discount_price}</s>
        </div>
        <div className='slide_goods_price'>
          <p>{item.price}<span>원</span></p>
        </div>
        <div className='slide_goods_rating'>
          <StarFilled style={{color: "orange"}} />
          <StarFilled style={{color: "orange"}} />
          <StarFilled style={{color: "orange"}} />
          <StarFilled style={{color: "orange"}} />
          <StarFilled style={{color: "orange"}} />
          <span className='slide_goods_rating_count'>
            ({item.review})
          </span>
        </div>
      </div>
    </div>
  )
}

export default Slide;