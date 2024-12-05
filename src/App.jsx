import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import SingleProduct from './components/SingleProduct/SingleProduct.jsx';




let routers = createBrowserRouter([
  { path:'/',element:<Layout/> , children:[
    {index:true,element:<Home/>},
    {path:'/tracking-shipment/:id' , element:<SingleProduct/>},
  ]}
])










const App = () => {
  return (
    <I18nextProvider>
      <RouterProvider router={routers}/>
    </I18nextProvider>
  );
};

export default App;
