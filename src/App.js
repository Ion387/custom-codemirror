import CodeMirrorCustom from "Components/CodeMirrorCustom/CodeMirrorCustom";
import s from "./App.module.css";
import React from "react";
import Header from "Components/Header/Header";
import CodeResult from "Components/CodeResult/CodeResult";

const App = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Header />
      </header>
      <div className={s.codeMirrorCustom}>
      <CodeMirrorCustom />
      </div>
      <div className={s.codeResult}>
        <CodeResult/>
      </div>
    </div>
  );
};

export default App;
