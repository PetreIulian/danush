import react from 'react';
import {Nav, Auth} from '../index';
import { AuthContextProvider } from '../Context/AuthContext';

const LogScreen = () => {
    return (
        <AuthContextProvider>
            <section>   
                <Nav/>
                <Auth/>
            </section>
        </AuthContextProvider>
    );
};  

export default LogScreen;