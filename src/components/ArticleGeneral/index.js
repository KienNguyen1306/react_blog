import { useState } from "react";
// import { act_get_list_post_genelral_SeeMore_async } from "../../store/actions";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticlesGenerralAsync } from "../../store/posts/actions";

function ArticleGeneral() {
  const [loading, setLoading] = useState(false); //loading

  let { totalpages, listGeneral, currenPage } = useSelector(
    (state) => state.listGeneral
  );

  let dispatch = useDispatch();

  function handleMore() {
    setLoading(true);
    dispatch(actFetchArticlesGenerralAsync(currenPage + 1)).then(() => {
      setLoading(false);
    });
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bài Viết Tổng Hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listGeneral.map((item) => {
            return (
              <div key={item.id} className="tcl-col-12 tcl-col-md-6">
                <ArticleItem item={item} isStyleCard isShowAvatar={false} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}

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
      </div>
    </div>
  );
}

export default ArticleGeneral;
