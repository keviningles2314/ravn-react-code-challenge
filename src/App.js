import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { TasksProvider } from './TasksContext';
function App() {
  return (
    <TasksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </TasksProvider>
  );
}

export default App;
