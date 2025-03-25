import "./MainStyle.css";
import { Input } from 'antd';

const MainDetail4 = (props) => {
  const {text, setText} = props;

  return (
    <>
      <Input style={{width: 400}} onChange={(e) => {setText(e.target.value)}}></Input>
    </>
  )
}

export default MainDetail4;