### Input Values

```html
    <div id="login-form">
        <input type="text" placeholder="What is your name?" /">
        <button>Log in</button>
    </div>
```

- text를 입력하는 input과 Log in 버튼 생성

```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
```

- document 는 html의 body부분
- id가 login-form인(#login-form) 버튼(button)을 찾아와서 저장
- 클릭이벤트로 loginInput안의 value(입력값)을 출력
- 아무것도 입력되지 않앗을때를 대비해 유효성검사(validate) 필요



### Form Submission

```html
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?" /">
        <button>Log in</button>
    </form>
```

- js에서 if ~ else if ~ else 문을 통해 유효성 검사를 할수 있지만 htlm에서도 바로 가능
- form태그 안의 input태그의 속성으로 required(필수 입력), maxlength(최대길이 제한) 입력
- form의 button은 입력시 submit과 함께 페이지가 새로고침됨



### Events

```
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- preventDefault()가 이벤트의 기본동작을 막아줌(새로고침, 페이지 이동 등)
- addEventListener에 첫번쨰 인자(tomato)에는 현재 페이지에 대한 여러 정보들이 담겨져 나옴
- eventListener의 실행은 browser가 해주는것



### Getting Username

```html
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?" /">
        <button>Log in</button>
    </form>
    <h1 id="greeting" class="hidden"></h1>
```

```javascript
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);

  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; // `` 백틱 사용
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

```css
.hidden {
  display: none;
}
```

- form에 입력된 username을 submit하면 form은 hidden 처리되고 h1의 hidden은 제거



### Saving Username

```javascript
localStorage.setItem("NameOfItem", value)
localStorage.getItem("name")
localStorage.removeItem("name")
```

- browser에 localStorage라는 DB와 그에관련된 기능이 구현돼있음



### Loading Username

```javascript
if (savedUsername == null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
```

- localStorage에 입력된 값을 저장, 만약 localStorage가 비어있으면 form이 나오고 아니면 인삿말이 나옴
