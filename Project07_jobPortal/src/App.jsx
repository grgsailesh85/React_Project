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
import AddJobPage from './pages/AddJobPage';
import JobPage,{ jobLoader } from './pages/JobPage';


const App = () => { 
  // add new job
  const addJob = async (newJob)=>{
    const res = await fetch('/api/jobs' , {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}` , {
      method: 'DELETE',
    })
    return;
  } 
  
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />}>     
        <Route index element={<Homepage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  )


  return <RouterProvider router={router} />;
}

export default App