/// <reference types="react-scripts" />
interface Server {
  id: number;
  name: string;
  status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
}
