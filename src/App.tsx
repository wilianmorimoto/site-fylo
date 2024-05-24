import BackgroundGradient from './components/BackgroundGradient/BackgroundGradient';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import StayProductive from './components/StayProductive/StayProductive';

function App() {
	return (
		<div className="App">
			<Header />
      <Hero />
      <Features/>
      <StayProductive/>
      <BackgroundGradient/>
      <Footer/>
		</div>
	);
}

export default App;
