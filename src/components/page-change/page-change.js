import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// actions that take place on navigation

const PageChange = ({ children, location: { pathname } }) => {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(PageChange);
