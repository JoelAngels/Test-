import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

//when testing whole component we use it
//here we are testing to see if the Button rendered
it("checkButtonRender", () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle("shootFunction");

  expect(btn).toBeTruthy();
});

//now lets test to see what happens when you click the button

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("shootFunction");
    expect(btn.innerHTML).toBe("Press Here");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked");
  });
});
