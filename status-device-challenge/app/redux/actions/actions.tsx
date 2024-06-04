import {
  ToggleSOSAction,
  SetWifiAction,
  SetSearchAction,
  ApplyFiltersAction,
  Device,
  SetCurrentPageAction,
} from '../../../interfaces/interface';

export const toggleSOS = (value: boolean | null): ToggleSOSAction => ({
  type: 'TOGGLE_SOS',
  payload: value,
});

export const setWifi = (value: boolean | null): SetWifiAction => ({
  type: 'SET_WIFI',
  payload: value,
});

export const setSearch = (search: string): SetSearchAction => ({
  type: 'SET_SEARCH',
  payload: search,
});

export const applyFilters = (devicesData: Device[]): ApplyFiltersAction => ({
  type: 'APPLY_FILTERS',
  payload: devicesData,
});

export const setCurrentPage = (page: number): SetCurrentPageAction => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});
