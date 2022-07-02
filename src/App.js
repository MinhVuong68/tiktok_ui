import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/Routes'
import DefaultLayout from '~/components/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          { publicRoutes.map((route,index) => {
            let Layout = DefaultLayout
            if(route.layout) {
              Layout = route.layout
            }else if(route.layout === null){
              Layout = Fragment
            }
            const Page = route.element
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
