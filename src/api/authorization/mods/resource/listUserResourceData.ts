/**
 * @description 用户资源列表（树形）
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/resource/user/list/data', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || [];
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
