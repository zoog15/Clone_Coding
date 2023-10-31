### Props

- Property
- React Component의 속성을 뜻함

- 컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체
- 모든 리액트 컴포넌트는 Props를 직접 바꿀수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄 것



### Props 사용법

```jsx
function App(props) {
	return (
		<Profile
			name="소플"
			introduction="안녕하세요, 소플입니다."
			viewCount={1500}
		/>
	);
}

function App(props) {
	return (
		<Layout
			width={2560}
			height={1440}
			header= {
				<Header title="소플의 블로그입니다." />
			}
			footer= {
				<Footer />
			}
	);
}
```



### Component 만들기

- Function Component

  ```
  function Welcome(props) {
  	return <h1>안녕, {props.name}</h1>
  }
  ```

- Class Component

  ```
  class Welcome extends React.Component {
  	render() {
  		return <h1>안녕, {this.props.name}</h1>
  	}
  }
  ```

  

### Component 합성

- Component안에 Component 사용 가능

```jsx
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>
}

function App(props) {
	return (
		<div>
			<Welcome name="Mike" />
			<Welcome name="Steve" />
			<Welcome name="Jane" />
		</div>
	)
}

ReactDOM.render(
	<App />
	document.getElementById('root')
)
```

- 재사용 가능한 Component가 많을수록 개발속도가 빨라짐