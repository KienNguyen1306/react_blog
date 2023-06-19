import dayjs from "dayjs";
import "dayjs/locale/vi";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getQueryStr(name, locationSearch) {
  return new URLSearchParams(locationSearch).get(name);
}

export function formatDate(date) {
  return dayjs(date).format("DD/MM/YYYY"); // 08/08/2020
}

export function formatDate2Time(date) {
  return dayjs(date).locale("vi").fromNow(); // 3 năm trước
}

export function mappingPostData(item) {
  let shortDesc = item.excerpt.rendered.replace("<p>", "");
  shortDesc = shortDesc.replace("</p>", "");
  return {
    id: item.id,
    title: item.title.rendered,
    slug: item.slug,
    date: item.modified,
    shortDesc,
    thumb: item.featured_media_url,
    user: item.author_data,
    view: item.view_count,
    categories: item.categories,
  };
}

export function mappingPostDetain(item) {
  return {
    id: item.id,
    title: item.title.rendered,
    user: item.author_data,
    date: item.modified,
    content: item.content.rendered,
    view: item.view_count,
    commentCount: item.comment_count,
    thumb: item.featured_media_url,
    slug: item.slug,
    author: item.author,
  };
}

export function mappingMenuData(item) {
  return {
    id: item.ID,
    title: item.title,
    childItems: !item.child_items ? [] : item.child_items.map(mappingMenuData),
  };
}

export function mappingCaterogyData(item) {
  return {
    id: item.id,
    name: item.name,
  };
}

export function mappingCaterogyToObject(array) {
  let res = {};
  for (let i = 0; i < array.length; i++) {
    res[array[i].id] = {
      id: array[i].id,
      name: array[i].name,
      slug: array[i].slug,
    };
  }
  return res;
}

export function mappingCommetData(item) {
  return {
    id: item.id,
    comment: item.content.rendered,
    userAvatar: item.author_avatar_urls["24"] || item.author_avatar_urls["48"],
    userName: item.author_name,
    replyCommentCount: item.comment_reply_count,
    time: item.date_gmt,
  };
}
