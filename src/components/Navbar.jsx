import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FiBell, FiMessageSquare, FiPlus, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'; // Icons from react-icons

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left section: Logo, Menu */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="logo">
          <img
            className="h-12 w-12 object-contain"
            src="https://media.licdn.com/dms/image/v2/C4D0BAQFGZQ7mb6pMYA/company-logo_200_200/company-logo_200_200/0/1630562065204/makerble_logo?e=1737590400&v=beta&t=mjylZT0aHc_tI0fXfDpR9SAt-Btli9ckWlwJ-OWWQdo"
            alt="Logo"
          />
        </div>

        {/* Full menu (hidden on mobile, visible on larger screens) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="dropdown relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              My App <FiChevronDown className="ml-1" />
            </button>
            {/* Dropdown Content */}
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg p-2 mt-1 rounded-md z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                </ul>
              </div>
            )}
          </div>

          <ul className="flex gap-4 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">Explore</li>
          </ul>
        </div>
      </div>

      {/* Right section: Notification, Message, Profile, Create, More */}
      <div className="hidden md:flex items-center gap-6">
        <div className="notificationlogo cursor-pointer">
          <FiBell size={24} />
        </div>
        <div className="msglogo cursor-pointer">
          <FiMessageSquare size={24} />
        </div>
        <div className="profile flex items-center gap-2 cursor-pointer">
          <div className="profilelogo bg-gray-300 h-8 w-8 rounded-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="name text-gray-700">
            <p>John Doe</p>
          </div>
        </div>
        <div className="createbtn">
          <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            <FiPlus size={20} /> Create
          </button>
        </div>
        <div className="morebtn">
          <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center">
            <CgDetailsMore size={20} /> More
          </button>
        </div>
      </div>

      {/* Hamburger Menu for Mobile (visible only on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slider) */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-20">
          <div className="bg-white w-64 h-full shadow-lg p-4">
            <button onClick={toggleMenu} className="flex items-center justify-end text-gray-700">
              <FiX size={24} />
            </button>
            <ul className="mt-4">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Explore</li>
              <div className="p-2 md:flex items-center gap-6">
                <div className="dropdown relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
                  >
                    My App <FiChevronDown className="ml-1" />
                  </button>
                  {/* Dropdown Content */}
                  {dropdownOpen && (
                    <div className="absolute bg-white shadow-lg p-2 mt-1 rounded-md z-10">
                      <ul>
                        <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                        <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                        <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </ul>

            {/* Profile and Actions in Mobile Menu */}
            <div className="flex items-center gap-2 mt-4">
              <div className="profilelogo bg-gray-300 h-8 w-8 rounded-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="name text-gray-700">
                <p>John Doe</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                <FiPlus size={20} /> Create
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center">
                <CgDetailsMore size={20} /> More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
