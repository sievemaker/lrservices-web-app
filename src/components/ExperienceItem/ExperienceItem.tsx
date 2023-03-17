import React, { FC } from 'react';
import styles from './ExperienceItem.module.scss';

interface ExperienceItemProps {}

const ExperienceItem: FC<ExperienceItemProps> = () => (
  <div className={styles.ExperienceItem} data-testid="ExperienceItem">
    ExperienceItem Component
  </div>
);

export default ExperienceItem;
