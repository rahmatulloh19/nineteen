import "./portfolioItem.less";

export const PortfolioItem = ({ title, img, desc }) => {
	return (
		<li className="list__main-list-item">
			<img src={img} className="list__main-list-img" alt="" />
			<h3 className="list__main-list-title">{title}</h3>
		</li>
	);
};
