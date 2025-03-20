import './TableComp.css';
import { useEffect, useState } from 'react';
import { Button, Table } from 'antd';


function TableComp(props) {
  const { tableData, setTableData, color } = props;

  // 테이블행 삭제
  const dataDelete = (key) => {
    // const localData = JSON.parse(localStorage.getItem("userData"));
    const delData = tableData.filter((x) => x.key !== key);
    setTableData(delData);

    localStorage.setItem("userData", JSON.stringify(delData));
  }

  // 테이블 데이터
  const pushTableData = tableData.map((a, i) => {
    return {
      key: i,
      name: a.name,
      age: a.age,
      nickName: a.nickName,
      hobby: a.hobby
    }
  })

  // 테이블 헤더
  const columns = [
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '나이',
      dataIndex: 'age',
      key: 'age',
      align: 'center',

    },
    {
      title: '별명',
      dataIndex: 'nickName',
      key: 'nickName',
      align: 'center',

    },
    {
      title: '취미',
      dataIndex: 'hobby',
      key: 'hobby',
      align: 'center',

    },
    {
      title: '관리',
      align: 'center',
      render: (data) => {
        console.log(data.key)
        return <Button onClick={() => {dataDelete(data.key)}}>삭제</Button>;
      },
    },
  ];

  return (
    <>
      <Table
      columns={columns} 
      dataSource={pushTableData}
      components={{
        header: {
          cell: (props) => (
            <th
              {...props}
              style={{
                backgroundColor: color, // props로 받은 color 적용
                color: "white",
                textAlign: "center",
              }}
            />
          ),
        },
      }} />

    </>
  )
}

export default TableComp;