import { render } from "@testing-library/react";
import { Table, TableContent } from "./Table";

test("renders table component", () => {
  const screen = render(<Table />);
  expect(screen.container.querySelector('table'));
});

test("renders table component", () => {
  const testProps = [
    {
      "country": "Andorra",
      "geonameid": 3040051,
      "name": "les Escaldes",
      "subcountry": "Escaldes-Engordany"
    },
    {
      "country": "United Arab Emirates",
      "geonameid": 290594,
      "name": "Umm al Qaywayn",
      "subcountry": "Umm al Qaywayn"
    }
  ];

  const screen = render(<TableContent data={testProps} />);
  const rows = screen.container.querySelectorAll('tr');
  expect(rows).toHaveLength(3);
});
