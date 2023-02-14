import { Banner } from "../components/banner";
import { List } from "../components/list";

export function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />

      <div className="flex w-full justify-center" style={{ marginTop: '-4rem' }}>
        <List />
      </div>
      <p className="text-center text-gray-700 dark:text-gray-400 transition-all duration-150">Drag and drop to reorder list</p>
    </div>
  );
}
