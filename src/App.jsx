import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Members from './pages/Members'
import Papers from './pages/Papers'
import Students from './pages/Students'
import Recruitment from './pages/Recruitment'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="papers" element={<Papers />} />
          <Route path="students" element={<Students />} />
          <Route path="recruitment" element={<Recruitment />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
