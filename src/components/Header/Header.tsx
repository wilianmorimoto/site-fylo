import "./Header.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
	return (
		<header>
			<nav>
				<a href="#">
					<img src={logo} alt="logo" className="logo" />
				</a>
				<ul className="menu">
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#signin">Sign in</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
