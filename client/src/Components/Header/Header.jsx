import React,{useEffect} from "react";
import amazon from "../Images/amazonLogo.svg";
import location from "../Images/location.svg";
import seacrh from "../Images/seacrh.svg";
import hamburgerMenu from "../Images/hamburgerMenu.svg";
import cartImg from "../Images/shopping-cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/features/cartSlice";
import "./Header.css";
function Header() {

  const {cart, totalQuantity} = useSelector((state)=> state.allCart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])
  
  return (
    <>
      <header>
        <div
          className="
      bg-[#131921] h-16 px-3 py-4 w-full flex  align-middle text-white"
        >
          <div className="flex h-full ">
            <Link>
            <img className="h-8 w-26" src={amazon} alt="" />
            </Link>
            <span className="text-sm">.in</span>
          </div>
          <div className="flex align-middle  ml-2 -mt-4">
            <div className="w-full h-4">
              <img className="h-6  mt-6 " src={location} alt="" />
            </div>
            <div className="w-56  h-30 -ml-20">
              <span className="w-56 text-sm text-gray-400 ">
                Delivering to Delhi
              </span>
              <br />
              <span className="w-56 text-sm font-bold">Update location</span>
            </div>
          </div>
          <div className="w-96 h-10 flex -mt-2 ">
            <div className="w-14 h-full ">
              <select
                className="w-full h-full text-black border-none rounded-l-sm bg-gray-100 px-2"
                name="category"
                id="category"
              >
                <option value="all">All Categories</option>
                <option value="alexaSkills">Alexa Skills</option>
                <option value="amazonDevices">Amazon Devices</option>
                <option value="amazonFashion">Amazon Fashion</option>
                <option value="amazonFresh">Amazon Fresh</option>
                <option value="amazonPharmacy">Amazon Pharmacy</option>
                <option value="application">Application</option>
                <option value="app&Game">App & Game</option>
                <option value="audibleAudiobooks">Audible Audiobooks</option>
                <option value="baby">Baby</option>
                <option value="car&Motorsbike">Car & Motorsbike</option>
                <option value="clothing&Accessories">
                  Clothing & Accessories
                </option>
                <option value="collection">Collection</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="garden&Outdoors">Garden & Outdoors</option>
                <option value="giftCards">Gift Cards</option>
                <option value="grocery&Gourmetfoods">
                  Grocery & Gourmetfoods
                </option>
                <option value="health&Personalcare">
                  Health & Personalcare
                </option>
                <option value="home&Kitchen">Home & Kitchen</option>
                <option value="industrial&Scientific">
                  Industrial & Scientific
                </option>
                <option value="jewellery">Jewellery</option>
                <option value="kindleStore">Kindle Store</option>
                <option value="luggage&Bags">Luggage & Bags</option>
                <option value="luxuryBeauty">Luxury Beauty</option>
                <option value="movies&TvShows">Movies & TV Shows</option>
                <option value="music">Music</option>
                <option value="musicInstruments">Music Instruments</option>
                <option value="officeProducts">Office Products</option>
                <option value="petSupplies">Pet Supplies</option>
                <option value="primeVideo">Prime Video</option>
                <option value="shoes&Handbags">Shoes & Handbags</option>
                <option value="software">Software</option>
                <option value="sportsFitness&Outdoors">
                  Sports, Fitness & Outdoors
                </option>
                <option value="subscribe&Save">Subscribe & Save</option>
                <option value="tools&HomeImprovement">
                  Tools & Home Improvement
                </option>
                <option value="toys&Games">Toys & Games</option>
                <option value="under500">Under &#8377;500</option>
                <option value="videoGame">Video Game</option>
                <option value="watches">Watches</option>
              </select>
            </div>
            <input
              type="text"
              className="pl-2 w-64"
              placeholder="Search Amazon.in"
            />
            <div className="bg-orange-300 w-12 rounded-r-sm flex align-middle">
              <img className="w-10 h-10 p-2" src={seacrh} alt="" />
            </div>
          </div>
          <div className="dropdown">
            <div className="w-full flex ml-2 items-center">
              <img
                className="w-8 h-4"
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                alt=""
              />
              <span>EN</span>
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
          <div className="dropdown">
            <div className="w-full ml-3 leading-none ">
              <p className="text-xs">Hello, sign in</p>
              <h3 className="font-bold">Account & Lists</h3>
            </div>
            <div className="dropdown-content text-black list-none mt-1 -ml-8 w-52 h-auto rounded-md">
              <div className="flex justify-center w-full">
                <Link to="/signin">
                  {" "}
                  <button className="bg-[#FFD814] w-32 p-2 rounded-md">
                    Sign in
                  </button>
                </Link>
              </div>
              <div className="flex text-xs justify-center mt-2">
                <p className="px-1">New customer? </p>
                <Link to="/user-register" className="hover:text-orange-500 text-blue-500">
                  Start here.
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-4 w-14">
              <p className="text-sm leading-none">
                Returns <span className="font-bold text-xs">& Orders</span>
              </p>
            </div>
          </div>
          <div className="ml-4">
            <Link to="/cart">
            <img className="w-10 h-8" src={cartImg} alt="" />
            <p className="-mt-10 ml-4 text-orange-400 text-xl font-bold">
              {totalQuantity}
            </p>
            </Link>
          </div>
        </div>
        <div className="bg-[#232F3E] w-full h-10 px-4 py-4 text-white flex items-center">
          <nav>
            <ul className="flex text-sm items-center flex-wrap">
              <Link to="/" className="flex items-center justify-center">
                <img src={hamburgerMenu} alt="" />
                <li className="p-1">All</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Amazon miniTV</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Sell</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Best Sellers</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Today's Deals</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Mobiles</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Customer Service</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Electronics</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>New Releases</li>
              </Link>
              <Link className="px-1.5" to="/prime">
                <li>Prime</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Home & Kitchen</li>
              </Link>
              <Link className="px-1.5" to="/">
                <li>Gift ideas</li>
              </Link>
              {/* <Link className='px-1.5' to="/"><li>Fashion</li></Link> */}
              {/* <Link className='px-1.5' to="/"><li>Amazon Pay</li></Link> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
