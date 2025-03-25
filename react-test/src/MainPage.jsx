import { useState } from 'react';
import './App.css';
import MainDetail from "./MainDetail";
import MainDetail2 from "./MainDetail2";
import MainDetail3 from "./MainDetail3";
import MainDetail4 from "./MainDetail4";
import Left from "./Left";
import Right from "./Right";
import apple from './images/apple.jpg';

const MainPage1 = () => {
  
  const [fruit, setFruit] = useState(apple); // 과일 이미지
  const [back, setBack] = useState('red'); // 배경색
  const [fontColor, setFontColor] = useState('white'); // 글자색
  const [text, setText] = useState(""); // 텍스트

  // 회원가입, 로그인 시 이런식으로도 짠다??? 250319
  // const [user, setUser] = useState(false);
  // const signUp = () => {
  //   return <>{user && <div>hi</div>}</>
  // }

  // useEffect(() => {
  //   userFormik.setFieldValue('name',data.name);
  //   userFormik.setFieldValue('age',data.age);
  //   userFormik.setFieldValue('nickName',data.nickName);
  //   userFormik.setFieldValue('hobby',data.hobby);
  // },[])

  return (
    <div>
      {/* 250318 실습 & 과제 */}
      <div style={{marginBottom: 50}}>
        <MainDetail fruit={fruit} setFruit={setFruit} />
        <MainDetail2 back={back} setBack={setBack} />
        <MainDetail3 fontColor={fontColor} setFontColor={setFontColor} text={text} back={back} />
        <MainDetail4 text={text} setText={setText} />
      </div>
      <hr />

      {/* 250319 과제 */}
      <div className='wrap2'>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default MainPage1;
