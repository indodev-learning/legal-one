import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Call from "..";

describe("@routes/Call", () => {
  beforeAll(() => {
    global.matchMedia =
      global.matchMedia ||
      function () {
        return {
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      };
  });

  afterAll(() => {
    global.matchMedia = jest.fn();
  });

  it("shuld render call table correctly", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Call />
      </Router>
    );

    expect(getByText("Agent Name")).toBeInTheDocument();
    expect(getByText("Call date and time")).toBeInTheDocument();
    expect(getByText("Resolution")).toBeInTheDocument();

    expect(getByTestId("divHeader")).toBeInTheDocument();
    expect(getByTestId("divFooter")).toBeInTheDocument();
  });
});
