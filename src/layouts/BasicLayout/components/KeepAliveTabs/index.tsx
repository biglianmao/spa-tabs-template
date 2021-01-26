import React from 'react';
import { useAliveController } from 'umi';

import Tab from './Tab';
import styles from './index.module.less';
import CustomHeaderRight from '../CustomHeaderRight';

export default function KeepAliveTabs() {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();

  return (
    <div>
      <CustomHeaderRight />
      <ul className={styles['alive-tabs']}>
        {cachingNodes.map((node) => (
          <Tab key={node.id} {...node} />
        ))}
      </ul>
    </div>
  );
}
