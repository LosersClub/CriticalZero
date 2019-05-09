import { something } from "../src/main";

describe("something test", () => {
  test("something", ()=> {
    expect(something("Test")).toEqual("TestTest");
  });
});