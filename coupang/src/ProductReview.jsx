import "./css/ProductReview.css";
import { Rate } from "antd";
import Review_bar from './Review_bar';

function ProductReview() {
  return (
    <div>
      <div className="ProductReview_title">
        <h4>상품평</h4>
      </div>
      <div className="ProductReview_content">
        <p>동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.</p>
      </div>
      <div className="ProductReview_rate">
        <Rate allowHalf defaultValue={2.5} style={{ color: "orange", fontSize: 44 }} />
        <span>3,530 </span>
        <span> 자세히보기</span>
      </div>
      <div className="ProductReview_review_imgs">
        <div>
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <img src="./images/cute_cat.jpg" />
          <div className="ProductReview_review_img"></div>
        </div>
      </div>
      <div className="Review_bar">
        <Review_bar 
          title = "사이즈"
          color = "#6abb6f" />
        <Review_bar 
          title = "발볼"
          color = "#6480e4" />
        <Review_bar 
          title = "색상"
          color = "#888" />
      </div>
      
    </div>
  );
}

export default ProductReview;
