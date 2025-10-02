import './App.css';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🐾 Perros Aleatorios 🐶</h1>
      </header>

      <main className="app-main">
        <Dogs />
      </main>

      <footer className="app-footer">
        <p>Desarrollado con 🐶 y ❤️</p>
      </footer>
    </div>
  );
}

export default App;
