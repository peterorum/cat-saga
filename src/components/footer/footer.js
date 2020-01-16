import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="text-right text-sm pr-8 pb-4 mt-4">
    <Link to="/about">About</Link> &middot; &copy; 2019 Peter Orum. &middot;
    Cats from <a href="https://thecatapi.com/">The Cat API</a>
  </div>
);
