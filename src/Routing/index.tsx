import { Routes,Route } from "react-router-dom";
import {routes} from "../routes"


const index = () => {
  return (
   <Routes>
    {
        routes.map(({id,path,element})=>{
            return <Route key={id} path={path} element={element}/>
        })
    }
   </Routes>
  )
}

export default index
