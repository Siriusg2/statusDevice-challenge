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
