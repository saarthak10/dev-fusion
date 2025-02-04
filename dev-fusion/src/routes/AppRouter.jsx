import { lazy, Suspense } from "react";
import { BrowserRouter ,Route, Routes } from 'react-router-dom';



const Home = lazy(()=> import('../pages/home/Home'))
const Projects = lazy(()=> import('../pages/projects/Projects'))

const AppRouter = () => {
  return (
        <BrowserRouter>
            <Suspense fallback= {<div>... Loading</div>}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
            </Routes>

            </Suspense>
        </BrowserRouter>
  )
}

export default AppRouter