import { createBrowserRouter, RouterProvider } from 'react-router';

import {
	About,
	Landing,
	Cocktail,
	Newsletter,
	HomeLayout,
	Error,
} from './pages/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'cocktail',
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
