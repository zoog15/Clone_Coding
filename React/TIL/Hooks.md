### FunctionComponent vs ClassComponent

1. Function Component
   - state 사용 불가
   - Lifecycle에 따른 기능 구현 불가
2. Class Component
   - 생성자에서 state를 정의
   - setState() 함수 통해 state 업데이트
   - Lifecycle methods 제공



### useState()

- state를 사용하기 위한 Hook

```jsx
import React, { useState } from "react";

function Counter(props) {
	var count = 0;
	
	return (
		<div>
			<p> 총 {count}번 클릭했습니다. </p>
			<button onClick={() => count++}>
				클릭
			</button>
		</div>
	);
}
```

- 위 함수에서는 state변경(재 rendering)이 일어나지 않아 변화한 카운트값이 화면에 반영되지 않음

- useState() 사용범

  ```jsx
  const [변수명, set함수명] = useState(초기값);
  ```

```jsx
import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	
	return (
		<div>
			<p> 총 {count}번 클릭했습니다. </p>
			<button onClick={() => setCount(count + 1)}>
				클릭
			</button>
		</div>
	);
}
```



### useEffect()

- Side Effect를 사용하기 위한 hook

- 생명주기 함수의 통합기능을 제공

```
useEffect(이펙트 함수, 의존성 배열);
```

- Effect function이 mount, unmount 시에 단 한번씩만 실행되게 하기

  ```
  useEffect(이펙트 함수. []);
  ```

- 의존성 배열을 아예 생략하면 Component가 업데이트 될때마다 호출됨

```
import React, { useState } from "react";

function Counter(props) {
	const [count, setCount] = useState(0);
	
	// componentDidMount, componentDidUpdate와 비슷하게 작동
	useEffect(() => {
		// 브라우저 API를 사용해 document의 title을 업데이트
		document.title = 'You clicked ${count} times';
	});
	
	return (
		<div>
			<p> 총 {count}번 클릭했습니다. </p>
			<button onClick={() => setCount(count + 1)}>
				클릭
			</button>
		</div>
	);
}
```

```
useEffect(() => {
	// 컴포넌트가 마운트 된 이후,
	// 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
	// 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한번씩만 실행
	// 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행
	...
	
	return () => {
		// 컴포넌트가 unmount 되기 전에 실행
	}
}, [의존성 변수1, 의존성 변수2, ...]);
```



### useMemo()

- Memoized value를 리턴하는 Hook

```
const memoizedValue = useMemo (
	() => {
		// 연산량이 높은 작업을 수행하여 결과를 반환
		return computeExpensiveValue(의존성 변수1, 의존성 변수2);
	},
	[의존성 변수1, 의존성 변수2]
);
```

- 의존성 배열을 넣지 않으면 매 렌더링마다 함수가 실행 됨
- 의존성 배열에 빈 배열이면 컴포넌트 마운트 시에만 호출 됨



### useCallBack()

- useMemo() Hook과 유사하지만 값이 아닌 함수를 반환

```
const memoizedCallback = useCallback(
	() => {
		doSomething(의존성 변수1, 의존성 변수2);
	},
	[의존성 변수1, 의존성 변수2]
);
```



### useRef()

- Reference를 사용하기 위한 Hook
- Reference 는 특정 컴포넌트에 접근할 수 있는 객체

```
const refContainer = useRef(초깃값);
```



### Hook의 규칙

- Hook은 무조건 최상위 레벨에서만 호출할 것
- Hook은 컴포넌트 렌더링마다 매번 같은 순서로 호출되어야 함
- 리액트 함수 컴포넌트에서만 Hook을 호출할 것