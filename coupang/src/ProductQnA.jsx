import './css/ProductQnA.css'

function ProductQnA({inquiry, answer}) {

  return (
  
    <div className='ProductInquiry_inquiry_answer'>
      {/* 질문 */}
      <div className='ProductInquiry_inquiry'>
        <em>질문</em>
        <div className='ProductInquiry_inquiry_title'>
          <p>230-235 | 화이트  주식회사 우리홈즈 </p>
          <p>2025/03/23 11:36:39</p>
        </div>
        <div>
          <div className='ProductInquiry_inquiry_content'>
            <p>{inquiry}</p>
          </div>
        </div>

      {/* 답변 */}
      </div>
      <div className='ProductInquiry_answer'>
        <em>답변</em>
        <div className='ProductInquiry_answer_title'>
          <p className='ProductInquiry_answer_title_p1'><strong>주식회사 우리홈즈</strong></p>
          <p className='ProductInquiry_answer_title_p2'>2025/03/24 15:36:39</p>
        </div>
        <div className='ProductInquiry_answer_content'>
          <p>{answer}</p>
        </div>
        
      </div>
    </div>
  )
}

export default ProductQnA;