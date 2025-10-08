import useToggle from "./useToggle";

const ToggleExample = () => {
  //   const [isVisible, toggleVisible] = useToggle(false);
  const { isVisible, toggleVisible } = useToggle(false);
  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? "hidde " : "show"}</button>
      {isVisible && <p>hello i am visible</p>}
    </div>
  );
};
export default ToggleExample;
