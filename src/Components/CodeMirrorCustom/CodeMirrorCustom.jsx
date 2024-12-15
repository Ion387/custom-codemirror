import s from "./CodeMirrorCustom.module.css";
import { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { go } from "@codemirror/lang-go";
import { python } from "@codemirror/lang-python";
import { useDispatch, useSelector } from "react-redux";
import { setValueGo, setValuePython } from "../../Redux/codemirrorReducer";

const CodeMirrorCustom = (props) => {
  const dispatch = useDispatch();
  let { chosenLang, valueGo, valuePython } = useSelector((state) => state.CM);
  const [value, setValue] = useState("");
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    switch (true) {
      case chosenLang === "go":
        setExtensions([go({ jsx: true })]);
        setValue(valueGo);
        break;
      case chosenLang === "python":
        setExtensions([python({ jsx: true })]);
        setValue(valuePython);
        break;
      default:
        break;
    }
  }, [chosenLang]);

  const onChange = (value) => {
    switch (true) {
      case chosenLang === "go":
        dispatch(setValueGo(value));
        setValue(value);
        break;
      case chosenLang === "python":
        dispatch(setValuePython(value));
        setValue(value);
      default:
        break;
    }
  };

  return (
    <div className={s.main}>
      <div className={s.codeMirror_header}>
        <div className={s.chosenLang}>{chosenLang}</div>
      </div>
      <div className={s.codeMirror_window}>
        <CodeMirror
          value={value}
          height="300px"
          extensions={extensions}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CodeMirrorCustom;
