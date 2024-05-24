import "./StayProductive.scss";
import stayProductive from "../../assets/illustration-stay-productive.png";
import arrowRight from "../../assets/icon-arrow.svg";

export default function StayProductive() {
	return (
		<section id="stay-productive">
			<img src={stayProductive} alt="" />
			<div className="stay-content">
				<h2>Stay productive, wherever you are</h2>
				<p>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all of your file storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and colleagues for
					live collaboration. No email attachments required.
				</p>
				<a href="#">
					See how Fylo works <img src={arrowRight} alt="Arrow right" />
				</a>
			</div>
		</section>
	);
}
