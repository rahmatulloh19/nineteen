import "./portfolioList.less";
import { Projects_list } from "../../contants";
import { PortfolioItem } from "../PortfolioItem";

export const PortfolioList = () => {
	return (
		<section className="site-main__list list">
			<div className="container">
				<ul className="list__main-list">
					{Projects_list.map((item) => (
						<PortfolioItem key={item.id} {...item} />
					))}
				</ul>
			</div>
		</section>
	);
};
