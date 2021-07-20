import { render } from "@testing-library/react";
import App from "../App";

describe("render app legal one", () => {
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

  it("sould remder app correctly", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
