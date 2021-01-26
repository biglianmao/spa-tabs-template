import React from 'react';
import { useAliveController, useHistory, useLocation } from 'umi';
import type { CachingNode } from 'umi';
import { CloseCircleOutlined } from '@ant-design/icons';

import styles from './index.module.less';

export default function Tab(props: CachingNode) {
  const history = useHistory();
  const location = useLocation();
  const { getCachingNodes, dropScope } = useAliveController();

  const cachingNodes = getCachingNodes();
  const closable = cachingNodes.length > 1;

  const dropTab = (e: React.MouseEvent) => {
    e.stopPropagation();

    const currentName = props.name!;
    if (location.pathname === currentName) {
      const unListen = history.listen(() => {
        unListen();
        setTimeout(() => {
          dropScope(currentName);
        }, 60);
      });

      history.push(cachingNodes.filter((node) => node.name !== currentName).pop()!.name!);
    } else {
      dropScope(currentName);
    }
  };

  return (
    <li
      className={location.pathname === props.name ? styles.active : ''}
      onClick={() => {
        history.push(props.name!);
      }}
    >
      {props.name}
      {closable && <CloseCircleOutlined className={styles['close-btn']} onClick={dropTab} />}
    </li>
  );
}
