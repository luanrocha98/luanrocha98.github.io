import styled, { css } from 'styled-components';

interface Props {
    pointer?: boolean;
}

export const MaterialIcon = styled.i`

    font-family: 'Material Icons';
    text-indent: .5rem; 
    font-weight: normal;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: 'liga';
    -moz-font-feature-settings: 'liga';
    font-feature-settings: 'liga';

    ${(props: Props) => props.pointer && css`
        cursor: pointer;
    `}

`;