import React from "react";
import { Link } from "react-router-dom";
import amazon from "../Images/amazonLogo.svg";
import global from "../Images/global.png";
import copyRight from "../Images/copyright.png";

function Footer() {
  return (
    <>
      <div className="bg-[#37475A]">
        <p className="text-center text-white p-3">Back to top</p>
      </div>
      <div className="bg-[#232F3E] flex p-4">
        <div className="text-white w-1/4 leading-8 m-3">
          <h3>Get to Know Us</h3>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              About Us
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Careers
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Press Releases
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Amazon Science
            </Link>
          </div>
        </div>
        <div className="text-white w-1/4 leading-8 m-3">
          <h3>Connect with Us</h3>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Facebook
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Twitter
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Instagram
            </Link>
          </div>
        </div>
        <div className="text-white w-1/4 leading-8 m-3">
          <h3>Make Money with Us</h3>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Sell on Amazon
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Sell under Amazon Accelerator
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Protect and Build Your Brand
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Amazon Global Selling
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Become an Affiliate
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Fulfilment by Amazon
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Advertise Your Products
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Amazon Pay on Merchants
            </Link>
          </div>
        </div>
        <div className="text-white w-1/4 leading-8 m-3">
          <h3>Let Us Help You</h3>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              COVID-19 and Amazon
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Your Account
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Returns Centre
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              100% Purchase Protection
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Amazon App Download
            </Link>
          </div>
          <div>
            <Link className="hover:underline-offset-1 hover:underline" to="/">
              Help
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div
          className="
        flex space-x-14 justify-center bg-[#232F3E] border-t-[1px] border-gray-500 py-6
        "
        >
          <div>
            <img className="h-8 w-26" src={amazon} alt="" />
          </div>
          <div className="dropdown border border-solid border-gray-400">
            <div className="w-full h-6 mt-1 flex ml-2 items-center">
              <img className="w-4" src={global} alt="" />
              <span className="px-4 text-white">English</span>
            </div>
            <div className="dropdown-content text-black list-none">
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" checked />
                  English- EN{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  हिन्दी - Hi{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  தமிழ் - TA{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  తెలుగు - TE{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  ಕನ್ನಡ - KN{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  മലയാളം - ML{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  বাংলা - BN{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="">
                  {" "}
                  <input type="radio" name="localLang" id="localLang" />
                  मराठी - MR{" "}
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className="bg-[#232F3E] text-white flex flex-wrap justify-center text-xs p-4">
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Australia
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Brazil
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Canada
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            China
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            France
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Germany
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Italy
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Japan
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Mexico
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Netherlands
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Poland
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Singapore
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Spain
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            Turkey
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            United Arab Emirates
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            United Kingdom
          </Link>
          <Link
            className="px-2 hover:underline-offset-1 hover:underline"
            to="/"
          >
            United States
          </Link>
        </div>
      </div>
      <div className="bg-[#131A22] flex p-4 justify-center flex-wrap">
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">AbeBooks</p>
            <span className="text-gray-400">
              Books,art <br /> & collaction
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Amazon Web Services</p>
            <span className="text-gray-400">
              Scalable Cloud <br /> Computing Services
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Audible</p>
            <span className="text-gray-400">
              Download <br /> Audio Books
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">IMDb</p>
            <span className="text-gray-400">
              Movies, TV <br /> & Celebrities
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Shopbok</p>
            <span className="text-gray-400">
              Designer <br /> Fashion Brands
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Amazon Business</p>
            <span className="text-gray-400">
              Everything For <br /> Your Business
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Prime Now</p>
            <span className="text-gray-400">
              2-Hour Delivery <br /> on Everyday Ites
            </span>
          </Link>
        </div>
        <div className="text-white w-1/5 leading-none m-3">
          <Link
            className="hover:underline-offset-1 hover:underline text-xs"
            to="/"
          >
            <p className="text-sm">Amazon Prime Music</p>
            <span className="text-gray-400">
              100 million songs, ad-free <br /> Over 15 million podcast episods
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-[#131A22] flex justify-center text-white text-xs py-4">
        <div>
          <Link
            className="hover:underline-offset-1 hover:underline px-1"
            to="/"
          >
            Conditions of Use & Sale
          </Link>
          <Link
            className="hover:underline-offset-1 hover:underline px-1"
            to="/"
          >
            Privacy Notice
          </Link>
          <Link
            className="hover:underline-offset-1 hover:underline px-1"
            to="/"
          >
            Interest-Based Ads
          </Link>
        </div>
      </div>
      <div className="bg-[#131A22] flex justify-center text-white text-xs -mt-4">
        <p className="flex">
          <img className="w-4" src={copyRight} alt="" />
          1996-2024, Amazon.com,Inc. or its affiliates
        </p>
      </div>
    </>
  );
}

export default Footer;
