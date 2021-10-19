import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUS from './components/AboutUs/AboutUS';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Academics from './components/Academics/Academics';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<div className="App">

			<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<AboutUS />
					</Route>
					<Route path="/academics">
						<Academics />
					</Route>
					<Route path="/service">
						<Services />
					</Route>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/register">
						<Register/>
					</Route>
					<Route path="/booking/:servicedescription">
						<Booking></Booking>
						</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
			</AuthProvider>
		
		</div>
	);
}

export default App;
