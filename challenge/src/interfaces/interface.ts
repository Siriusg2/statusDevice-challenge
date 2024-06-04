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

export interface PaginationProps {
  devices: Device[];
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
