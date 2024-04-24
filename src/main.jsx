import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App/App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './components/Counter/Counter'
import GoalComponent from './components/GoalComponent/GoalComponent'
import ShipComponent from './components/ShipComponent/ShipComponent'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "goals",
        element: <GoalComponent />,
      },
      {
        path: "ships",
        element: <ShipComponent />,
      }
    ], 
  },
  {
    path: "*",
    element: <App />
  },
  {
    path: "/counter",
    element: <App />
  }
], {
  basename: "/redux-practice",
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>,
)
