import React from 'react';
import useHotelService, { HotelContext } from './useHotelService';

import HotelInfo from './HotelInfo';
import type { IRoute} from 'umi';
import { KeepAlive } from 'umi';

function Hotel() {
  const hotelService = useHotelService();

  return (
    <HotelContext.Provider value={hotelService}>
      <HotelInfo />
    </HotelContext.Provider>
  );
}

export default ({ route }: { route: IRoute }) => (
  <KeepAlive name="/hotel/hotel" title={route.title} saveScrollPosition="screen">
    <Hotel />
  </KeepAlive>
);
