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

<br><br>

## 디렉토리 및 파일 설명

### `config`
- **`MyBatisConfig`**: MyBatis 설정을 담당하는 클래스. 데이터 소스와 MyBatis의 매퍼 파일을 설정.
- **`WebConfig`**: CORS 설정을 포함한 웹 설정을 담당하는 클래스.

### `controller`
- **`CartController`**: RESTful API 엔드포인트를 정의하는 클래스. HTTP 요청을 처리하고 서비스 계층과 상호작용.

### `domain`
- **`Product`**: 데이터베이스 테이블과 매핑되는 도메인 객체. `Product` 객체는 `id`, `name`, `quantity`, `giftWrap`, `image` 필드를 가짐.

### `dto`
- **`ProductDto`**: 데이터 전송 객체(Data Transfer Object). 주로 컨트롤러와 서비스 계층 간의 데이터 교환에 사용.

### `mapper`
- **`ProductMapper`**: MyBatis 매퍼 인터페이스. SQL 쿼리를 Java 메소드로 매핑. 메소드들은 `ProductMapper.xml` 파일에서 정의된 SQL 쿼리를 호출.

### `service`
- **`ProductService`**: 서비스 계층 인터페이스. 비즈니스 로직을 정의.
- **`impl/ProductServiceImpl`**: `ProductService` 인터페이스의 구현 클래스. 실제 비즈니스 로직을 구현하고 데이터 접근 계층(매퍼)을 호출.

### `CartApplication`
- 스프링 부트 애플리케이션의 진입점(Entry Point). `main` 메소드를 통해 애플리케이션을 시작.

### `resources`
리소스 파일들이 포함된 디렉토리.

#### `mapper/ProductMapper.xml`
- MyBatis 매퍼 XML 파일. SQL 쿼리를 정의하고 매핑을 설정.

#### `application.properties`
- 애플리케이션 설정 파일. 데이터베이스 연결 설정, MyBatis 설정, 서버 포트 등의 설정을 포함.

### `test`
테스트 코드를 포함하는 디렉토리.

#### `java/com.cart.cart/CartApplicationTests`
- JUnit을 사용한 단위 테스트 클래스. 애플리케이션의 기능을 테스트.
