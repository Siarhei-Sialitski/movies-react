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

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton
          data-testid='menuIcon'
          className={styles.menuIcon}
          icon={<MoreCircle32Filled filled={true} />}
        ></MenuButton>
      </MenuTrigger>

      <MenuPopover className={styles.menuPopover}>
        <MenuList>
          <MenuItem className={styles.menuItem} onClick={onEdit}>
            Edit
          </MenuItem>
          <MenuItem className={styles.menuItem} onClick={onDelete}>
            Delete
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default TileMenu;
