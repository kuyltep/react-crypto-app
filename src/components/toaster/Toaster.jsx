import { toast } from "react-toastify";
const Toaster = (textProps, toastProps, type) => {
  const Msg = ({ title, text }) => {
    return (
      <div className="msg-container">
        <p className="msg-title">{title}</p>
        <p className="msg-description">{text}</p>
      </div>
    );
  };
  return toast[type ?? "info"](<Msg {...textProps} />, { ...toastProps });
};
export default Toaster;
