import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div id='footer' className="bg-gray-200 py-6 px-4 text-center">
      <table className="table-auto w-full text-left">
        {/* Table Header */}
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2">Legal</th>
            <th className="px-4 py-2">Social Media</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <h6 className="mb-2">Privacy Policy</h6>
              <h6 className="mb-2">Terms of Service</h6>
              <h6>Cookies Settings</h6>
            </td>
            <td className="border px-4 py-2">
              <div className="flex space-x-4 items-center">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <RiFacebookFill />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer Text */}
      <div className="mt-6">
        <h1 className="text-gray-600 text-sm text-center">
          2023 Ddsgnr. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
