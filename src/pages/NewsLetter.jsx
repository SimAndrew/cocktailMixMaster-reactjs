import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://jsonplaceholder.typicode.com/posts';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		await axios.post(newsletterUrl, data);
		// const response = await axios.post(newsletterUrl, data);
		toast.success('You have successfully subscribed to our newsletter!');
		return redirect('/');
	} catch (error) {
		toast.error('There was an error subscribing to the newsletter!');
		return error;
	}
};

const NewsLetter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Form className="form" method="POST">
			<h4 style={{ textAlign: 'center', marginBottom: '2r' }}>
				our newsletter
			</h4>

			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					className="form-input"
					name="name"
					id="name"
					required
				/>
			</div>

			<div className="form-row">
				<label htmlFor="lastName" className="form-label">
					last name
				</label>
				<input
					type="text"
					className="form-input"
					name="lastName"
					id="lastName"
					required
				/>
			</div>

			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="text"
					className="form-input"
					name="email"
					id="email"
					required
				/>
			</div>

			<button
				type="submit"
				className="btn btn-block"
				style={{ marginTop: '0.5rem' }}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'submitting' : 'submit'}
			</button>
		</Form>
	);
};

export default NewsLetter;
