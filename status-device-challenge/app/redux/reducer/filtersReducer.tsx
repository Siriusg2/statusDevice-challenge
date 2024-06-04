import { Device } from "@/interfaces/interface";

export interface FiltersState {
  selection: string;
  sos: boolean | null;
  wifi: boolean | null;
  search: string;
  filteredDevices: Device[]; // Agrega el array de dispositivos filtrados al estado
}

const initialState: FiltersState = {
  selection: '5',
  sos: null,
  wifi: null,
  search: '',
  filteredDevices: [], // Inicializa el array de dispositivos filtrados como vacío
};

const filtersReducer = (state = initialState, action: any): FiltersState => {
  switch (action.type) {
    case 'SET_SELECTION':
      return { ...state, selection: action.payload };
    case 'TOGGLE_SOS':
      return { ...state, sos: action.payload };
    case 'SET_WIFI':
      return { ...state, wifi: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'APPLY_FILTERS':
      const { selection, sos, wifi, search } = state;
      const { devicesData } = action.payload;
      
      // Aplica los filtros acumulativos
      const filteredDevices = devicesData.filter((device: Device) => {
        // Filtrar por selección (si es necesario)
        // if (selection && !device.selection.includes(selection)) {
        //   return false;
        // }
      
        // Filtrar por SOS (si es necesario)
        if (sos !== null && device.isSos !== sos) return false;
      
        // Filtrar por WiFi (si es necesario)
        if (wifi !== null && device.isWifi !== wifi) return false;
      
        // Filtrar por búsqueda (si es necesario)
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

      // Devolver el estado actualizado con los dispositivos filtrados
      return { ...state, filteredDevices };
      
    default:
      return state;
  }
};

export default filtersReducer;
