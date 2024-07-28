import { Outlet, useNavigation } from 'react-router-dom';

import Loading from '../components/Loading';
import { Copyright, Footer, Navbar } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
          <Copyright />
        </div>
      )}
    </>
  );
};
export default HomeLayout;
