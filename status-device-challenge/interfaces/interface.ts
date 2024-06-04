export interface Device {
  id: number;
  name: string;
  connected: boolean;
  battery: number;
  isSos: boolean;
  isWifi: boolean;
  owner: string;
  contacts: string[];
}

export interface ToggleSOSAction {
  type: 'TOGGLE_SOS';
  payload: boolean | null;
}

export interface SetWifiAction {
  type: 'SET_WIFI';
  payload: boolean | null;
}

export interface SetSearchAction {
  type: 'SET_SEARCH';
  payload: string;
}

export interface ApplyFiltersAction {
  type: 'APPLY_FILTERS';
  payload: Device[];
}

export interface SetCurrentPageAction {
  type: 'SET_CURRENT_PAGE';
  payload: number;
}

export interface ButtonPagedProps {
  totalDevices: number;
  devicesPerPage: number;
}

export interface TableDesktopProps {
  currentDevices: Device[];
}

export interface TableMobileProps {
  currentDevices: Device[];
}

export interface FiltersState {
  sos: boolean | null;
  wifi: boolean | null;
  search: string;
  filteredDevices: Device[];
  currentPage: number;
  devicesPerPage: number;
}
