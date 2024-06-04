import Table from './components/Table';
import Filters from './components/Filters';

export default function Home() {
  return (
    <main>
      <div className="p-4 bg-gray-900 rounded-lg shadow-lg mt-12">
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
