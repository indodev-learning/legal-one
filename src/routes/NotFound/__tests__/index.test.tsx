import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "..";

describe("@routes/NotFound", () => {
  it("shuld render 404 page correctly", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );

    expect(getByText("404 Not Found")).toBeInTheDocument();
    expect(getByTestId("divHeader")).toBeInTheDocument();
  });
});
