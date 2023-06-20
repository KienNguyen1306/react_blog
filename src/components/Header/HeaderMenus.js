import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actLogout } from "../../store/user/action";

function HeaderMenus() {
  let menus = useSelector((state) => state.MENU.menus);
  let currentUser = useSelector((state) => state.USER.currentUser);
  const dispatch = useDispatch();
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

  function handleLogout() {
    dispatch(actLogout());
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{renderMenus(menus)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            {!currentUser && (
              <Link to="/login">
                <i className="icons ion-person" /> Tài khoản
              </Link>
            )}
            {currentUser && (
              <>
                <img
                  className="avatar_user"
                  src={currentUser.userAvatar}
                  alt="avatar"
                />
                {currentUser.name}
                <div className="action_user">
                  <span onClick={handleLogout}>Đăng xuất</span>
                  <Link to="/profile" className="profile">
                    Profile
                  </Link>
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
