import styled from 'styled-components';

export const SideBarContainer = styled.div`
    position: ${props => props.position ? 'relative' : 'absolute'
    };
    width: fit-content;

    background-color: red;
`;