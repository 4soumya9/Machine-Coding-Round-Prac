import "../../index.css";

const AccordionItem = ({ onClick, isOpen, content, title }) => {
  return (
    <div className="accordion_item">
      <button onClick={onClick} className="title">
        {title}
        <span className="accordion_icon">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && <div className="content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
