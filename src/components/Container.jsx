import React, { useState } from "react";
import data from "./data.json";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";
import star from "./assets/images/icon-star.svg";
const Container = () => {
  function handleClick() {
    setButtonState(!buttonState);
  }

  const [buttonState, setButtonState] = useState(false);
  const qna = data.map((item) => {
    return (
      <div className="qna">
        <div className="q" onClick={handleClick}>
          <p className="question">{item.question}</p>

          <img src={buttonState ? minus : plus} className="button" alt="btn" />
        </div>
        {buttonState && <p className="answer">{item.answer}</p>}

        <hr />
      </div>
    );
  });
  return (
    <section>
      <img src={star} alt="star" />
      <h1>FAQs</h1>
      {qna}
    </section>
  );
};

export default Container;
