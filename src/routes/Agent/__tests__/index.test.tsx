import { render, wait } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Agent from "..";

describe("@routes/Agent", () => {
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

  it("shuld render log table correctly", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Agent />
      </Router>
    );

    expect(getByText("Phone number")).toBeInTheDocument();
    expect(getByText("Call date and time")).toBeInTheDocument();
    expect(getByText("Resolution")).toBeInTheDocument();

    expect(getByTestId("divHeader")).toBeInTheDocument();
    expect(getByTestId("divFooter")).toBeInTheDocument();
  });
});
