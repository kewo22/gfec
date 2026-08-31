export type MenuItemStatus = "active" | "draft" | "hidden";

export type MenuItemType = "link" | "dropdown" | "mega-menu";

export interface MenuChildItem {
  id: string;
  label: string;
  href: string;
  isVisible: boolean;
  order: number;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  type: MenuItemType;
  status: MenuItemStatus;
  isVisible: boolean;
  order: number;
  openInNewTab: boolean;
  children: MenuChildItem[];
  createdAt: string;
  updatedAt: string;
}
