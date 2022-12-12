import styled from 'styled-components';

export const StyledContainer = styled.div`
    min-width: 100%;
    padding: 0 10rem;
    max-width: 100%;
    overflow-wrap: break-word;

    @media only screen and (max-width: 767px) {
        & {
            padding: 0 2.5rem;
        }
    }
}
`;