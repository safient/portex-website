import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header class='text-gray-600 body-font md:px-24 bg-indigo-600 sticky top-0 z-50'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a 
          class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          href='#top'
        >
          <img src='/logo.svg' alt='logo' />
        </a>
        <nav class='md:ml-auto flex flex-wrap items-center text-white justify-center'>
          <a class='mr-5 hover:text-gray-900' href="#top">Home</a>
          <a
            class='mr-5 hover:text-gray-900'
            href='https://github.com/koshikraj/portex'
            target='_blank'
          >
            Developers
          </a>
          <a
            class='mr-5 hover:text-gray-900'
            href='https://blog.consensolabs.com/tag/portex'
            target='_blank'
          >
            Blog
          </a>
        </nav>
        <button class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          <a href='https://app.portex.xyz' target='_next'>
            App
          </a>
        </button>
      </div>
    </header>
  );
}
