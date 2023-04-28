import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderMenus() {
  let { menus } = useSelector((state) => state.menusReducer);

  function renderMenus(array) {
    let res = array.map((item) => {
      return (
        <li key={item.id} className="menu-item">
          <a href="/">{item.title}</a>
          {item.childItems.length > 0 && (
            <ul>{renderMenus(item.childItems)}</ul>
          )}
        </li>
      );
    });
    return res;
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{renderMenus(menus)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
