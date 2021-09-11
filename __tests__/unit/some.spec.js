require("../../src/helpers/some");

it('shold show a+b', () => {
  const res = returnSome(2,2);

  expect(res).toEqual(4);
});