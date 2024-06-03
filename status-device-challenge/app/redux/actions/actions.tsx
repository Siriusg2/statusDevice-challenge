interface SetSelectionAction {
  type: 'SET_SELECTION';
  payload: string;
}

interface ToggleSOSAction {
  type: 'TOGGLE_SOS';
}

interface SetWifiAction {
  type: 'SET_WIFI';
}

interface SetSearchAction {
  type: 'SET_SEARCH';
  payload: string;
}

export const setSelection = (selection: string): SetSelectionAction => ({
  type: 'SET_SELECTION',
  payload: selection,
});

export const toggleSOS = (): ToggleSOSAction => ({
  type: 'TOGGLE_SOS',
});

export const setWifi = (): SetWifiAction => ({
  type: 'SET_WIFI',
});

export const setSearch = (search: string): SetSearchAction => ({
  type: 'SET_SEARCH',
  payload: search,
});
