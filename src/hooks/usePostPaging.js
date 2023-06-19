import { useState } from "react";
import Button from "../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticlesPagingAsync } from "../store/posts/actions";

function usePostPaging(inputParam = {}) {
  const [loading, setLoading] = useState(false); //loading

  let { lists, currenPage, totalpages, totalItem } = useSelector(
    (state) => state.POST.listPaging
  );

  let dispatch = useDispatch();

  function handleMore() {
    setLoading(true);
    dispatch(
      actFetchArticlesPagingAsync({ page: currenPage + 1, inputParam })
    ).then(() => {
      setLoading(false);
    });
  }

  function renderButtonLoadMore() {
    return (
      <div className="text-center">
        {currenPage < totalpages && (
          <Button
            type="primary"
            size="large"
            loading={loading}
            onClick={handleMore}
          >
            {loading ? "Loading" : "Tải thêm"}
          </Button>
        )}
      </div>
    );
  }

  return { lists, currenPage, totalpages, renderButtonLoadMore, totalItem };
}

export default usePostPaging;
