import './css/SideImg.css'
import m_crocs01 from './images/m_crocs01.jpg';
import m_crocs02 from './images/m_crocs02.jpg';
import m_crocs03 from './images/m_crocs03.jpg';
import m_crocs04 from './images/m_crocs04.jpg';
import m_crocs05 from './images/m_crocs05.jpg';
import m_crocs06 from './images/m_crocs06.jpg';
import { useState } from 'react';


function SideImg ({imgChange, mainImg, direction}) {

  const [mImg, setmImg] = useState([ m_crocs01, m_crocs02, m_crocs03, m_crocs04, m_crocs05, m_crocs06 ]);
  const [hovr, setHovr] = useState(null);

  const handleHover = (index) => {
    setHovr(index);
  }

  return (
    <div className={`sideImg_container ${direction === 'column' ? 'column' : 'row'}`} >
      {
        mImg.map((img, i) => {
          return (
            <div className='shoes_m_cont' key={i}>
              <img 
              src={img} 
              className={`${hovr === i ? 'active' : ''}`}
              alt="crocsImage" 
              onMouseOver={() => {
                imgChange(i)
              }}
              onClick={() => {handleHover(i)}} >
              </img>
              <i className='img_icon'></i>
            </div>
          )
        })
      }
    </div>

  )
}

export default SideImg;