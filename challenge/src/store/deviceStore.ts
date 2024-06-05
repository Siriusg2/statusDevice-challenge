import create from 'zustand';
import { Device } from '@/interfaces/interface';
import getDevices from '../seed/devicesData';

interface DeviceStore {
  devices: Device[];
  selectedId: number | null;
  searchTerm: string;
  isLoading: boolean;
  setSelectedId: (id: number | null) => void;
  setSearchTerm: (term: string) => void;
  toggleLoading: (loading: boolean) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: getDevices(),
  selectedId: null,
  searchTerm: '',
  isLoading: true,
  setSelectedId: (id) => set(() => ({ selectedId: id })),
  setSearchTerm: (term) => set(() => ({ searchTerm: term.toLowerCase() })),
  toggleLoading: (loading) => set(() => ({ isLoading: loading })),
}));
