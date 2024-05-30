import React from 'react';
import './Footer.css';

export default function Footer(){
  const year = new Date().getFullYear();
  const companyName = "Van Thailand";
  return (
    <footer>
      <div>&copy; {year} {companyName}</div>
    </footer>
  );
};
