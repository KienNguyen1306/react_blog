import { mappingCaterogyToObject } from "../../helpers";
import CaterogyService from "../../services/CaterogyService";
export const ACT_FETCH_ALL_CATEROGY = "ACT_FETCH_ALL_CATEROGY";

// latter
export function actFetchAllCaterogy(caterogy) {
  return {
    type: ACT_FETCH_ALL_CATEROGY,
    payload: caterogy,
  };
}

export function actFetchAllCaterogyAsync() {
  return async (dispatch) => {
    const response = await CaterogyService.getAll();
    // const caterogy = response.data.map(mappingCaterogyData);
    let data = mappingCaterogyToObject(response.data);
    dispatch(actFetchAllCaterogy(data));
  };
}
