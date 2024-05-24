import "./Button.scss";

type ButtonProps = {
	text: string;
	type?: 'button' | 'submit';
};

export default function Button({ text, type }: ButtonProps) {
	return (
		<button
			className="getstarted-btn"
			type={type}
		>
			{text}
		</button>
	);
}
