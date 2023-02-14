import './App.css';
import { Home } from './screens/home';
import './lib/themes.js';

function App() {

  return (
    <div className="App dark:bg-zinc-900 bg-slate-50 min-h-screen transition-all duration-500">
      <Home/>
    </div>
  );
}

export default App;
