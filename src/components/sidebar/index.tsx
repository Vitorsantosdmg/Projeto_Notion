import { useState } from 'react';
import { SideBarContainer } from './styles';
import { NewPage } from './newPage';


export const SideBar = () => {

    const [ sidebarState, setSidebarState ] = useState(true)

    return(
        <SideBarContainer
            position={sidebarState}
        >
            <NewPage />
        </SideBarContainer>
    )
};