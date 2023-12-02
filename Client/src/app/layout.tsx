import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/context/storeProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E_Learning',
  description: 'Next & .NET Quiz App',
};

const classes = { footer: 'Footer', header: 'Header', sidebar: 'Sidebar' };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className={classes.header}>
            <Header />
          </div>
          <div className="content">{children}</div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </body>
      </html>
      </StoreProvider>
  
  );
};

export default RootLayout;
