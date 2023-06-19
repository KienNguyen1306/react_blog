import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import usePostPaging from "../../hooks/usePostPaging";

function ArticleGeneral() {
  const { lists, renderButtonLoadMore } = usePostPaging();

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bài Viết Tổng Hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {lists.map((item) => {
            return (
              <div key={item.id} className="tcl-col-12 tcl-col-md-6">
                <ArticleItem item={item} isStyleCard isShowAvatar={false} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}

        {renderButtonLoadMore()}
      </div>
    </div>
  );
}

export default ArticleGeneral;
