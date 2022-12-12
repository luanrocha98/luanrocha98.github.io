import styled from 'styled-components';

export const Wrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${props => props.theme.color.primary};
`;

export const StyledHeader = styled.header`
    z-index: 1;
    height: 7rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.color.primary};

    @media only screen and (max-width: 767px) {
        & {
            flex-wrap: wrap;
            padding: 1rem 0;
        }

        & > * {
            flex-basis: 100%;
        }
    }
`;

export const Person = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Name = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
    margin-left: 1rem;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    margin-left: 3rem;
    flex-grow: 4;

    @media only screen and (max-width: 767px) {
        margin-left: 0;
    }

    a + a {
        margin-left: 1rem;
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    flex-grow: .1;
    justify-content: space-between;

    a + a {
        margin-left: .5rem;
    }

    @media only screen and (max-width: 767px) {
        display: None;
    }
`;