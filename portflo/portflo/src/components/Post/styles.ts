import styled, { css } from 'styled-components';

export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1.3rem;

    @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
    }
`;

interface IWrapperProps {
    cover: boolean
}

export const Wrapper = styled.div<IWrapperProps>`
    width: 100%;
    align-self: flex-start;
    background-color: ${props => props.theme.color.primary};

    ${(props: IWrapperProps) => props.cover && css`
        min-height: calc(100vh - 21rem);
        margin-top: 15rem;
    `}

    @media only screen and (max-width: 767px) {
        margin-top: 0;
    }

`;

export const PreviewTitle = styled.p`
    margin-top: .5rem;
    font-size: .9rem;
    font-weight: bold;
`;

interface ICoverProps {
    position?: string,
    color?: string
}

export const CoverWrapper = styled.div`
    width: 100%;
    height: 15rem;
    position: fixed;
    margin-top: 7rem;
    z-index: -1;
    top: 0;

    background-color: ${(props: ICoverProps) => props.color};

    & > div {
    justify-content: ${(props: ICoverProps) => {
        if (props.position == 'left')
            return 'flex-start'
        else if (props.position == 'right')
            return 'flex-end'
        else
            return 'center'
    }};
    }

    @media only screen and (max-width: 767px) {
        display: None;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2rem;

    @media only screen and (max-width: 767px) {
        i {
            text-indent: -0.5rem !important;
        }
    }
`;

export const Content = styled.div`
    padding: 1rem 3.9rem;

    @media only screen and (max-width: 767px) {
        padding: 3rem 0;
    }
`;

export const Head = styled.div`
    p + p {
        margin-top: 1rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.color.unselected};
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 1rem;
`;

export const Tags = styled.p`
    font-size: 1rem;
    font-weight: bold;
`;

export const Body = styled.div`
    margin-top: 2rem;
`;

export const Text = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 2rem 0;
`;