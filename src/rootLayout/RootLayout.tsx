import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <>
            <main className="outlet">
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;