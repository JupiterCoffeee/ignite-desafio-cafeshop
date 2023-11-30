import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    max-width: 16rem;
    height: 19.375rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 1.5rem;

    border-radius: 0.375rem 2.25rem;
    background-color: ${props => props.theme.color['gray-200']};
`;

export const CoffeeCardTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img {
        margin-top: -2.5rem;
    }

    h3 {
        font: ${props => props.theme.font['title-s']};
        color: ${props => props.theme.color['gray-800']};
        text-align: center;
        margin-bottom: 0.5rem;
    }

    p {
        font: ${props => props.theme.font['text-s']};
        color: ${props => props.theme.color['gray-600']};
        text-align: center;
    }

    span {
        padding: 0.25rem 0.5rem;
        margin: 0.20rem;
        border-radius: 6.25rem;;
        background-color: ${props => props.theme.color['yellow-300']};

        color: ${props => props.theme.color['yellow-700']};
        font: ${props => props.theme.font['buttom-g']};
    }
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CoffeeCardPriceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 0.375rem;
    }

    small {
        font: ${props => props.theme.font['text-s']};
    }

    span {
        font: ${props => props.theme.font['title-m']};
    }
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

export const CheckoutButton = styled.button`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 0.375rem;
    border: none;
    color: ${props => props.theme.color['white']};
    background-color: ${props => props.theme.color['purple-500']};
    
    &:hover {
        cursor: pointer;
    }

    svg {
        width: 1.375rem;
        height: 1.375rem;
    }
`;
