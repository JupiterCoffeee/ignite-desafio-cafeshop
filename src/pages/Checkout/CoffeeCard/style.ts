import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 1.5rem 0.25rem;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${props => props.theme.color['gray-400']};

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const CardTextContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const CardPriceContainer = styled.div`
    display: flex;
    justify-content: end;

    span {
        font: ${props => props.theme.font['text-m']};
        font-weight: bold;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;

    border-radius: 0.375rem;
    background-color: ${props => props.theme.color['gray-400']};

    svg {
        color: ${props => props.theme.color['purple-500']};
    }
`;

export const CardButtonsDiv = styled.div`
    display: flex;
    gap: 0.5rem
`;

export const Counter = styled.div`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 0.375rem;
    background-color: ${props => props.theme.color['gray-400']};

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.color['purple-700']};
        border: none;
        background: none;

        &:hover {
            cursor: pointer;
        }
    }
`;