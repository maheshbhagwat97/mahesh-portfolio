import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import KonkanHouseProject from './pages/KonkanHouseProject'
import JaipurBedroomProject from './pages/JaipurBedroomProject'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import Work from './pages/Work'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'work/konkan-house', element: <KonkanHouseProject /> },
      { path: 'work/residential-bedroom-design', element: <JaipurBedroomProject /> },
      { path: 'work/:slug', element: <ProjectDetail /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
