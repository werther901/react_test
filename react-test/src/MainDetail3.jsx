import "./MainStyle.css";
import { Button, Select, Input } from 'antd';

const MainDetail3 = (props) => {
  const {fontColor, setFontColor, text, back} = props;

  const option3 = [
    { value: "white", label: "흰색"},
    { value: "gray", label: "회색"},
    { value: "green", label: "초록색"},
  ]
  
  return (
    <>
      글자색
      <Select
      defaultValue={fontColor}
      style={{ width: 120 }}
      onChange={(value) => {
        setFontColor(value);
      }}
      options={option3}
      />

      <div style={{
        padding: 10,
        width: 200,
        backgroundColor: back,
        color: fontColor
      }}>{text}</div>

    </>
  )
}

export default MainDetail3;