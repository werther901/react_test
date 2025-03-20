import './InputComp.css';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Select, Input, Table, notification } from 'antd';

function InputComp(props) {
  const { tableData, setTableData } = props;
  // console.log(tableData)

  // 이미지, select, checkbox모두 가져올 수 있음
  const userFormik = useFormik({
    initialValues: {
      name: '',
      age: '',
      nickName: '',
      hobby: '',
    },
    // 버튼 눌렀을때만 실행 / onSubmit은 input에서 엔터누르면 실행됨
    onSubmit: values => {
      // 콘솔찍으면 객체형식으로 나옴
      // console.log(values)

      // 테이블 state에 추가
      const newValue = [...tableData, { ...values, key: tableData.length }];
      console.log(newValue);
      setTableData(newValue);

      // 로컬스토리지 저장
      localStorage.setItem("userData", JSON.stringify(newValue));

      // 조건에 따라 저장여부 확인해야할듯
      notification.success({
        message: "저장성공"
      })
      // notification.warning({
      //   message: "저장안됨",
      // })
      userFormik.resetForm(); // input값 reset
    }
  });
  // 콘솔찍는법
  // console.log(userFormik.values)


  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input 
        name='name' 
        placeholder='이름을 입력해 주세요'
        value={userFormik.values.name}
        onChange={userFormik.handleChange}></Input>
        <Input 
        name='age' 
        placeholder='나이를 입력해 주세요' 
        value={userFormik.values.age}
        onChange={userFormik.handleChange}></Input>
        <Input 
        name='nickName' 
        placeholder='별명을 입력해 주세요' 
        value={userFormik.values.nickName}
        onChange={userFormik.handleChange}></Input>
        <Input 
        name='hobby' 
        placeholder='취미를 입력해 주세요' 
        value={userFormik.values.hobby}
        onChange={userFormik.handleChange}></Input>
        {/* antd 버튼 쓸 때만 htmlType 정해줘야함 그냥 버튼은 상관없음 */}
        <Button htmlType='submit'>저장</Button>
      </form>
    
    
    </>
  )
}

export default InputComp;