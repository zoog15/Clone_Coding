### JSX란?

- A syntax extension to JavaScript(자바스크립트 확장문법)

```jsx
const element = <h1>Hello, world!</h1>
```



### 역할

- jsx를 사용

```jsx
class Hello extends Reacct.Component {
	render() {
		return <div>Hello {this.props.toWhat}</div>;
	}
}

ReactDOM.render(
	<Hello toWhat="World" />,
	document.getElementById('root')
)
```

- js만 사용

```jsx
class Hello enxtends React.Component {
	render() {
		return React.createElement('div', null, 'Hello ${this.props.toWhat}');
	}
}

ReactDOM.render(
	React.createElement(Hello, { toWhat: 'World' }, null),
	document.getElementById('root')
)
```



### createElement

```
React.createElement(
	type, 			-- div, span같은 html 혹은 react component
	[props], 		-- 속성
    [...children]	-- 현재 element가 포함하고있는 자식 element
)
```



- JSX를 꼭 사용할 필요는 없지만 간결하게 작성할수있기 때문에 생산성이 높아 좋음

- 가독성 향상
- Injection Attacks 방어



### JSX 사용법

- JavaScript 코드 + XML/HTML

  ```jsx
  functino formatName(user) {
  	return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
  	firstName: 'Inje',
  	lastName: 'Lee'
  };
  
  const element = (
  	<h1>
  		Hello, {formatUser(user)} // 함수호출
  	</h1>
  );
  
  ReactDOM.render(
  	element,
  	document.getElementById('root')
  )
  ```

- 태그의 속성에 값을 넣는 법

  ```jsx
  // 큰따옴표 사이 문자열에 넣기
  const element = <div tabIndex="0"></div>;
  
  // 중괄호 사이에 자바스크립트 코드 넣기
  const element = <img src={user.avatarUrl}></img>
  ```

  