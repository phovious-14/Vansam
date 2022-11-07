import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
const Protected = ({ children }) => {

  const {account} = useContext(Auth)

  if (!account) {
    console.log(account);
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
