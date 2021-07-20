import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "..";

describe("@routes/Home", () => {
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

  it("shuld normalize log table correctly", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Home />
      </Router>
    );

    expect(getByText("Phone number")).toBeInTheDocument();
    expect(getByText("Number of calls")).toBeInTheDocument();
    expect(getByText("Last call details")).toBeInTheDocument();

    expect(getByTestId("divHeader")).toBeInTheDocument();
    expect(getByTestId("divFooter")).toBeInTheDocument();
  });
});
