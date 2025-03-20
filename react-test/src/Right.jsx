import "./Right.css";
import { Button, Select } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useState } from "react";



const Right = (props) => {
  // 수량
  const [count, setCount] = useState(1);
  // 선물포장
  const [pack, setPack] = useState(0);
  // 총 금액
  const [totalCount, setTotalCount] = useState(34500);

  // 옵션
  const option1 = [
    { value: 0, label: '기본(+ 0원)' },
    { value: 3000, label: '선물포장(+ 3,000원)' },
    { value: 11000, label: '고급포장(+ 11,000원)' },
  ]

  const presentChange = (value) => {
    setPack(value);
  }

  const ready = () => {
    alert("준비중임")
  }

  // console.log(pack)
  // console.log(totalCount)

  return (
    <>
      <div className="Right_container">
        <h2>맛있는 사과</h2>
        <div>
          <span>
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
            <StarFilled style={{color: "orange"}} />
          </span>
          <span className="count_text"> 2,905개 상품평</span>
        </div>
        <div className="border01"></div>
        <div className="price">
          <p>34,500원 (박스당)</p>
        </div>
        <hr />
        <div>
          <p>
            <span className="text_bold">이 상품은 </span>
            <span className="text_color">내일 도착, 무료배송</span>
          </p>
        </div>
        <div className="count_box">
          <div className="input_box">
            <span className="operator" onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}>- </span>

            <input className="asdf" onChange={(e) => {setCount(e.target.value)}}  type="number" min={1} value={count} readOnly />

            <span className="operator" onClick={() => {
              setCount(count + 1);
            }}>+</span>
          </div>
          <Select 
          defaultValue="기본(+ 0원)"
          options={option1}
          onChange={presentChange}
          style={{ width: 170 }} />
          <button className="readyBtn" onClick={() => {ready()}}>장바구니</button>
          <button className="readyBtn" onClick={() => {ready()}}>바로구매</button>
        </div>
        <div className="total_amount">
          <span>총 : </span>
          <span>{(totalCount * count + pack).toLocaleString()}원</span>
        </div>
      </div>
    </>
    
  )
}

export default Right;