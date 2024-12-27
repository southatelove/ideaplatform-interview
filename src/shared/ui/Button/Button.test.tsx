import { render, screen } from "@testing-library/react";
import { Button } from "@/shared/index";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
