import { Select } from 'antd';

function SelectComp (props) {
  const { color, setColor} = props;
  

  const option2 = [
    { value: 'red', label: "빨간색"},
    { value: 'yellow', label: "노란색"},
    { value: 'blue', label: "파란색"},
  ]

  return (
    <>
      <div className='selectBox'>
        배경색
        <Select
        defaultValue={color}
        style={{ width: 120 }}
        onChange={(value) => {
          setColor(value);
        }}
        options={option2}
        />
      </div>

      <style>
        {`
          .selectBox {
            margin-bottom: 20px;
            text-align: center
          }
        `}
      </style>       

    </>
    
  )

}

export default SelectComp;