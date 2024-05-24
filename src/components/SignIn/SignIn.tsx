import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import "./SignIn.scss";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState<boolean>();

	const handleEmail = (e: FormEvent) => {
    e.preventDefault()

		const emailValidate = new RegExp(
			/^[a-zA-Z0-9_+%-.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z0-9]{2,}$/
		);

		if (emailValidate.test(email) && email.length > 0) {
			setEmail("");
			setValidEmail(true);
		} else {
			setValidEmail(false);
		}
	};

	return (
		<section id="signin">
			<div className="card-sign">
				<h2>Get early access today</h2>
				<p>
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our support team would
					be happy to help you.
				</p>
				<form onSubmit={handleEmail}>
					<input
						type="email"
						id="email"
						placeholder="email@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button text="Get Started For Free" type="submit" />
				</form>

				{email.length > 0 && !validEmail && (
					<p className="error">Please enter a valid email address!</p>
				)}
			</div>
		</section>
	);
}
