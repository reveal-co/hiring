import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("renders table component", () => {
  const screen = render(<Table />);
  expect(screen.container.querySelector('table'));
});
