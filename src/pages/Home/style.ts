import styled from "styled-components";

export const HomeContainer = styled.main`
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    h2 {
        font: ${props => props.theme.font['title-l']}
    }

`;

export const MenuContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 0;
`;