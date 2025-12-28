import axios from 'axios';

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const cocktailLoader = async ({ params }) => {
	const { id } = params;
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);

	return { id, data };
};
