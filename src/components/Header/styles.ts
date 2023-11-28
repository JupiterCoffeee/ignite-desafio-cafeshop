import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 2rem;

        div {
            display: flex;
            gap: 0.5rem;

            svg {
                width: 1.375rem;
                height: 1.375rem;
            }
        }

        span {
            font: ${props => props.theme.font['text-s']};

            display: flex;
            padding: 0.5rem 0.75rem;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;

            border-radius: 0.375rem;
            color: ${props => props.theme.color['purple-700']};
            background-color: ${props => props.theme.color['purple-300']};
        }

        button {
            padding: 0.5rem;
            border-radius: 0.375rem;
            background-color: ${props => props.theme.color['yellow-300']};

            a { 
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${props => props.theme.color['yellow-700']}; 
            }

            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`;