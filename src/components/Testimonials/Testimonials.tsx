import "./Testimonials.scss";
import quotes from "../../assets/bg-quotes.png";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";

export default function Testimonials() {
	return (
		<section id="testimonials">
			<img src={quotes} alt="quotes" className="quotes" />

			<div className="testimonial">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collaboration
					machine.
				</p>
				<div className="profile">
					<img src={profile1} alt="Satish Patel" />
					<div>
						<span className="name">Satish Patel</span>
						<span className="role">Founder & CEO, Huddle</span>
					</div>
				</div>
			</div>

			<div className="testimonial">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collaboration
					machine.
				</p>
				<div className="profile">
					<img src={profile2} alt="Bruce McKenzie" />
					<div>
						<span className="name">Bruce McKenzie</span>
						<span className="role">Founder & CEO, Huddle</span>
					</div>
				</div>
			</div>

			<div className="testimonial">
				<p>
					Fylo has improved our team productivity by an order of magnitude.
					Since making the switch our team has become a well-oiled collaboration
					machine.
				</p>
				<div className="profile">
					<img src={profile3} alt="Iva Boyd" />
					<div>
						<span className="name">Iva Boyd</span>
						<span className="role">Founder & CEO, Huddle</span>
					</div>
				</div>
			</div>
		</section>
	);
}
