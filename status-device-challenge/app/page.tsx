import Table from "./components/Table";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <main>
      <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Dispositivos</h2>
        <div>
          <Filters />
        </div>
        <div className="overflow-x-auto mt-4">
          <Table />
        </div>
      </div>
    </main>
  );
}
