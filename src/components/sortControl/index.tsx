import { ISortControlProps } from './types';
import React from 'react';
import { Dropdown, Option, useId } from '@fluentui/react-components';
import useStyles from './styles';
import { TriangleDown12Filled } from '@fluentui/react-icons';

const SortControl: React.FC<ISortControlProps> = ({
  currentSelection,
  onSelectionChanged,
}) => {
  const options = ['Release Date', 'Title'];
  const styles = useStyles();
  const dropdownId = useId('dropdown');

  const handleOptionSelect = (ev: any, data: any) => {
    onSelectionChanged(data.selectedOptions[0]);
  };

  const optionList = options.map((option) => {
    return (
      <Option className={styles.option} key={option}>
        {option}
      </Option>
    );
  });

  return (
    <div className={styles.container}>
      <label id={dropdownId} className={styles.label}>
        sort by
      </label>
      <Dropdown
        aria-labelledby={dropdownId}
        appearance='filled-darker'
        className={styles.dropDown}
        value={currentSelection}
        expandIcon={<TriangleDown12Filled className={styles.expandIcon} />}
        selectedOptions={[currentSelection]}
        onOptionSelect={handleOptionSelect}
        data-testid='dropdown'
      >
        {optionList}
      </Dropdown>
    </div>
  );
};

export default SortControl;
