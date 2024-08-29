// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addNav POST /api/nav/add */
export async function addNavUsingPost(body: API.NavAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/nav/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteNav POST /api/nav/delete */
export async function deleteNavUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/nav/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editNav POST /api/nav/edit */
export async function editNavUsingPost(body: API.NavEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/nav/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getNavVOById GET /api/nav/get/vo */
export async function getNavVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNavVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseNavVO_>('/api/nav/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listNavByPage POST /api/nav/list/page */
export async function listNavByPageUsingPost(
  body: API.NavQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNav_>('/api/nav/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listNavVOByPage POST /api/nav/list/page/vo */
export async function listNavVoByPageUsingPost(
  body: API.NavQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNavVO_>('/api/nav/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyNavVOByPage POST /api/nav/my/list/page/vo */
export async function listMyNavVoByPageUsingPost(
  body: API.NavQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNavVO_>('/api/nav/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateNav POST /api/nav/update */
export async function updateNavUsingPost(
  body: API.NavUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/nav/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
