## JuniorPeachProject cssSmallTalk Week01

이번에는 input을 꾸며보았습니다.

input을 눌렀을 시, 바닥에서 부터 상자가 올라오는 듯한 애니메이션을 구현하였습니다.

자바스크립트 사용여부 : O
-> input 안에 내용이 있을 시 hasInput이라는 className을 넣는데 사용함.

이번에 만들면서 배운 내용들

1. label의 사용 용도

- input 태그를 제어하여 상태값을 변경하도록 돕는다.
- label 태그의 글자를 눌러도 input으로 들어갈 수 있도록.

2. -webkit 관련한 설정들

- 사파리, 크롬 브라우저 렌더링 엔진.
- css3 모듈에서 사용되는 css 문법
  - 웹 브라우저 엔진이 뭔데?
    - 내용을 렌더링하는데 사용되는 웹 브라우저의 일부
    - 렌더링 엔진은 화면에 보여지는 것을 책임지는 부분
    - html, php + css, xsl 을 읽어서 보여준다
    - 브라우저마다 사용하는 렌더링 엔진이 다르다
- webkit-appearance : 요소 자체 구성요소 숨기기

3. css 의사요소

- after
  - 선택한 요소의 맨 마지막 자식으로 의사 요소를 하나 생성.
  - 보통 content 속성과 함께, 마지막에 내용을 추가해 줄 때 사용됨.
- focus
  - 입력 칸 등 포커스를 받은 요소를 나타낸다.
  - 포커스 받았을 때의 css를 지정해줄 수 있다.
- before
  - 선택한 요소의 첫 자식으로 의사 요소를 하나 생성
  - 보통 content 속성과 함께, 처음에 내용을 추가해 줄 때 사용된다.

4. css transform (with perspective, rotate3d)

- transform 속성은 키워드 none 또는 하나 이상의 <transform-function> 값을 사용해 지정할 수 있다.
- perspective : z=0 플레인과 유저의 거리를 생각한다.
- rotate3d : rotate3d(x, y, z, a)
  - x: describing the x-coordinate of the vector denoting the axis of rotation
  - y: describing the y-coordinate of the vector denoting the axis of rotation
  - z: describing the z-coordinate of the vector denoting the axis of rotation
  - a: Is an <angle> representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.
