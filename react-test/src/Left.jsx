import "./Left.css";
import apple from './images/apple.jpg';
import apple2 from './images/apple2.jpg';
import apple3 from './images/apple3.jpg';
import apple4 from './images/apple4.jpg';
import { useState } from "react";

const Left = () => {
  const [image, setImage] = useState(apple);
  const [appleImg, setAppleImg] = useState([apple2, apple3, apple4]);

  const appleChange = (value) => {
    setImage(value);
  }

  return (
    <>
      <div className="container">
        <div className="apple_img">
          <img src={image} />
        </div>
        <div className="apple_bundle">
          {
            appleImg.map((a, i) => {
              return (
                <div key={i} className="appleImg">
                  <img src={a} onClick={() => {
                    appleChange(a)
                  }} />
                </div>
              )
            })
          }
        </div>
      </div>
    
    
    </>
  )
}

export default Left;