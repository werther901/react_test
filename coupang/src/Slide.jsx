import './css/Slide.css';
import data from './data';
import { StarFilled } from '@ant-design/icons';


function Slide(props) {
  const { type } = props;

  return (
    <div 
    className={type === 'large' ? 'large' :
      type === 'middle' ? 'middle' : 'small' }>
        {
          data.map((item, i) => {
            return (
              <div key={i} className='middle_slide_wrap'>
                <div className='slide_img_container'>
                  <img src={item.url} />
                </div>
                <div className='slide_goods_title'>
                  <p>{item.name}</p>
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
            )
          })
        }
      
    </div>
  )
}

export default Slide;