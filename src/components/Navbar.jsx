import logo from "/images/Logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu=
[
    {
        "id": 1,
        name :"Home",
        link:"#"
    },
    {
        "id": 2,
        name :"Top Rated",
        link:"#"
    },
    {
        "id": 3,
        name :"Kids Wear",
        link:"#"
    },
    {
        "id": 4,
        name :"Men's Wear",
        // just for daily recorddd
        link:"#"
    },
    {
        "id": 5,
        name :"Electronics",
        link:"#"
    },
]


const Dropdownlinks=
[
    {
    id:1,
    name:"Trending Products",
    link:"#"},
    {
    id:2,
    name:"Best Selling",
    link:"#"},
    {
    id:3,
    name:"Top Products",
    link:"#"},
]
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
                
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2"> 
                            <img src={logo} alt="logo" 
                        className="w-10 "/>Shopsy</a>
                  
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="group relative hidden sm:block">
                            <input type="text" placeholder="Search"
                            className="w-[200px] sm:w-[200px] 
                            group-hover:w-[300px] px-2 py-1
                            transition-all duration-300 rounded-full border border-black
                            focus:outline-none focus:border-[1.2px] focus:border-orange-400 
                            " />

                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-[30%] right-[5%]"/>
                        </div>

                        <button
                             onClick={()=>{alert("Order Button has beeen clicked")}}
                             className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
                                         text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                            <span className="group-hover:block hidden transition-all duration-200">Order</span>
                            <FaCartShopping 
                            className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                        </button>

                        {/* Darkmode Switch */}
                        <div>
                           <DarkMode/>
                        </div>
                    </div>                   
            </div>
        </div>
         {/* lower Navbar */}
        <div className="flex justify-center">
    <ul className="sm:flex hidden items-center gap-4">
        {
            Menu.map((data)=>(
                <li key={data.id}
                ><a href="data.link"
                className="inline-block px-4 hover:text-primary duration-200"
                >{data.name}</a></li>
            ))}

            {/* simple dropdown and links */}
            <li className="group relative cursor-pointer"> 
                <a href="#" className="flex items-center gap-[2px] py-2">Trending

                    <span>
                    <FaCaretDown className="
                    transition-all
                     duration-200 
                     group-hover:rotate-180"/>
                    </span>
                </a>
                
                <div className="absolute z-[999] hidden group-hover:block w-[150px] rounded-md bg-white 
                p-2 text-black">
                    <ul className="border-2 rounded-md">
                        {
                            Dropdownlinks.map((data)=>(
                                <li key={data.id}>
                                    <a href={data.link}
                                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 border-2
                                    shadow-md"
                                    >
                                    {data.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </li>
    </ul>
        </div>
       
    </div>
  )
}

export default Navbar