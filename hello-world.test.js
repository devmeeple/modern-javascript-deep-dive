const hello = require("./hello-world");

describe("hello-world", () => {
  it('콘솔로그를 통해 "Hello world 를 출력한다."', () => {
     console.log = jest.fn();

     hello();

    expect(console.log).toHaveBeenCalledWith("Hello world");
  });
});