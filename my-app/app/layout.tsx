import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Dashboard Revistas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
      </body>
    </html>
  );
}
