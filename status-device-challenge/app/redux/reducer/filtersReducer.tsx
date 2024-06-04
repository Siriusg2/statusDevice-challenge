import { Device } from '@/interfaces/interface';

export interface FiltersState {
  sos: boolean | null;
  wifi: boolean | null;
  search: string;
  filteredDevices: Device[];
  currentPage: number;
  devicesPerPage: number;
}

const initialState: FiltersState = {
  sos: null,
  wifi: null,
  search: '',
  filteredDevices: [],
  currentPage: 1,
  devicesPerPage: 5,
};

const filtersReducer = (state = initialState, action: any): FiltersState => {
  switch (action.type) {
    case 'TOGGLE_SOS':
      return { ...state, sos: action.payload };
    case 'SET_WIFI':
      return { ...state, wifi: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'APPLY_FILTERS':
      const { sos, wifi, search } = state;
      const { devicesData } = action.payload;
      
      const filteredDevices = devicesData.filter((device: Device) => {
        if (sos !== null && device.isSos !== sos) return false;
        if (wifi !== null && device.isWifi !== wifi) return false;
        if (
          search &&
          !(
            device.id.toString().includes(search) ||
            device.name.toLowerCase().includes(search.toLowerCase()) ||
            device.owner.toLowerCase().includes(search.toLowerCase())
          )
        ) return false;
      
        return true;
      });

      return { ...state, filteredDevices, currentPage: 1 };  // Reset to the first page when filters are applied
      
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

export default filtersReducer;
