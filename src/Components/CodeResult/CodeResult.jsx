import { useDispatch, useSelector } from "react-redux";
import s from "./CodeResult.module.css";
import React, { useState } from "react";
import { runCodeTC } from "../../Redux/codemirrorReducer";

const CodeResult = (props) => {
  const { chosenLang, valueGo, valuePython, runCode } = useSelector(
    (state) => state.CM
  );
const [isVoidCode, setIsVoidCode] = useState(false)
  const { isLoading, error } = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  const onRunHandler = () => {
    switch (true) {
      case chosenLang === "go":
        if (valueGo){
          setIsVoidCode(false)
        dispatch(runCodeTC(chosenLang, valueGo));
        break;}
        else 
        setIsVoidCode(true)
        break;
      case chosenLang === "python":
        if (valuePython){
          setIsVoidCode(false)
          dispatch(runCodeTC(chosenLang, valuePython));
          break;}
          else setIsVoidCode(true);
          break;
      default:
        break;
    }
  };

  return (
    <div className={s.main}>
      <div className={s.runCode_block}>
      <div>Запустите код</div>
      <button onClick={onRunHandler} disabled={isLoading}>
        Run
      </button>
      </div>
      <div className={s.resultWindow}>
        {runCode.data && (
          <>
            <div className={s.title}>Код выполнен успешно</div> <br />{" "}
            <div className={s.runCode_text}>
            {runCode.data}
            </div>
          </>
        )}
        {isVoidCode &&
          <>
          <div className={s.title}>Поле кода пустое</div> <br />{" "}
        </>
        
        }
        {error && (
          <>
            <div className={s.title}>Ошибка выполнения</div> <br /> <div className={s.error}>{error}</div>
          </>
        )}

      </div>
    </div>
  );
};

export default CodeResult;
