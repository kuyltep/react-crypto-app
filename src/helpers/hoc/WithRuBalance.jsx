export const WithRuBalance = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { balance } = props;
    const ruBalance = balance * 100;
    return <Component {...props} ruBalance={ruBalance} />;
  };
};
