// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addTArticle POST /api/blog/tarticle/add */
export async function addTArticleUsingPost(
  body: API.TArticleAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/blog/tarticle/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteTArticle POST /api/blog/tarticle/delete */
export async function deleteTArticleUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/blog/tarticle/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTArticleById GET /api/blog/tarticle/get/${param0} */
export async function getTArticleByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTArticleByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseArticleVO_>(`/api/blog/tarticle/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listTArticleByPage POST /api/blog/tarticle/list/page */
export async function listTArticleByPageUsingPost(
  body: API.TArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTArticle_>('/api/blog/tarticle/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyPostVOByPage POST /api/blog/tarticle/my/list/page */
export async function listMyPostVoByPageUsingPost(
  body: API.TArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTArticle_>('/api/blog/tarticle/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateTArticle POST /api/blog/tarticle/update */
export async function updateTArticleUsingPost(
  body: API.TArticleUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/blog/tarticle/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addTCategory POST /api/blog/tcategory/add */
export async function addTCategoryUsingPost(
  body: API.TCategoryAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/blog/tcategory/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryArticlePageList POST /api/blog/tcategory/article/list */
export async function queryArticlePageListUsingPost(
  body: API.TCategoryQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTArticle_>('/api/blog/tcategory/article/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteTCategory POST /api/blog/tcategory/delete */
export async function deleteTCategoryUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/blog/tcategory/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTCategoryById GET /api/blog/tcategory/get */
export async function getTCategoryByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTCategoryByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTCategory_>('/api/blog/tcategory/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCategoryList POST /api/blog/tcategory/list */
export async function queryCategoryListUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseListString_>('/api/blog/tcategory/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** listTCategoryByPage POST /api/blog/tcategory/list/page */
export async function listTCategoryByPageUsingPost(
  body: API.TCategoryQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTCategory_>('/api/blog/tcategory/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateTCategory POST /api/blog/tcategory/update */
export async function updateTCategoryUsingPost(
  body: API.TCategoryUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/blog/tcategory/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
