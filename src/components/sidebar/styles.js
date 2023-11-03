import styled from 'styled-components';

export const SideBarContainer = styled.div`
    position: ${(props) => {
        props.position ? 'relative' : 'absolute'
    }};

    display: flex;
   
    min-width: 100px;
    max-width: 300px;
`;