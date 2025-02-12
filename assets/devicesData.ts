interface Device {
  id: number;
  name: string;
  connected: boolean;
  battery: number;
  isSos: boolean;
  isWifi: boolean;
  owner: string;
  contacts: string[];
}

const devicesData: Device[] = [
  {
    id: 1,
    name: "Device 1",
    connected: true,
    battery: 80,
    isSos: false,
    isWifi: true,
    owner: "Owner 1",
    contacts: ["+5555555555", "+5555555555"],
  },
  {
    id: 2,
    name: "Device 2",
    connected: true,
    battery: 75,
    isSos: true,
    isWifi: false,
    owner: "Owner 2",
    contacts: ["+2222222222", "+3333333333  "],
  },
  {
    id: 3,
    name: "Device 3",
    connected: true,
    battery: 70,
    isSos: false,
    isWifi: true,
    owner: "Owner 3",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 4,
    name: "Device 4",
    connected: true,
    battery: 65,
    isSos: true,
    isWifi: false,
    owner: "Owner 4",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 5,
    name: "Device 5",
    connected: true,
    battery: 60,
    isSos: false,
    isWifi: true,
    owner: "Owner 5",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 6,
    name: "Device 6",
    connected: true,
    battery: 55,
    isSos: true,
    isWifi: false,
    owner: "Owner 6",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 7,
    name: "Device 7",
    connected: true,
    battery: 50,
    isSos: false,
    isWifi: true,
    owner: "Owner 7",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 8,
    name: "Device 8",
    connected: true,
    battery: 45,
    isSos: true,
    isWifi: false,
    owner: "Owner 8",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 9,
    name: "Device 9",
    connected: true,
    battery: 40,
    isSos: false,
    isWifi: true,
    owner: "Owner 9",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 10,
    name: "Device 10",
    connected: true,
    battery: 35,
    isSos: true,
    isWifi: false,
    owner: "Owner 10",
    contacts: ["+1111111111", "+4444444444"],
  },
  {
    id: 11,
    name: "Device 11",
    connected: true,
    battery: 30,
    isSos: false,
    isWifi: true,
    owner: "Owner 11",
    contacts: ["+1111111111", "+4444444444"],
  }
];


const getDevices = () => devicesData;