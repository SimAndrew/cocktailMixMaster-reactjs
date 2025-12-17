import Wrapper from '../wrappers/AboutPage.js';

const About = () => {
	return (
		<Wrapper>
			<h3>About Us</h3>
			<p>
				Introducing "Cocktail MixMaster," the ultimate party sidekick app that
				fetches cocktails from the hilarious Cocktails DB API. With a flick of
				your finger, you'll unlock a treasure trove of enchanting drink recipes
				that'll make your taste buds dance and your friends jump with joy. Get
				ready to shake up your mixology game, one fantastical mocktail at a
				time, and let the laughter and giggles flow!
			</p>

			<p>
				<a
					href="https://www.thecocktaildb.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://www.thecocktaildb.com
				</a>
				&nbsp;— An open, crowd-sourced database of drinks and cocktails from
				around the world.
			</p>
		</Wrapper>
	);
};

export default About;
