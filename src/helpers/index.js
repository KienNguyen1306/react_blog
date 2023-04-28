import dayjs from "dayjs";
import "dayjs/locale/vi";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name);
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
    desc: item.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
    view: item.view_count,
    commentCount: item.comment_count,
    thumb: item.featured_media_url,
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
    res[array[i].id] = { id: array[i].id, name: array[i].name };
  }
  return res;
}
