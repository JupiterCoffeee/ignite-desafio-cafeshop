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

const BaseContainerForm = styled.form`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;

    border-radius: 0.375rem;
    background-color: ${props => props.theme.color['gray-200']};
`;

export const BaseTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;

    h2 {
        font: ${props => props.theme.font['text-m']};
        font-weight: bold;
    }

    p {
        font: ${props => props.theme.font['text-s']};
    }

    svg {
        width: 1.375rem;
        height: 1.375rem;
    }
`;

export const CheckoutFormTitleDiv = styled(BaseTitleDiv)`
    svg {
        color: ${props => props.theme.color['yellow-700']};
    }
`;

export const CheckoutFormInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    div {
        display: flex;
        gap: 1rem;
    }
    
    input {
        display: flex;
        width: 100%;
        padding: 0.75rem;
        align-items: center;
        gap: 0.25rem;
        align-self: stretch;

        border-radius: 0.25rem;
        border: 1px solid ${props => props.theme.color['gray-400']};
        background-color: ${props => props.theme.color['gray-300']};
        
        &:focus {
            outline: 1px solid ${props => props.theme.color['yellow-700']};
        }
    }
`;

export const CheckoutForm = styled(BaseContainerForm)`

`;

export const PaymentForm = styled(BaseContainerForm)`
    margin-top: 1rem;
`;

export const PaymentFormTitleDiv = styled(BaseTitleDiv)`
    svg {
        color: ${props => props.theme.color['purple-700']};
    }
`;

export const PaymentFormCheckboxDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    div {
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 0.75rem;

        border-radius: 0.375rem;
        background-color: ${props => props.theme.color['gray-400']};

        label {
            font: ${props => props.theme.font['buttom-m']};
        }

        svg {
            color: ${props => props.theme.color['purple-500']};
        }
    }
`;


export const CartContainerForm = styled(BaseContainerForm)`
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
        padding: 0.75rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        align-self: stretch;  
        
        border: none;
        border-radius: 0.375rem;
        background-color: ${props => props.theme.color['yellow-500']};

        font: ${props => props.theme.font['buttom-g']};
        color: ${props => props.theme.color.white};
    }

`;