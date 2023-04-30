import Input from "../shared/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actSetValueInput } from "../../store/searchPost/action";

function HeaderSearch() {
  const history = useHistory();
  const [queryStr, setQueryStr] = useState("");
  let dispatch = useDispatch();

  function handleOnChange(evt) {
    setQueryStr(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!queryStr) {
      return;
    }
    const queryStrURI = encodeURIComponent(queryStr);
    dispatch(actSetValueInput(queryStrURI));
    history.push("/search?q=" + queryStrURI);
  }

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Nhap gia tri search ..."
          value={queryStr}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
