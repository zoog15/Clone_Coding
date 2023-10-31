### Conditional Rendering

- 조건을 의미 -> 즉 조건에 따른 렌더링, 조건부 렌더링

  ```jsx
  function Greeting(props) {
  	const isLoggedIn = props.isLoggedIn;
  	
  	if (isLoggedIn) {
  		return <UserGreeting />;
  	}
  	return <GuestGreeting />;
  }
  ```

  

### 자바스크립트의 Truthy, Falsy

- Truthy : True는 아니지만 True로 여겨짐. Falsy는 이 반대
  - true, {}, [], not zero num. "0", "false"(not empty string)
- Falsy
  - false, zero, minus zero
  - On(BigInt Zero)
  - ' ', "", `` (empty string)
  - null
  - undefined, NaN



### Inline Condition

- 조건문 안에 코드 집어넣는것
- If문의 경우 && 연산자 사용
- null을 return하면 렌더링되지 않음

