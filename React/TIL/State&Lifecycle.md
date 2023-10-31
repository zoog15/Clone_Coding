### State

- 리액트 Component의 상태 -> React Component의 변경 가능한 data
- state는 개발자가 직접 지정
- 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함

- state는 JS 객체
- 클래스 Component는 생성자 통하여 State 정의

```jsx
class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			liked: false;
		};
	}
	
	...
}
```



### LifeCycle

- Mounting -> Updating -> Unmounting