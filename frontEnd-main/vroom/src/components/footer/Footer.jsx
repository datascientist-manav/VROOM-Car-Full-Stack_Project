import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <footer className="text-white-600 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900" href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-white text-xl">Vroom</span>
      </a>
      <p className="mt-2 text-sm text-white">Book Car and Bike at cheap rate</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-white" href='/'>Home</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>  About Us</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Blogs</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Sitemap</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About MyChoice</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-white" href='/'>Deals</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Contact</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Terms and Conditions</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='admindashboard'>Agent Login</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Self Drive cites</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-white" href='/'>Hyderabad</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Bengaluru</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Mumbai</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Bhopal</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Indore</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Reach Us</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-white hover:text-white" >d-7 near Inorbit mall</p>
          </li>
          {/* <li>
            <a className="text-white hover:text-white" href='/'>Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-white" href='/'>Fourth Link</a>
          </li> */}
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-white-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white" href='/'>
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white" href='/'>
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white" href='/'>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white" href='/'>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer