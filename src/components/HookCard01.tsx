import React, { useState } from "react";

const Hook = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <p>
                        <p>Das 08:00h às 12:00h</p>
                        <p>Das 13:12h às 18:00h</p>   
                    </p>}
      <button className="btn-secondary" onClick={() => setShowText(!showText)}>
        {showText ? "Esconder" : "Horários"}
      </button>
    </div>
  );
};

export default Hook;
