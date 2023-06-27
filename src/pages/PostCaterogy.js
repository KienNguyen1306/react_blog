import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchCaterogyPostAsync } from "../store/posts/actions";
import ArticleItem from "../components/ArticleItem";
import IconLoading from "../components/shared/IconLoading";

function PostCaterogy() {
  const dispatch = useDispatch();
  const caterogyPost = useSelector((state) => state.POST.postCaterogy);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    dispatch(actFetchCaterogyPostAsync(slug)).then(() => {
      setLoading(false);
    });
  }, [slug, dispatch]);

  return (
    <>
      <div className="tcl-container">
        <div className="caterogy-page">
          {loading ? (
            <div className="center_loading">
              <IconLoading width={150} />
            </div>
          ) : (
            <>
              {caterogyPost.map((item, index) => {
                return (
                  <div key={item.id} className="latest-news__card with100">
                    <ArticleItem
                      key={index}
                      item={item}
                      isStyleCard
                      isShowAvatar={false}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PostCaterogy;
