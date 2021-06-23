//First you import the function you want to test

import { multiply, makeLowerCase, makeUpperCase } from "./HelpersFunction";

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(7, -2)).toBe(-14);
});

test("lowercase", () => {
  expect(makeLowerCase("COURTNEY")).toBe("courtney");
  expect(makeLowerCase("REVADA")).toBe("revada");
});

test("uppercase", () => {
  expect(makeUpperCase("Joel")).toBe("JOEL");
  expect(makeUpperCase("Angel")).toBe("ANGEL");
});
