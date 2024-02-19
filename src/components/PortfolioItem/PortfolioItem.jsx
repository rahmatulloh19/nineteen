import { Link } from "react-router-dom";
import "./portfolioItem.less";

export const PortfolioItem = ({ title, img, desc, id }) => {
	return (
		<li className="list__main-list-item">
			<img src={img} className="list__main-list-img" alt="" />
			<div className="list__main-list-content">
				<h3 className="list__main-list-title">{title}</h3>
				<p className="list__main-list-desc">{desc}</p>
				<Link to={`/single-page/${id}`} className="list__main-list-link">
					VIEW PROJECT
				</Link>
			</div>
		</li>
	);
};
