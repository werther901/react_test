import './css/ImageComp.css';
import SideImg from './SideImg';
import crocs01 from './images/crocs01.jpg';
import crocs02 from './images/crocs02.jpg';
import crocs03 from './images/crocs03.jpg';
import crocs04 from './images/crocs04.jpg';
import crocs05 from './images/crocs05.jpg';
import crocs06 from './images/crocs06.jpg';
import { Button, Select, InputNumber } from 'antd';
import { useState } from "react";
import { StarFilled } from '@ant-design/icons';



const ImageComp = () => {
  // 큰 이미지
  const [image, setImage] = useState(crocs01);
  // default 큰 이미지 변경
  const [mainImg, setMainImg] = useState([ crocs01, crocs02, crocs03, crocs04, crocs05, crocs06 ]);
  // Select박스
  const [pack, setPack] = useState(0);
  // default 색상명
  const [colorName, setColorName] = useState('블랙');
  // 색상명 변경
  const [cngColor, setCngColor] = useState(['블랙', '그레이', '그린', '베이지', '핑크', '화이트']);
  // InputNumber value
  const [count, setCount] = useState(0);

  // 신발사이즈 옵션
  const option1 = [
    { value: 1, label: '220-225' },
    { value: 2, label: '230-235' },
    { value: 3, label: '240-245' },
    { value: 4, label: '250-255' },
    { value: 5, label: '260-265' },
    { value: 6, label: '270-275' },
  ]

  // 이미지, 텍스트 변경
  const imgChange = (imgNum) => {
    setImage(mainImg[imgNum]);
    setColorName(cngColor[imgNum]);
  }

  // Select박스 변경
  const presentChange = (value) => {
    setPack(value);
  }

  // InputNumber value
  const onChange = (value) => {
    setCount(value);
  };

  // 상품가격
  const amount = [17600, 16800];

  return (
    <div className='img_wrap_container'>
      <div className='SideImg_01'>
        <SideImg 
          type = "column"
          imgChange={imgChange} />
      </div>
      <div className="ImageComp_container">
        <div className="img_container">
          <img src={image} />
        </div>
      </div>

      <div className="Right_container">
        <h2>우리홈즈 족저근막 리커버리 무중력 쿠션 샌들 슬리퍼</h2>
        <div className='margin_b'>
          <span>
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
          </span>
          <span className="count_text"> 3,507개 상품평</span>
        </div>
        <div className="border01"></div>
        <div className="price">
          <p className='price_p1'>75% <s>69,900원</s></p>
          <p className='price_p2'><span>{(amount[0] * pack).toLocaleString()}원</span> <span>쿠팡판매가</span></p>
          <p className='price_p3'><span>{(amount[1] * pack).toLocaleString()}원</span> <span>즉시할인가</span></p>          
        </div>
        <div className="border01"></div>
        <div className='text_cont'>
          <p>
            <span className="text_color">내일(금) 3/21 도착 보장 </span>
            <span className="text_bold">(8시간 37분 내 주문 시 / 서울·경기 기준)</span>
          </p>
        </div>
        <div className="border01"></div>
        <div>
          <div className='supplier'>
            <span>판매자: </span><span className='supplier_span'>주식회사 우리홈즈</span>
          </div>
        </div>
        <div className="border01"></div>
        <div className="count_box">
          <div className='shoeSize'>신발사이즈(mm)</div>
          <Select 
          defaultValue="220-225"
          options={option1}
          onChange={presentChange}
          style={{ width: 170 }} />
          <div className='shoeSize shoeColor'>색상: {colorName}</div>
          <SideImg 
          type = "row"
          imgChange={imgChange} />
        </div>
        <div className="border01"></div>

        <div className='text_cont02'>
          <p>적립</p>
          <p>최대 840원 쿠팡캐시 적립 · 쿠페이 머니 결제시</p>
          <p>혜택보기</p>
        </div>
        <div className="border01"></div>
        <div className='text_cont03'>          
          <InputNumber className='text_cont03_input' style={{width: 70}} min={1} max={50} defaultValue={1} onChange={onChange} />
          <Button className='cart_btn c_white'>장바구니 담기</Button>
          <Button className='cart_btn c_blue' type="primary">바로구매</Button>
        </div>
      </div>
    </div>
  )
}

export default ImageComp;