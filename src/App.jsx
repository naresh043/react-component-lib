import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar/ProgressBar";
import Pagination from "./components/Pagination/Pagination";
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = ({ current }) => {
    setCurrentPage(current);
  };

  return (
    <div style={{ padding: "40px" }}>
      <Pagination
        totalItems={43}
        perPage={7}
        current={currentPage}
        onChange={handlePageChange}
      />

      <p>Current Page: {currentPage}</p>
      <div style={{ padding: "16px", width: "100px" }}>
        <ProgressBar value={70} visibility={true} />
      </div>
      <Button variant="danger">Hello </Button>
      <Input placeholder="Enter ur Name" />
    </div>
  );
}

export default App;
