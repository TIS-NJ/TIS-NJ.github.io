import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Papers from './pages/Papers'
import Students from './pages/Students'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="papers" element={<Papers />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
