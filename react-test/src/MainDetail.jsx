import "./MainStyle.css";
import apple from './images/apple.jpg';
import banana from './images/banana.jpg';
import grape from './images/grape.jpg';
import { Button, Select, Input } from 'antd';


const MainDetail = (props) => {
  const {fruit, setFruit} = props;

  // 과일 옵션
  const option1 = [
    { value: apple, label: '사과' },
    { value: banana, label: '바나나' },
    { value: grape, label: '포도' },
  ]

  const fruitChange = (value) => {
    setFruit(value);
  };

  return (
    <>
      과일
      <Select
      defaultValue={fruit}
      style={{ width: 120 }}
      onChange={fruitChange}
      options={option1}
      />

      <img style={{
        width: 200,
        height: 200
        }} src={fruit} alt="fruit" />
    </>
    
  )
}

export default MainDetail;