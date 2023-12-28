import styled from "styled-components";

export const CheckoutContainer = styled.main`
    display: grid;
    justify-content: start;
    gap: 1rem;
    grid-template-columns: 60% 40%;

    h1 {
        font: ${props => props.theme.font['title-xs']};
        margin: 1rem 0;
    }
`;

const BaseContainerDiv = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;

    border-radius: 0.375rem;
    background-color: ${props => props.theme.color['gray-200']};
`;

export const CartContainerForm = styled(BaseContainerDiv)`
    div {
        width: 100%;
    }
`;

export const CardPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-between;

        p {
            font: ${props => props.theme.font['text-s']};
        }

        p + p {
            font: ${props => props.theme.font['text-m']};
        }

        span {
            font: ${props => props.theme.font['text-l']};
            font-weight: bold;
        }
    }

    button {
        display: flex;
        width: 100%;
        padding: 0.75rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        align-self: stretch;  
        cursor: pointer;
        
        border: none;
        border-radius: 0.375rem;
        background-color: ${props => props.theme.color['yellow-500']};

        font: ${props => props.theme.font['buttom-g']};
        color: ${props => props.theme.color.white};

        &:disabled {
            cursor: not-allowed;
            opacity: 0.8;
        }
    }

`;