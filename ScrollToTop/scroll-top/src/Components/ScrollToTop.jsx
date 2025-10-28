import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handlescroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return () => removeEventListener("scroll", handlescroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <div>
      <div>
        <h2>Back To Top</h2>
        {[...Array(40)].map((_, i) => (
          <p key={i}>This is a paragraph{i + 1}</p>
        ))}
      </div>
      <div>
        {isVisible ? <button onClick={scrollTop}> back to top</button> : ""}
      </div>
    </div>
  );
};

export default ScrollToTop;
