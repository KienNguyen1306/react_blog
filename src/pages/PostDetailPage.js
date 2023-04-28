import { useParams } from "react-router-dom";
import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";
import IconLoading from "../components/shared/IconLoading";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { actFetchArticlesPostDetailAsync } from "../store/posts/actions";
// import { act_get_detail_post_async } from "../store/actions";
function PostDetailPage() {
  const [loading, Setloading] = useState(true);
  const { slug } = useParams();
  let detailPost = useSelector((state) => state.postDetail);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchArticlesPostDetailAsync(slug)).then(() => {
      Setloading(false);
    });
  }, [dispatch, slug]);

  return (
    <main className="post-detail">
      <div className="spacing" />

      {loading ? (
        <div className="tcl-container center">
          <IconLoading width={70} />
        </div>
      ) : (
        <>
          <PostDetailHead data={detailPost} />
          <div className="spacing" />
          <div className="post-detail__fluid">
            <div className="tcl-container">
              <div className="post-detail__wrapper">
                <PostDetailContent data={detailPost} />
                <PostDetailSidebar />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default PostDetailPage;
