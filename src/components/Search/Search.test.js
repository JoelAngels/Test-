import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

//lets check if it the component Search Rendered
it("checkSearchRender", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("shootSearch");

  expect(input).toBeTruthy();
});

describe("changeInput", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("shootSearch");
    fireEvent.change(input, { target: { value: "TestValue" } });
    expect(input.value).toBe("TestValue");
  });
});
