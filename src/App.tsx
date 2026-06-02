import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import WorkAiCockpit from './pages/WorkAiCockpit'
import Notes from './pages/Notes'
import Writing from './pages/Writing'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/ai-cockpit" element={<WorkAiCockpit />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
