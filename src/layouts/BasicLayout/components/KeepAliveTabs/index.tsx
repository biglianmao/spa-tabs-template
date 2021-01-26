import React from 'react';
import { useAliveController } from 'umi';

import Tab from './Tab';
import styles from './index.module.less';

export default function KeepAliveTabs() {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();

  return (
    <div>
      <div>header</div>
      <ul className={styles['alive-tabs']}>
        {cachingNodes.map((node) => (
          <Tab key={node.name} {...node} />
        ))}
      </ul>
    </div>
  );
}
