import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
function Destail() {
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Header as="h5">
          <div className="col" id="box">
            <div className="img-job">
              <img src="https://wdeftksa.com/sa/users/images/7385.jpg" />
            </div>
            <div>
              <h5 style={{ textAlign: "right", marginRight: "-3px" }}>
                القوات الخاصة للأمن الدبلوماسي
              </h5>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Form.Text className="text-muted">
            <h6>: الوصف الوظيفي</h6>
            <br />
            <p>
              {" "}
              تعلن ( شركة مراكز الاتصال ) عن توفر وظائف مؤقتة لمدة 4 أشهر للعمل
              في ( الرياض، جدة )، واشترطت ان يكون المتقدم سعودي الجنسية، وذلك
              وفقاً للتفاصيل والشروط الآتية.
            </p>
            <h6>المسمى الوظيفي </h6>
            <p>
              {" "}
              <br /> موظف \ موظفة خدمة رعاية عملاء موظف \ موظفة في قسم حلول
              المشاكل .
            </p>

            <p6> المميزات و الشروط : </p6>
            <p>
              مكان العمل: مدينة الرياض وجدة والدمام ومكة المكرمة
              <br />
              لم يتم ذكر شرط الخبرة المؤهلات المطلوبة : لم يتم التحديد لكن تناسب
              حملة البكالوريوس والدبلوم في التخصصات الإدارية
            </p>
          </Form.Text>

          <Button
            type="submit"
            style={{
              marginRight: "9px",
              color: "#fff",
              backgroundColor: "#00024d",
              borderColor: "#00024d",
            }}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Destail;
