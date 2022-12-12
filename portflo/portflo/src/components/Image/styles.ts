import styled, { css } from 'styled-components';

interface Props {
    round?: boolean;
    width?: string;
    height?: string;
    hover?: boolean;
}

export const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: inherit;
`;

export const StyledImage = styled.img`
    width: ${(props: Props) => props.width || '100%'};
    height: ${(props: Props) => props.height || 'auto'};
    

    ${(props: Props) => props.round && css`
        border-radius: 50%;
    `}

    ${(props: Props) => props.hover && css`
        transition: transform .3s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    `}
`;

export const Loading = styled.div`
	background: linear-gradient(-45deg, #EBEBEB, #CCCCCC, #EBEBEB, #CCCCCC, #EBEBEB);
	background-size: 400% 400%;
	animation: gradient 1s linear infinite;
	width: ${(props: Props) => props.width || '100%'};
    height: ${(props: Props) => props.height || '15rem'};

    ${(props: Props) => props.round && css`
        border-radius: 50%;
    `}

    @keyframes gradient {
        0% {
            background-position: 100% 100%;
            opacity: 1;
        }
        100% {
            background-position: 50% 50%;
            opacity: .5;
        }
    }

`;