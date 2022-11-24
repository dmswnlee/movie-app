# movie-app
> 

* 리액트라우터를 이용한 무비앱 구현
* 기존 프로젝트에서 react hook을 활용한 코드로 재정비
* propTypes을 이용해 예상치 못한 오류 방지 
* useParams을 이용해 파라미터 정보 활용
* CSS 모듈화

## Movie-Homepage
<img src='https://github.com/dmswnlee/movie-app/blob/main/src/img/01.PNG?raw=true' alt='home' />

## Movie-DetailPage
<img src='https://github.com/dmswnlee/movie-app/blob/main/src/img/02.PNG?raw=true' alt='detailPage' />

## Movie-AboutPage
<img src='https://github.com/dmswnlee/movie-app/blob/main/src/img/03.PNG?raw=true' alt='aboutPage' />

___

### 오류 
* useParam을 이용해 파라미터를 활용했지만 상세페이지 내용이 나오지 않음
* TypeError: Cannot read property 'map' of undefined 라는 실행에러가 생김 
* yarn run deploy로 배포하였으나 페이지가 나오지않는 오류가 생김
<br />

### 해결
* 데이터를 받아오지 않아 생긴 오류로 useState로 다시 data를 받아와서 업데이트 해줌
* 데이터가 undefined로 정의되어 나타난 오류 &&을 사용해 뒤에 있는 map이 실행될 수 있도록 해줌
* BrowserRouter 부분에 basename={process.env.PUBLIC_URL}를 추가해서 재배포




