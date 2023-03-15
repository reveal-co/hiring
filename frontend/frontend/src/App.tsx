import React from "react";
import "./App.css";
import { Table } from "./components/Table";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(
    null
  );
  const handleSelect = (name: string | null) => () => {
    setSelectedCountry(name);
  };

  return (
    <div className="App">
      <Sidebar selectedCountry={selectedCountry} handleSelect={handleSelect} />
      <Table country={selectedCountry} />
    </div>
  );
}

export default App;
