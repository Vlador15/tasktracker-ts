import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import NotFound from './pages/NotFound';
import TaskTracker from './pages/TaskTracker';
import './styles/App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* <Route index element={<TaskTracker />} />  */}
                <Route path="tracker" element={<TaskTracker />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
