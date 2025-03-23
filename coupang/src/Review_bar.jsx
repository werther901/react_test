import "./css/Review_bar.css";
import { Flex, Progress } from "antd";

function Review_bar(props) {
  const { title, color } = props;

  return (
    <section>
      <div className="Review_bar_container">
        <header className="Review_bar_size">{title}</header>
        <ul>
          <li>
            <Flex
              vertical
              gap="small"
              style={{
                width: 275,
              }}
            >
              <div className="Review_bar_content_box">
                <p className="Review_bar_content">생각보다 작아요</p>
                <Progress percent={7} size={{ width: 130, height: 10 }} strokeColor={color} strokeLinecap="butt" />
              </div>
              <div className="Review_bar_content_box">
                <p className="Review_bar_content">정사이즈예요</p>
                <Progress percent={75} size={{ width: 130, height: 10 }} strokeColor={color} strokeLinecap="butt" />
              </div>
              <div className="Review_bar_content_box">
                <p className="Review_bar_content">생각보다 커요</p>
                <Progress percent={18} size={{ width: 130, height: 10 }} strokeColor={color}  strokeLinecap="butt" />
              </div>
            </Flex>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Review_bar;
