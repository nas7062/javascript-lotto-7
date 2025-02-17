import Lotto from "../src/Model/Lotto.js"

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호의 개수가 6개보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });
  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호가 1부터 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호중에 빈칸이 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, , 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });
  test("로또 번호중에 숫자가 아닌 번호가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, , 3, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });
  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
