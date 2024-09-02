import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
  .withUrl('https://www.mashrook.somee.com/chat') // Adjust the URL based on your SignalR setup
  .build();

connection.start().catch((err) => console.error(err));

export default connection;
