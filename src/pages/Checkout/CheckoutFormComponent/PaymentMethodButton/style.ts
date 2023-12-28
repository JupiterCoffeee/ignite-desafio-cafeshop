
import styled from "styled-components";

export const PaymentMethodButtonContainer = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    border: none;
    border-radius: 0.375rem;
    background-color: ${props => props.theme.color['gray-400']};

    p {
        font: ${props => props.theme.font['buttom-m']};
    }
    svg {
        color: ${props => props.theme.color['purple-500']};
    }

    &.active {
        background-color: ${props => props.theme.color['purple-300']};
        outline: solid 1px ${props => props.theme.color['purple-500']}
    }
`;