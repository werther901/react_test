import './Main.css';
import InputComp from "./InputComp";
import TableComp from "./TableComp";
import SelectComp from "./SelectComp";
import { useEffect, useState } from 'react';


function Main() {
  const [color, setColor] = useState('red');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("userData")) || [];

    setTableData(newData);
  }, []);

  console.log(tableData)


  return (
    <>
      <div className='container'>
        <InputComp tableData={tableData} setTableData={setTableData} />
        <SelectComp color={color} setColor={setColor} />
        <TableComp 
        tableData={tableData} 
        setTableData={setTableData} 
        color={color} />
      </div>
    </>
  )
}

export default Main;