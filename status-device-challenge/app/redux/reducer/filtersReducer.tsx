interface FiltersState {
  selection: string;
  sos: boolean;
  wifi: boolean;
  search: string;
}

const initialState: FiltersState = {
  selection: '5',
  sos: false,
  wifi: false,
  search: '',
};

const filtersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_SELECTION':
      return { ...state, selection: action.payload };
    case 'TOGGLE_SOS':
      return { ...state, sos: !state.sos };
    case 'SET_WIFI':
      return { ...state, wifi: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
