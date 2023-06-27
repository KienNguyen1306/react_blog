import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import usePostPaging from "../../hooks/usePostPaging";
import Skeleton from "../Skeleton";

function ArticleGeneral() {
  const { lists, renderButtonLoadMore } = usePostPaging();

  if (lists.length === 0) {
    return (
      <div className="articles-list section">
        <div className="tcl-container">
          <MainTitle btnLabel="Xem them">Bài Viết Tổng Hợp</MainTitle>
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-md-6">
              <Skeleton isShowCategoies isStyleCard />
            </div>
            <div className="tcl-col-12 tcl-col-md-6">
              <Skeleton isShowCategoies isStyleCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
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
