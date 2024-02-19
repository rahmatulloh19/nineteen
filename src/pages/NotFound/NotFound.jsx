import { Link } from "react-router-dom";
import "./notFound.less";

export const NotFound = () => {
	return (
		<div className="notfound">
			<h1 className="notfound__title">404</h1>
			<p className="notfound__text">
				Take me back to{" "}
				<Link to="/" className="notfound__link">
					nineteen.uz
				</Link>
			</p>
		</div>
	);
};
