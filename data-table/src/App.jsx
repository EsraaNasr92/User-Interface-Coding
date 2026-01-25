import { columns } from "./columns";
import { data } from "./data";
import Table from "./Table";

function App() {
  return (
    <>
      <Table data={data} columns={columns}/>
    </>
  )
}

export default App
