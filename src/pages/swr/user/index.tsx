import React from 'react';
import type { IRoute} from 'umi';
import { KeepAlive } from 'umi';
import Avatar from './Avatar';
import Content from './Content';

function User() {
  return (
    <div>
      <Avatar />
      <Content />
    </div>
  );
}

export default ({ route }: { route: IRoute }) => {
  return (
    <KeepAlive name="/swr/user" title={route.title} saveScrollPosition="screen">
      <User />
    </KeepAlive>
  );
};
