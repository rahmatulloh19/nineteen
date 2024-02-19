import "./forwardContact.less";
import { Link } from "react-router-dom";

export const ForwardContact = ({ additionalClass }) => {
	return (
		<article className={`${additionalClass} article`}>
			<div className="container">
				<div className="article__inner">
					<div className="article__title-wrapper">
						<h2 className="article__title">Interested in doing a project together?</h2>
					</div>

					<span className="article__decor"></span>

					<Link className="article__link" to="/contact">
						CONTACT ME
					</Link>
				</div>
			</div>
		</article>
	);
};
