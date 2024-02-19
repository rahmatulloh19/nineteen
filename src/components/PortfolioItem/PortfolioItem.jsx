import "./portfolioItem.less";

export const PortfolioItem = ({ title, Img, desc }) => {
	return <li className="list__main-list-item">{<Img className="list__main-list-img" />}</li>;
};
