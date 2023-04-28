import { mappingMenuData } from "../../helpers";
import menuService from "../../services/menuService";

export const ACT_FETCH_ALL_MENUS = "ACT_FETCH_ALL_MENUS";

// latter
export function actFetchAllMenus(menus) {
  return {
    type: ACT_FETCH_ALL_MENUS,
    payload: menus,
  };
}

export function actFetchAllMenusAsync() {
  return async (dispatch) => {
    const response = await menuService.getAll();
    const menus = response.data.items.map(mappingMenuData);
    dispatch(actFetchAllMenus(menus));
  };
}
