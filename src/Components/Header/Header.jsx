import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.css";
import { choseLang } from "../../Redux/codemirrorReducer";
const Header = () => {
  const dispatch = useDispatch();
  const { chosenLang } = useSelector((state) => state.CM);
  const onChangeLang = (e) => {
    dispatch(choseLang(e.target.value));
  };
  return (
    <div className={s.main}>
      <h1>Простой онлайн редактор кода</h1>
      <div className={s.description}>
        Выберите язык из предложенных, напишите код и отправьте на сервер.
      </div>
      <div className={s.choseLanguage_block}>
        <div className={s.choseLanguage_title}>Выберите язык</div>
        <select onChange={onChangeLang} value={chosenLang}>
          <option value="go">go</option>
          <option value="python">python</option>
        </select>
      </div>
    </div>
  );
};
export default Header;
