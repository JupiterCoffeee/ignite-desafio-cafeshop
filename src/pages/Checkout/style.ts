import styled from "styled-components";

export const CheckoutContainer = styled.main`
    display: flex;
    justify-content: space-between;

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

    input {
        display: flex;
        padding: 0.75rem;
        align-items: center;
        gap: 0.25rem;
        align-self: stretch;

        border-radius: 0.25rem;
        border: 1px solid ${props => props.theme.color['gray-400']};
        background-color: ${props => props.theme.color['gray-300']};
        
    }
`;

export const CheckoutFormTitleDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    h2 {
        font: ${props => props.theme.font['text-m']};
    }

    p {
        font: ${props => props.theme.font['text-s']};
    }

    svg {
        width: 1.375rem;
        height: 1.375rem;
        color: ${props => props.theme.color['yellow-700']};
    }
`;

export const CheckoutFormInputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CheckoutForm = styled(BaseContainerForm)`

`;

export const PaymentForm = styled(BaseContainerForm)`

`;

export const CartContainerForm = styled(BaseContainerForm)`

`;