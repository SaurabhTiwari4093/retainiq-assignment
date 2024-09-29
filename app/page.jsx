import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Table from "./components/table";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="p-4 pl-20 w-full">
        <Header />
        <Table />
      </div>
    </>
  );
}
