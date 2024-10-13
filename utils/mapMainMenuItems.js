import {v4 as uuid} from 'uuid';

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map(menuItem => ({
    id: uuid(),
    label: menuItem.menuItem.label,
    destination: menuItem.menuItem.destination?.uri,
    subMenuItems:(menuItem.items || []).map((subMenuItem => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri,
      label: subMenuItem.label,
    }))),
  }));
};
