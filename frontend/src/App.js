import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import { RequireToken } from './Auth.js'

import Dashboard from "./dashboard";
import Home from "./home";
import Employee from "./employee";
import Profile from "./profile";
import AddEmployee from "./addemployee";
import EditEmployee from './editemployee'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path='/' element={
            <RequireToken>
              <Dashboard />
            </RequireToken>
          }>
            <Route path='' element={<Home />}></Route>
            <Route path='/employee' element={<Employee />}></Route>
            <Route
              path="/profile"
              element={
                <RequireToken>
                  <Profile />
                </RequireToken>
              }
            />
            <Route path='/create' element={<AddEmployee />}></Route>
            <Route path='/employeeedit/:id' element={<EditEmployee />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;