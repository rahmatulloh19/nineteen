import { ForwardContact, PortfolioList } from "../../components";

export const Portfolio = () => {
	return (
		<>
			<h2 className="visually-hidden">In this page you can see my all portfolio sites</h2>
			<PortfolioList />
			<ForwardContact additionalClass="list__article" />
		</>
	);
};
