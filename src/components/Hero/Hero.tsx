import './Hero.scss'
import heroimg from '../../assets/illustration-intro.png'
import Button from '../Button/Button';

export default function Hero() {
  return (
		<section id="hero">
			<img src={heroimg} alt="Hero image" />
			<h1>All your files in one secure location, accessible anywhere.</h1>
			<p>
				Fylo stores all your most important files in one secure location. Access
				them wherever you need, share and collaborate with friends family, and
				co-workers.
			</p>
      <Button text='Get Started' />
		</section>
	);
}
