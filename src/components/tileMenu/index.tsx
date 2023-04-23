import React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuButton,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components';
import { ITileMenuProps } from './types';
import useStyles from './styles';
import { MoreCircle32Filled } from '@fluentui/react-icons';

const TileMenu: React.FC<ITileMenuProps> = ({ onEdit, onDelete }) => {
  const styles = useStyles();

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton
            data-testid='menuIcon'
            className={styles.menuIcon}
            icon={<MoreCircle32Filled />}
          ></MenuButton>
        </MenuTrigger>

        <MenuPopover className={styles.menuPopover}>
          <MenuList>
            <MenuItem className={styles.menuItem} onClick={handleEdit}>
              Edit
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleDelete}>
              Delete
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default TileMenu;
