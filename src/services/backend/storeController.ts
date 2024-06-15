// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getData POST /api/store/data */
export async function getDataUsingPost(
  body: API.StoreQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseJSONObject_>('/api/store/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
