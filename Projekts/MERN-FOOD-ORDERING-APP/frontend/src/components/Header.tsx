import { Link } from "react-router-dom"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return(
        <div className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    to="/"
                    className="text-3xl font bold tracking-tight text-orange-500">
                    MernEats.com
                </Link>
                <div className="md:hidden">                      // for medium size screen and up it stays hidden                   
                    <MobileNav/>
                </div>
                <div className="hidden md:block">               // block the hidden propriety for md size screen and upword
                    <MainNav/>
                </div>
            </div>
        </div>
            
    );
};

export default Header;