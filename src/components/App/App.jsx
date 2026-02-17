import { Route, Routes } from "react-router"
import Layout from "./Layout"
import PlayersAdd from "../Players/PlayersAdd"


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>this is Home Page </div>} />
        <Route path="/players" element={<PlayersAdd/>} />
        <Route path="/ludo" element={<div>this is Game Page</div>} />
      </Route>
    </Routes>
  )
}

export default App
