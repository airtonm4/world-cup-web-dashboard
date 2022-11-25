import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Root } from "./pages/Root"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/root" element={<Root />} />
      </Routes>
    </BrowserRouter>
  )
}