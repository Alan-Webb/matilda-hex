import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import OrdersPage from "./pages/OrdersPage";

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position="top-right" />
			<Routes>
				<Route path="/" element={<UserLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="profile" element={<Profile />} />
					<Route path="collections/:collection" element={<CollectionPage />} />
					<Route path="product/:id" element={<ProductDetails />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="order-confirmation" element={<OrderConfirmation />} />
					<Route path="order/:id" element={<OrderDetails />} />
					<Route path="/orders" element={<OrdersPage />} />
				</Route>
				<Route>{/* Admin Layout */}</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
