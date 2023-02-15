import './App.css';
import { Home } from './screens/home';
import './lib/themes.js';

function App() {
  const initialTask = { name: "Example task", checked: false };

  return (
    <div className="App dark:bg-zinc-900 bg-slate-50 min-h-screen transition-all duration-500">
      <Home name={initialTask.name} checked={initialTask.checked} />
    </div>
  );
}

export default App;