import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Homepage';
import MainLayouts from './layouts/MainLayouts';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />}>     
      <Route index element={<Homepage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />;
}

export default App