import LinksComponent from "./links/links";
import style from "./navbar.module.css";

const Navbar = ()=>{
    return (
        <div className={style.container}>
            <div className={style.logo}>Logo</div>
            <div>
                <LinksComponent/>
            </div>
        </div>
        )
    }
export default Navbar