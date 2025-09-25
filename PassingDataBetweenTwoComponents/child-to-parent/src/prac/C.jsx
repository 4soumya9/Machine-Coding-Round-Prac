const C = ({ sendData }) => { // this function name should be same as name passed in the Parent Component
  return (
    <div>
      <button onClick={() => sendData("Hello From child")}>Send Data</button>
    </div>
  );
};

export default C;
