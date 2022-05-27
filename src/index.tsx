import React, { FC } from "react";
import ReactDOM from "react-dom";
import { SiteCtxManager } from "../components/site-context";
import { Pages } from "../components/pages";
import "./styles.scss";

const App: FC = () => {
  return (
    <SiteCtxManager>
      <Pages />
    </SiteCtxManager>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
