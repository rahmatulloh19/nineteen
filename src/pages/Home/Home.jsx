import { aboutImages, homeImages } from "../../assets/images";
import { About, ForwardContact, Hero } from "../../components";

export const Home = () => {
	return (
		<>
			<Hero
				img={homeImages.heroImage}
				imgRetina={homeImages.heroImage2x}
				imgTablet={homeImages.heroTabletImage}
				imgTabletRetina={homeImages.heroTabletImage2x}
				imgDesktop={homeImages.heroDesktopImage}
				imgDesktopRetina={homeImages.heroDesktopImage2x}
				title={"Hey, I’m Rahmatullah Rakhmanov and I love building beautiful websites"}
			/>
			<About
				img={aboutImages.aboutImage}
				imgRetina={aboutImages.aboutImage2x}
				imgTablet={aboutImages.aboutTabletImage}
				imgTabletRetina={aboutImages.aboutTabletImage2x}
				imgDesktop={aboutImages.aboutDesktopImage}
				imgDesktopRetina={aboutImages.aboutDesktopImage2x}
				desc={
					"I’m a front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices, and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Tashkent, Uzbekistan but I will be happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love meeting with my friends, thinking about making new projects, spending time with my family, and love healthy conversations"
				}
			/>
			<ForwardContact additionalClass="site-main__article" />
		</>
	);
};
