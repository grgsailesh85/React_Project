import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Homepage';


const router =createBrowserRouter(
  createRoutesFromElements(<Route index element={<Homepage/>} />)
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App