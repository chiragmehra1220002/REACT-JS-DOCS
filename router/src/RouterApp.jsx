// step 1
import { createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider } from "react-router-dom";
import {Home,About,Contact,Error,Posts,Login} from "./Pages"
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";

    // step 2 : create router
    const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout /> }>
        <Route path="/" element={<Home /> }/>
        <Route path="/about" element={<About /> }/>
        <Route path="/contact" element={<Contact /> }/>
        <Route path="/posts"
         element=
         {<RequireAuth>
            <Posts />
          </RequireAuth>

          }/>
        <Route path ="*" element={<Error /> }/>
        <Route path="/login" element={<Login /> }/>
        
    </Route>) )

function RouterApp() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default RouterApp
