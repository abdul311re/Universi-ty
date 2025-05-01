import Arlogo from "../../public/ArLogo.png"
import Arlogow from "../../public/wmremove-transformed.svg"
import { Input } from "../Components/ui/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faBell,faCalendarWeek,faMessage} from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(<>
    <div className=" flex justify-between  px-10 bg-[#191b1f]">
        <div className=" flex items-center justify-center">
            <div className="text-white w-14"><img src={Arlogow} alt="" /></div>
            <div className="h-8 mx-2 w-[2px] bg-[#A7A7A7]"></div>
            <div><p className="font-bold text-white text-xl px-2 ">Home</p></div>
        </div>
        <div className="flex items-center justify-center gap-2">
        <div className="group flex items-center bg-white h-10 w-10 rounded-full transition-all duration-300 hover:w-[290px] hover:rounded-xl ">
    {/* Search Icon - Stays centered initially, moves left on hover */}
    <button className="w-8 h-8 flex items-center pl-3 justify-center transition-all duration-300 group-hover:pl-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>

    {/* Input Field - Expands on hover */}
    <Input type="text" className="w-0 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" placeholder="Search lead, contact and more ..." />
</div>


            <div className="w-10 h-10 p-1  rounded-full bg-gradient-to-r from-[#F54B64] to-[#F78361] flex items-center justify-center "><FontAwesomeIcon icon={faPlus} color="black" /></div>
        <div className="h-8 w-[2px] mx-2 bg-[#A7A7A7]"></div>
        <div className="flex gap-4">
        <div><FontAwesomeIcon icon={faMessage} color="#f7f6f6" fontSize={"20px"}/></div>
        <div><FontAwesomeIcon icon={faBell} color="#f7f6f6" fontSize={"20px"} /></div>
        <div><FontAwesomeIcon icon={faCalendarWeek} color="#f7f6f6"  fontSize={"20px"}/></div>
        </div>
        <div className="h-8 w-[2px] mx-2 bg-[#A7A7A7]"></div>
            <div className="flex items-center justify-center">
            <div className="w-9 h-9 bg-gradient-to-r from-[#F54B64] to-[#F78361] rounded-full "><img src={Arlogow} alt="" /></div>
            <div className="pl-2"><p className="text-white text-sm pl-2 ">Abdul Rehman</p>
            <p className="text-white text-xs pl-2 ">Founder, Artistics Rule</p></div>
            </div>
        </div>
    </div>
    </>)
}
export default Header;