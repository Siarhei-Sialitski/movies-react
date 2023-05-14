import { ISortControlProps } from './types';
import React, { useId } from 'react';
import { sortCriterias } from '../../shared/constants';

const SortControl: React.FC<ISortControlProps> = ({
  currentSelection,
  onSelectionChanged,
}) => {
  const dropdownId = useId();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectionChanged(event.target.value);
  };

  const optionList = sortCriterias.map((option) => {
    return (
      <option
        value={option}
        key={option}
        className="bg-gray-400 text-neutral-300 placeholder:bg-gray-700"
      >
        {option}
      </option>
    );
  });
  return (
    <div className="space-x-5">
      <label htmlFor={dropdownId} className="uppercase text-neutral-300 opacity-60">
        sort by
      </label>
      <select
        id={dropdownId}
        value={currentSelection}
        onChange={handleChange}
        className="w-40 bg-neutral-800 uppercase text-neutral-300"
        data-testid="sort-dropdown"
      >
        {optionList}
      </select>
    </div>
  );
};

export default SortControl;
