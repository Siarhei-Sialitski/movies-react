import { sortControlProps } from './types';
import React from 'react';
import { Dropdown, Option, useId } from '@fluentui/react-components';
import useStyles from './styles';
import { TriangleDown12Filled } from '@fluentui/react-icons';

const SortControl: React.FC<sortControlProps> = ({
  currentSelection,
  onSelectionChanged,
}) => {
  const options = ['Release Date', 'Title'];
  const styles = useStyles();
  const dropdownId = useId('dropdown');
  const [selectedOption, setSelectedOption] =
    React.useState<string>(currentSelection);

  const [value, setValue] = React.useState(currentSelection);

  const handleOptionSelect = (ev: any, data: any) => {
    setSelectedOption(data.selectedOptions[0]);
    setValue(data.optionText ?? '');
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
      <div>
        <Dropdown
          aria-labelledby={dropdownId}
          appearance='filled-darker'
          className={styles.dropDown}
          defaultValue={value}
          expandIcon={<TriangleDown12Filled className={styles.expandIcon} />}
          selectedOptions={[selectedOption]}
          onOptionSelect={handleOptionSelect}
          data-testid='dropdown'
        >
          {optionList}
        </Dropdown>
      </div>
    </div>
  );
};

export default SortControl;
