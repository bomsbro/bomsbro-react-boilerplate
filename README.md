본 저장소는 SuperApp Board 에 대한 저장소 입니다.

## 사용 방법

1. 본 저장소를 clone한다.

2. rm -rf node_modules && yarn cache clean && yarn을 실행하여 package install을 한다.

3. yarn 및 yarn start 명령어를 실행하고, 실행이 끝나면 localhost:3000 에서 화면을 확인한다.

NOTE: 해당 사용 방법은 추후 개발 상황에 따라 변경할 수 있다.

## 주의 사항

MUI(Material-UI) 혹은 styled-components 라이브러리를 사용하고자 한다면 반드시 사내 패키지인 @wapl/ui을 활용해야 하며, 해당 라이브러리를 직접 설치해서는 안 된다.

- 올바른 예시

```
import { Mui, styled } from '@wapl/ui'
...
<Mui.Button>버튼</Mui.Button>
const Wrapper = styled.div`...`
...
```

- 잘못된 예시

```
import Button from '@mui/material/Button'
import styled from 'styled-components'
...
<Button>버튼</Button>
const Wrapper = styled.div`...`
...
```

## 모바일 기기 테스트

1. 동일한 WIFI를 활용하여 PC와 모바일 환경에 접속한다.

2. wapl-root > src > index.ejs 파일에서 @wapl/root와 @wapl/wapl-platform의 주소를 localhost에서 개발 환경 IP 주소로 변경한다. 단, 해당 변경사항은 테스트에만 활용하고 커밋하지 않는다.

- 예시: IP 주소가 192.168.0.1일 경우

```
"imports": {
  "@wapl/root": "http://192.168.0.1:9000/wapl-root.js",
  "@wapl/wapl-platform": "http://192.168.0.1:9001/wapl-platform.js",
  ...
}
```
3. PC에서 yarn start:mobile 명령어를 활용하여 webpack-dev-server를 실행한다.

4. 모바일 기기에서 같은 IP(ex. 192.168.0.1:9000)로 접속하여 화면을 확인한다.