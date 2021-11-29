import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sidebar title", () => {
  render(<App />);
  const sidebarTitle = screen.getByText(/cities app/i);
  expect(sidebarTitle).toBeInTheDocument();
});
