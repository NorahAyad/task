import "../App.css";
import { Link } from "react-router-dom";
import Destail from "./Destail";
function Body() {
  return (
    <>
      <div className="col-12" id="box-c">
        <div className="img-cat">
          <a href="https://wdeftksa.com/sa/jobs/10169">
            <img src="https://wdeftksa.com/sa/users/images/7385.jpg" />
          </a>
        </div>

        <div className="info-cat">
          <div className="col-12">
            <h2 style={{ textAlign: "right" }}>
              القوات الخاصة للأمن الدبلوماسي
            </h2>
            <h3 className="col-12" style={{ textAlign: "right" }}>
              <Link to="/Destail">القوات الخاصة للأمن الدبلوماسي تmmmm</Link>
            </h3>
            <div className="destail-wzefa">
              <div className="but-wz">
                <p>قطاع عسكري</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12" id="box-c">
        <div className="img-cat">
          <a href="https://wdeftksa.com/sa/jobs/10169">
            <img src="https://wdeftksa.com/sa/users/images/7385.jpg" />
          </a>
        </div>

        <div className="info-cat">
          <div className="col-12">
            <h2 style={{ textAlign: "right" }}>
              القوات الخاصة للأمن الدبلوماسي
            </h2>
            <h3 className="col-12" style={{ textAlign: "right" }}>
              <a
                style={{ float: "none" }}
                href="https://wdeftksa.com/sa/jobs/10169"
              >
                <span className="place">
                  القوات الخاصة للأمن الدبلوماسي تعلن فتح باب القبول للوظائف
                  العسكرية عبر أبشر للتوظيف
                </span>
              </a>
            </h3>
            <div className="destail-wzefa">
              <div className="nnote">
                <a href="https://wdeftksa.com/sa/category/1">
                  <span className="category">وظائف عسكرية{/*</span*/}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12" id="box-c">
        <div className="img-cat">
          <a href="https://wdeftksa.com/sa/jobs/10169">
            <img src="https://wdeftksa.com/sa/users/images/7385.jpg" />
          </a>
        </div>

        <div className="info-cat">
          <div className="col-12">
            <h2 style={{ textAlign: "right" }}>
              القوات الخاصة للأمن الدبلوماسي
            </h2>
            <h3 className="col-12" style={{ textAlign: "right" }}>
              <a
                style={{ float: "none" }}
                href="https://wdeftksa.com/sa/jobs/10169"
              >
                <span className="place">
                  القوات الخاصة للأمن الدبلوماسي تعلن فتح باب القبول للوظائف
                  العسكرية عبر أبشر للتوظيف
                </span>
              </a>
            </h3>
            <div className="destail-wzefa">
              <div className="nnote">
                <a href="https://wdeftksa.com/sa/category/1">
                  <span className="category">وظائف عسكرية{/*</span*/}</span>
                </a>
              </div>
              {/* <div className="but-wz"><a href="https://wdeftksa.com/sa/jobs/10169">التفاصيل</a></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
