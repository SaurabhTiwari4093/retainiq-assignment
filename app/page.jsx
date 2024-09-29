import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Table from "./components/table";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <Table />
      </div>
    </div>
  );
}
