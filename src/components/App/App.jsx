import { Route, Routes } from "react-router"
import Layout from "./Layout"
import PlayersAdd from "../Players/PlayersAdd"
import PlayGame from "../Game/PlayGame"
import Home from "./Home"


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/players" element={<PlayersAdd/>} />
        <Route path="/ludo" element={<PlayGame/>} />
      </Route>
    </Routes>
  )
}

export default App
