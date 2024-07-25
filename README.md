# 2024_web_clone

Create (생성):
- 제품 추가: 장바구니에 제품을 추가. 제품이름, 수량과 포장유무를 포함.

Read (읽기):
- 장바구니 조회: 장바구니에 있는 모든 제품을 조회. 사용자는 현재 장바구니에 어떤 제품들이 있는지 확인할 수 있음.
- 제품 세부 정보 조회: 장바구니에 있는 특정 제품의 상세 정보를 조회. 상품선택 시 상품의 페이지로 넘어감.

Update (수정):
- 제품 수량 수정: 장바구니에 있는 특정 제품의 수량 및 선물포장 유무 수정 가능.

Delete (삭제):
- 장바구니에서 제품 제거: 장바구니에서 특정 제품을 제거.
- 장바구니 비우기: 장바구니를 전체 비움.


디렉토리 및 파일 설명
src/main/java/com/example/cart/: Java 소스 파일들이 위치하는 디렉토리.

- CartApplication.java: Spring Boot 애플리케이션의 진입점.

- controller/: API 엔드포인트를 정의하는 컨트롤러 클래스들이 위치하는 디렉토리.
  - CartItemController.java: CartItem 엔티티에 대한 CRUD API 엔드포인트를 정의.

- entity/: 데이터베이스 테이블과 매핑되는 엔티티 클래스들이 위치하는 디렉토리.
  - CartItem.java: CartItem 엔티티 클래스.

- mapper/: MyBatis 매퍼 인터페이스와 XML 매퍼 파일들이 위치하는 디렉토리.
  - CartItemMapper.java: MyBatis 매퍼 인터페이스.
  - xml/: MyBatis XML 매퍼 파일들이 위치하는 디렉토리.
    - CartItemMapper.xml: CartItem에 대한 SQL 쿼리들을 정의한 XML 파일.

- service/: 비즈니스 로직을 처리하는 서비스 클래스들이 위치하는 디렉토리.
  - CartItemService.java: CartItem 서비스 클래스.

- repository/: 데이터베이스 작업을 처리하는 리포지토리 인터페이스가 위치하는 디렉토리. (MyBatis 사용 시 생략 가능)

src/main/resources/: 애플리케이션 설정 파일들이 위치하는 디렉토리.
- application.properties: Spring Boot 애플리케이션 설정 파일.
- mappers/: MyBatis XML 매퍼 파일들이 위치하는 디렉토리.

src/main/webapp/WEB-INF/: 웹 애플리케이션 설정 파일들이 위치하는 디렉토리. (주로 JSP와 같은 파일들이 사용됨, 여기서는 사용하지 않음)

src/test/java/: 테스트 코드가 위치하는 디렉토리.
- CartApplicationTests.java: 테스트 클래스.

pom.xml: Maven 프로젝트 설정 파일로, 의존성 및 빌드 설정을 정의.
