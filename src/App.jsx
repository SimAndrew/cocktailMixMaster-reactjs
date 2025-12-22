import { createBrowserRouter, RouterProvider } from 'react-router';

import {
	About,
	Landing,
	Cocktail,
	Newsletter,
	HomeLayout,
	Error,
	SinglePageError,
} from './pages/index.js';

import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singleCocktailLoader } from './pages/Cocktail.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: 'cocktail/:id',
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
