import "./modal.css";
import { Form } from "../form/form";
export const Modal = (props) => {
  return (
    <div className="modal">
        <Form warning={false} />
    </div>
  );
};
