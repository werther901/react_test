import "./css/ShippingInfo.css";
import ShippingTableRows from "./ShippingTableRows";
import { tableData01, tableData02, tableData03, tableData04 } from "./data";

function ShippingInfo() {
  return (
    <div className="ShippingInfo_container">
      {/* <img src="./images/exchange.png" /> */}
      <p className="ShippingInfo_title">배송정보</p>

      <table>
        <colgroup>
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
        </colgroup>

        <tbody className="ShippingInfo_table_tr">
          <ShippingTableRows datas={tableData01} />
          <ShippingTableRows datas={tableData02} />
        </tbody>
      </table>

      {/* 교환/반품 안내 */}
      <p className="ShippingInfo_title">교환/반품 안내</p>
      <table>
        <colgroup>
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
        </colgroup>

        <tbody>
          <ShippingTableRows datas={tableData03} />
        </tbody>
      </table>

      {/* 교환/반품 제한사항 */}
      <p className="ShippingInfo_title">교환/반품 제한사항</p>
      <table>
        <colgroup>
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
          <col style={{ width: 150 }} />
          <col style={{ width: 340 }} />
        </colgroup>

        <tbody>
          <ShippingTableRows datas={tableData04} />
        </tbody>
      </table>

    </div>
  );
}

export default ShippingInfo;
