export default {
  '/resource': {
    success: true,
    data: [
      {
        name: 'homepage',
        apiUrl: '/homepage',
        description: '首页',
      },
      {
        name: 'hotelInfo',
        apiUrl: '/hotel/hotel',
        description: '酒店信息',
      },
      {
        name: 'hotelOrder',
        apiUrl: '/hotel/order',
        description: '酒店订单',
      },
      {
        name: 'swrUser',
        apiUrl: '/swr/user',
        description: '用户信息',
      },
      {
        name: 'swrTest',
        apiUrl: '/swr/test',
        description: '用户信息2',
      },
    ],
    code: 20000,
    message: '成功',
  },
};
