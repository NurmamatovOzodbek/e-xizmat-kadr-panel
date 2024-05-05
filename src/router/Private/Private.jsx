import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const auth = localStorage.getItem("accessTokenKadr");

  if (!auth) {
    return <Navigate to={"/auth-login"} replace={true} />;
  } else {
    return children;
  }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
