# 청주 클래식 스마트밸리 지장물 조사 안내 페이지

현장 안내 QR 접속용 단일 정적 페이지입니다. GitHub Pages에 배포해 모바일/PC에서 빠르게 안내 및 방문요청(구글폼) 접수를 받을 수 있습니다.

## 파일 구성
- `index.html`: 페이지 구조
- `styles.css`: 가독성 중심 스타일
- `app.js`: 폼 링크 상수, FAQ 아코디언 로직

## GitHub Pages 배포 방법
1. GitHub 저장소에서 **Settings > Pages** 메뉴로 이동합니다.
2. **Build and deployment**에서 **Source**를 `Deploy from a branch`로 선택합니다.
3. 브랜치는 `main`(또는 배포할 브랜치), 폴더는 `/ (root)`를 선택하고 저장합니다.
4. 잠시 후 발급된 Pages URL로 접속해 페이지를 확인합니다.

## 폼 링크 변경 위치
- `app.js` 상단의 `FORM_URL` 상수를 변경하면 상단/하단 방문요청 버튼 링크가 함께 변경됩니다.

## 전화번호 변경 위치
- `index.html`에서 아래 위치의 번호/`tel:` 링크를 함께 수정하세요.
  - 상단 문의 문구 (`contact-top`)
  - 상단 CTA "전화하기" 버튼
  - 하단 푸터 문의 문구
