import React from 'react';
import LoginPage from './pages/LoginPages/LoginPage';
import RegisterPage from './pages/RegisterPages/RegisterPages';
import AddProductPage from './pages/AddProductPages/AddProductPage';
import ProductList from './components/listproduct'
import Cart from './pages/CartPages/CartPage'
import Details from './pages/DetailsPages/DetailsPage'
import Seller from './pages/SellerPages/SellerPage'
import Sellerdetails from './pages/SellerPages/Sellerdetails'
import AddCategory from './pages/AddCategoryPages/AddCategoryPage'
import ProductCategoryPages from './pages/ProductCategoryPages/productcategorypage'
const Routes =[
{
	path:'/login',
	exact:false,
	main:( {history})=><LoginPage history={history}/>
},
{
	path:'/register',
	exact:false,
	main:({history})=><RegisterPage history={history}/>
},
{
	path:'/product/seller-add',
	exact:true,
	main:({history})=><AddProductPage history={history}/>
},
{
	path:'/',
	exact:true,
	main:()=><ProductList/>
},
{
	path:'/cart',
	exact:false,
	main:()=><Cart/>
},
{
	path:'/:id/details',
	exact:false,
	main:({match})=><Details match={match}/>
},
{
	path:'/:id/sellerdetail',
	exact:false,
	main:()=><Sellerdetails/>
},
{
	path:'/product/addcategory',
	exact:false,
	main:()=><AddCategory />
},
{
	path:'/seller',
	exact:false,
	main:()=><Seller/>
},
{
	path:'/:name/category',
	exact:false,
	main:()=><ProductCategoryPages/>
},
];
export default Routes;