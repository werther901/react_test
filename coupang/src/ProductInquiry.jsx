import './css/ProductInquiry.css';
import ProductQnA from './ProductQnA';
import { Button } from 'antd';
import { ReadyContext } from './ReadyContext';
import { useContext } from 'react';


function ProductInquiry () {
  // Context API
  const ready = useContext(ReadyContext);

  return (
    <div className='ProductInquiry_container'>
      {/* <img src="./images/inquiry.png" /> */}
      <div className='ProductInquiry_title_container'>
        <h1 className='ProductInquiry_title'>상품문의</h1>
        <Button 
          className='cart_btn c_white ProductInquiry_btn'
          onClick={() => {ready()}}>문의하기
        </Button>
      </div>
      
      <ul className='ProductInquiry_content'>
        <li>구매한 상품의 <strong>취소/반품은 마이쿠팡 구매내역에서 신청</strong> 가능합니다.</li>
        <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
        <li><strong>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</strong>를 이용해주세요.</li>
        <li><strong>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</strong></li>
        <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
      </ul>

      <div className='ProductInquiry_inquiry_container'>
        <ProductQnA 
        inquiry = "구매하고 싶은데 언제쯤 재입고 되나요?빨리 해주심 감사하겠습니당ㅜㅜ"
        answer = "네 정 사이즈 이십니다." />
        <ProductQnA 
        inquiry = "240 신는데 이 사이즈 시켜두 되나요 ?볼살은 없어용 ㅋ"
        answer = "네 고객님 조금만 기다려 주시면 곧 입고 될 예정입니다." />
        <ProductQnA 
        inquiry = "상품 수령후 착화해보니 왼쪽 오른쪽 깔창 크기가 다른 불량이었습니다. 이미 포장도 다 제거하여 반품도 못하는 상황인데 그냥 신으려니 불편감이 너무 큽니다ㅜㅜ 어떻게 해야 할까요?!ㅜㅜ"
        answer = "포장은 아무 박스에 넣어 주시고 박스에 쿠팡 반품이라고 적어 주시면 되십니다." />
        <ProductQnA 
        inquiry = "사이즈 입고 문의드려요"
        answer = "안녕하세요~2-3일 쯤이면 입고 될것 같습니다. 감사합니다." />
      </div>


    </div>
  )
}

export default ProductInquiry;