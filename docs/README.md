# 기능 구현 목록 

## 기능 구현 목록 정리

### 기능 요구사항
 - [x] 1개의 로또는 6개의 번호로 구성되어 있다.
 - [x] 당첨 번호는 6개의 번호로 구성되엉 있다.
 - [x] 당첨 번호와 로또 번호의 숫자범위는 1~45이다.
 - [x] 1개의 로또에서 번호는 중복되지 않아야한다.
 - [x] 당첨 번호는 중복되지 않아야한다.
 - [x] 당첨 번호는 쉼표(,)를 기준으로 나뉜다.
 - [x] 로또 번호는 오름차순으로 정렬한다.
 - [x] 보너스 번호는 1개의 번호로 당첨 번호와는 중복되지 않아야한다.
 - [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - [x]1등: 6개 번호 일치 / 2,000,000,000원
    - [x]2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - [x]3등: 5개 번호 일치 / 1,500,000원
    - [x]4등: 4개 번호 일치 / 50,000원
    - [x]5등: 3개 번호 일치 / 5,000원
 - [x] 로또 구입금액을 입력할 때 1000원 단위로 입력해야 한다.
 - [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
   -[x] 수익률은 소수점 둘째 자리에서 반올림한다.
 -[x] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

 