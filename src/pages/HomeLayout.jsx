import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
export default HomeLayout;
