import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const HomeLayout = () => {
	return (
		<>
			<Navbar />

			<section className="page">
				<Outlet />
			</section>
		</>
	);
};
export default HomeLayout;
