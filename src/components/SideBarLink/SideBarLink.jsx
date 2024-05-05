import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export function SideBarLink({ title, link, icon, changeActiveClazz }) {
  return (
    <NavLink to={link} className={changeActiveClazz} href="#">
      {icon}

      <span className="mx-4 text-lg font-normal">{title}</span>
      <span className="flex-grow text-right"></span>
    </NavLink>
  );
}
SideBarLink.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.node,
  changeActiveClazz: PropTypes.func,
};
