import "./Features.scss";
import accessAnywhere from "../../assets/icon-access-anywhere.svg";
import iconSecurity from "../../assets/icon-security.svg";
import collaboration from "../../assets/icon-collaboration.svg";
import storeAnyFile from '../../assets/icon-any-file.svg'

export default function Features() {
	return (
		<section id="features">
			<div className="feature">
				<img src={accessAnywhere} alt="Access Anywhere" />
				<h2>Access your files, anywhere</h2>
				<p>
					The ability to use a smartphone, tablet, or computer to access your
					account means your files follow you everywhere.
				</p>
			</div>

			<div className="feature">
				<img src={iconSecurity} alt="Security" />
				<h2>Security you can trust</h2>
				<p>
					2-factor authentication and user-controlled encryption are just a
					couple of the security features we allow to help secure your files.
				</p>
			</div>

			<div className="feature">
				<img src={collaboration} alt="Collaboration" />
				<h2>Real-time collaboration</h2>
				<p>
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachments required.
				</p>
			</div>

			<div className="feature">
				<img src={storeAnyFile} alt="Store Any File" />
				<h2>Store any type of file</h2>
				<p>
					Whether you're sharing holidays photos or work documents, Fylo has you
					covered allowing for all file types to be securely stored and shared.
				</p>
			</div>
		</section>
	);
}
