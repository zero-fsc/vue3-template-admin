export interface MenuInterface {
  name: string,
  icon?: string,
  path?: string,
  children?: MenuInterface
}

export const menuMockData: Array<MenuInterface> = [
  {
    name: 'DashBoard',
  },
  {
    name: '集群列表'
  },
]