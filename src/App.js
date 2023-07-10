import './App.css';
import './styles.css'

import { Navbar, Home, About, Skills, Projects, ContactUs, Footer } from './components';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
