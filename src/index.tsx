import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const App: FC = () => {
  return (
    <div>
      <h1>Howdy doo - this is the start of me resume!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
