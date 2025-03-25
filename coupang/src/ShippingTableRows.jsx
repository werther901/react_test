import "./css/ShippingTableRows.css";


function ShippingTableRows({datas}) {


  return (
    <>
      {
        datas.map((data, i) => {
          // th 데이터
          const labelcell = (
            <th 
            className="ShippingInfo_table_01" 
            rowSpan={data.rowSpan || 1} >
              {data.label}
            </th>
          )

          // td 데이터
          const valuecell = (
            <td 
            className="ShippingInfo_table_02" 
            rowSpan={data.rowSpan || 1} 
            colSpan={data.colSpan || 1} >
              {
                Array.isArray(data.value) && data.isList ? (
                  <ul>
                    {data.value.map((x, i) => (
                        <li key={i}>{x}</li>
                    ))}
                  </ul>
                ) : (data.value)
              }
            </td>
          )


          return (
            <tr key={i} className="ShippingInfo_table_tr">
              {labelcell}
              {valuecell}
            </tr>
          )
        })
      }
       

      {/* <tr className="ShippingInfo_table_tr">
        <th className="ShippingInfo_table_01">배송방법</th>
        <td className="ShippingInfo_table_02">순차배송</td>

        <th className="ShippingInfo_table_01" rowSpan={2}>
          배송비
        </th>
        <td className="ShippingInfo_table_02" rowSpan={2}>
          무료배송
          <br />
          - 로켓배송 상품 중 19,800원 이상 구매 시 무료배송
          <br />- 도서산간 지역 추가비용 없음
        </td>

      </tr>

      <tr className="ShippingInfo_table_tr">

        <th className="ShippingInfo_table_01">묶음배송 여부</th>
        <td className="ShippingInfo_table_02">가능</td>

      </tr>
      <tr className="ShippingInfo_table_tr">

        <th className="ShippingInfo_table_01">배송기간</th>
        <td className="ShippingInfo_table_02" colSpan={3}>
          <ul>
            <li>쿠팡친구 배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착</li>
            <li>쿠팡친구 미배송 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착</li>
            <li>도서 산간 지역 등은 하루가 더 소요될 수 있습니다. 곧 고객님께도 쿠팡친구가 찾아갈 수 있도록 노력하겠습니다</li>
            <li>천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소 지연될 수 있는 점 양해 부탁드립니다.</li>
          </ul>
        </td>

      </tr> */}
    </>
  );
}

export default ShippingTableRows;
