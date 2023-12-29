import styled from "styled-components";

export const DeliveryContainer = styled.div`
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const DeliveryTitleDiv = styled.div`
    h2 {
        font: ${props => props.theme.font['title-l']};
        color: ${props => props.theme.color['yellow-700']}
    }

    h3 {
        font: ${props => props.theme.font['text-l']};
        color: ${props => props.theme.color['gray-800']}
    }
`;

export const DeliveryInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`;

export const DeliveryInfoBoxDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(-45deg, #8047F8, #DBAC2C);
    border-image-slice: 1;
`;

const BACKGROUND_COLORS = {
    darkYellow: 'yellow-700',
    lightYellow: 'yellow-500',
    purple: 'purple-500',
} as const

interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLORS
}

export const Info = styled.div<BackgroundProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 100%;
        background-color: ${(props) => props.theme.color[BACKGROUND_COLORS[props.backgroundColor]]};
    
        svg {
            color: ${(props) => props.theme.color.white}
        }
    }
`;