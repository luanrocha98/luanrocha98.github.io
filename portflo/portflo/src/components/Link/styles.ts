import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export interface ILinkProps extends LinkProps {
    active?: boolean;
}

export const StyledLink = styled(Link) <ILinkProps>`
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.color.secondary};
    padding: .5rem;

    ${(props: ILinkProps) => props.active && css`
        border-bottom: 2px solid ${props => props.theme.color.secondary};
    `}
`;