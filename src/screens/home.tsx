import { Banner } from "../components/banner";
import { List } from "../components/list";

export function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />

      <div className="flex w-full justify-center" style={{marginTop: '-4rem'}}>
        <List />
      </div>
    </div>
  );
}
