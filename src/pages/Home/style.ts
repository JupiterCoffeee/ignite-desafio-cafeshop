import styled from "styled-components";

export const HomeContainer = styled.main`

`;

export const HeroContainer = styled.div`
    display: flex;
    padding: 5rem 0;
    gap: 3rem;
    align-items: center;
    justify-content: center;
`;

export const HeroTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const HeroTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font: ${props => props.theme.font['title-xl']};
        color: ${props => props.theme.color['gray-900']};
    }

    p {
        font: ${props => props.theme.font['text-l']};
        color: ${props => props.theme.color['gray-800']};
    }
`;

export const HeroFeaturesDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

const BACKGROUND_COLORS = {
    darkYellow: 'yellow-700',
    lightYellow: 'yellow-500',
    gray: 'gray-700',
    purple: 'purple-500',
} as const

interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLORS
}

export const Feature = styled.span<BackgroundProps>`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color[BACKGROUND_COLORS[props.backgroundColor]]};
    color: ${props => props.theme.color['white']};
`;

export const MenuContainer = styled.div`

    h2 {
        font: ${props => props.theme.font['title-l']}
    }

`;

export const MenuContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 0;
`;