import "./Footer.scss";
import logo from "../../assets/logo.svg";
import location from "../../assets/icon-location.svg";
import email from "../../assets/icon-email.svg";
import phone from "../../assets/icon-phone.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
	return (
		<footer>
			<div className="f-container">
				<img src={logo} alt="logo" />

				<div className="f-content">
					<div className="contact">
						<img src={location} alt="location" className="contact-icons" />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
							sequi voluptate doloremque nemo in quos.
						</p>
						<img src={phone} alt="phone" className="contact-icons" />
						<p>+1-543-123-4567</p>
						<img src={email} alt="email" className="contact-icons" />
						<p>example@fylo.com</p>
					</div>
					<div className="links">
						<a>About Us</a>
						<a>Jobs</a>
						<a>Press</a>
						<a>Blog</a>
					</div>
					<div className="links">
						<a>Contact Us</a>
						<a>Terms</a>
						<a>Privacy</a>
					</div>
					<div className="social-links">
						<a>
							<BsFacebook />
						</a>
						<a>
							<BsTwitter />
						</a>
						<a>
							<BsInstagram />
						</a>
					</div>
				</div>
					<span>
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io/?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a href="https://github.com/wilianmorimoto" target="_blank">
							Wilian Morimoto
						</a>
						.
					</span>
			</div>
		</footer>
	);
}
