'use client';

import './globals.css';
import { Provider } from 'react-redux';
import store from './redux/Store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="bg-gray-900">{children}</body>
      </html>
    </Provider>
  );
}
