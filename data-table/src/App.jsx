import { useState } from 'react';
import Table from './Table';

export default function App() {

  const totalRow = 36;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  return (
    <div>
      <Table />
      <form>
        <select>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </form>
      <button>Prev</button>
      page {currentPage} of {}
      <button>Next</button>
    </div>
  );
}
