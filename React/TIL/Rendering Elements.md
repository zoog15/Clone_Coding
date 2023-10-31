### Elements란?

- 어떤 물체를 구성하는 성분
- 리액트 앱을 구성하는 가장 작은 블록들
- 리액트 Elements는 자바스크립트 객체 형태로 존재

```jsx
// 자바 객체 형태
{
	type: 'button',
	props: {
		className: 'bg-green',
		children: {
			type: 'b',
			props: {
				children: 'Hello, element!'
			}
		}
	}
}

-> 렌더링하면
<button class='bg-green'>
	<b>
		Hello, element!
	</b>
</button>

// react의 component element
{
    type: Button,
    props: {
        color: 'green',
        children: 'Hello, element!'
    }
}
```

```jsx
function Button(props) {
	return (
		<button className={`bg-${props.color}`}>
			<b>
				{props.children}
			</b>
		</button>
	)
}

function ConfirmDialog(props) {
	return (
		<div>
			<p> 내용을 확인하셨으면 확인 버튼을 눌러주세요. </p>
			<Button color='green'>확인</Button>
		</div>
	)
}
```



- React elements는 immutable
- Elements 생성후에는 children이나 attributes를 바꿀 수 없음



- Root DOM Node

  ```jsx
  <div id="root"></div>
  ```

  ```
  const element = <h1>안녕, 리액트!</h1>;							// element생성
  ReactDOM.render(element, document.getElementById('root'));	   // DOM Element에 render
  ```

  

### element 업데이트하기

```
function tick() {
	const element = (
		<div>
			<h1>안녕, 리액트!</h1>
			<h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
		</div>
	);
	
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

