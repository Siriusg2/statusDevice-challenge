import Table from "./components/Table";

export default function Home() {
  return (
    <main>
      <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Dispositivos</h2>
        <div className="overflow-x-auto">
        <Table/>
      </div>
    </div>
    </main>
  );
}
