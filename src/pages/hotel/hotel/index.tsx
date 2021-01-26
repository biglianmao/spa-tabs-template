import React from 'react';
import useHotelService, { HotelContext } from './useHotelService';

import HotelInfo from './HotelInfo';
import { KeepAlive } from 'umi';

function Hotel() {
  const hotelService = useHotelService();

  return (
    <HotelContext.Provider value={hotelService}>
      <HotelInfo />
    </HotelContext.Provider>
  );
}

export default () => (
  <KeepAlive name="/hotel/hotel" saveScrollPosition="screen">
    <Hotel />
  </KeepAlive>
);
