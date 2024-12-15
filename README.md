### Данное приложение позволяет писать код online на языках go и python в редакторе кода Code Mirrow и сохранять его на сервер.

### Локальный запуск приложения.
npm install
npm start
### По умолчанию приложение запустится на порту http://localhost:3000. Вы можете выбрать другой порт.

### В приложении возможно увеличить количество используемых языков программирования. Для этого необходимо:
### 1 Установите библиотеку нужного языка для Code Mirror (полный список библиотек ищите на официальном сайте https://codemirror.net/): 
- @codemirror/lang-cpp
- @codemirror/lang-html
- @codemirror/lang-java
- @codemirror/lang-javascript
- @codemirror/lang-json
- @codemirror/lang-lezer
- @codemirror/lang-markdown
- @codemirror/lang-php
- @codemirror/lang-python
- @codemirror/lang-rust
- @codemirror/lang-sql
- @codemirror/lang-xml
- @codemirror/lang-less
- @codemirror/lang-sass
- @nextjournal/lang-clojure
- @replit/codemirror-lang-csharp
### пример:

npm @codemirror/lang-html

### 2 Добавьте ключ в value*lang* в initialState, action creator и action в reducer.
### Redux/codemirrorReducer.js
```
const initialState = {
  chosenLang: "go",
  valueJava: "",
  valueGo: "",
  runCode: "",
};
```

```
export const setValueJava = (data) => {
  return {
    type: "setValueJava",
    data,
  };
};
```

```
case "setValueJava":
  return {
   ...state,
     valueJava: action.data,
      };
```
### 3 Добавьте выбор языка.
### Components/Header/Header.jsx

```
<select onChange={onChangeLang} value={chosenLang}>
 <option value="java">java</option>
</select>
```

### 4 Добавьте настройку языка и сохранение в глобальном state при вводе в поле code mirror.
### Components/CodeMirrorCustom/CodeMirrorCustom.jsx
```
useEffect(() => {
    switch (true) {
      case chosenLang === "java":
        setExtensions([java({ jsx: true })]);
        setValue(valueJava);
        break;
      default:
        break;
    }
```

```
const onChange = (value) => {
    switch (true) {
      case chosenLang === "java":
        dispatch(setValueJava(value));
        setValue(value);
        break;
      default:
        break;
```

