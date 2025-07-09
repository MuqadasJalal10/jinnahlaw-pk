import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyle } from '../styles/GlobalStyles';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Jinnah Law Academy By Wasif Mateen", 
  description = "Learn Law, Lead Justice - The first and only law-focused institute in Nowshera Virkan. Expert guidance in LAT, LL.B and LAW-GAT.",
  keywords = "law academy, legal education, LAT, LL.B, LAW-GAT, Nowshera Virkan, Pakistan, legal training"
}) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Jinnah Law Academy By Wasif Mateen" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;