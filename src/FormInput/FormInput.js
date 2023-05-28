import CustomInput from "../components/input";
import RadioInput from "../components/InputRadio";
import Button from "../components/button";
import "./Form.css";

const dataRadio = [{ label: "Male" }, { label: "Female" }];
function FormS() {
  return (
    <div className="form__register">
      <span className="register__title">Register Information</span>
      <hr />
      <form className="form">
        <CustomInput
          title="Họ"
          className="form__input--first-name"
          type="text"
          placeholder="First Name"
        />
        <CustomInput
          title="Tên"
          className="form__input--last-name"
          type="text"
          placeholder="First Name"
        />
        <RadioInput title="Giới tính" dataRadio={dataRadio} name="Sex" />
        <Button type="submit" nameBtn="Register" />
      </form>
    </div>
  );
}

export default FormS;
