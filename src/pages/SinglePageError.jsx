import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
	const error = useRouteError();
	console.log('error:', error);

	return <h2>{error.message}</h2>;
};

export default SinglePageError;
