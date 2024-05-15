import ReactLoading from "react-loading";
const Loading = ({ type, color }) => {
  return (
    <ReactLoading type={type} color={color} height={"80px"} width={"80px"} />
  );
};
export default Loading;
