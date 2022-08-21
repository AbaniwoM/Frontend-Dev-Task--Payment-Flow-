import "./Navbar.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="personal">
        Personal Info
      </Link>
      <CustomLink to="/billing" className="billing-info">
        Billing Info
      </CustomLink>
      <CustomLink to="/confirm-payment" className="confirm-payment">
        Confirm Payment
      </CustomLink>
      <CustomLink to="/purchase-details" className="purchase-details">
      </CustomLink>
      <div className="line"></div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={ isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}