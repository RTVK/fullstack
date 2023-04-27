import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";
const Header = () => {
    let [scrolled, setScrolled] = useState(false);
    let [showCart, setShowCart] = useState(false);
    let [showSearch, setShowSearch] = useState(false);
    let { cartCount } = useContext(Context);
    const navigate = useNavigate();
    const handleScroll =()=>{
        const offset = window.scrollY; // y axis scroll sticky header
        if(offset > 200){
            setScrolled = true;
        }else{
            setScrolled = false;
        }
    };
    useEffect(() =>{
        window.addEventListener("scroll", handleScroll);
    //console.log("useEffect")
    },[]); // [] is a dependency array 
    return(
        <>
            <header className={`main-header ? {scrolled ? 'sticky-header' : ''`} >
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
        
            <div className="center" onClick={() => navigate("/")}> Prime Organics</div>
            <div className="right"> 
                <TbSearch onClick={()=>showSearch ? setShowSearch(false) : setShowSearch(true) }/>
                <AiOutlineHeart />
                <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
            </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
    );
};

export default Header;
