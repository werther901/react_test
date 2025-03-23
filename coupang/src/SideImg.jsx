import './css/SideImg.css'


function SideImg ({imgChange, type, mImg, handleHover, hovr}) {

  
  return (
    <div 
    className={`sideImg_container ${type === 'column' ? 'column' : 'row'}`} >
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