import styled from 'styled-components';

export interface GridProps {
    columns: string;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(${(props: GridProps) => props.columns}, 1fr);
    gap: 3rem;
    padding: 1rem 4rem;

    @media only screen and (max-width: 767px) {
        & {
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem 0;
        }
    }
`;