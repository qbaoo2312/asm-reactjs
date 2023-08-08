import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom"
import Slide from "./Slide";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Slide></Slide>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout;

// https://res.cloudinary.com/dqzopvk2t/image/upload/v1691430583/ecma/asvmba6cmtqxnwtkksr8.png
// https://res.cloudinary.com/dqzopvk2t/image/upload/v1691430589/ecma/zatekxrbflnzsaygsm9a.png