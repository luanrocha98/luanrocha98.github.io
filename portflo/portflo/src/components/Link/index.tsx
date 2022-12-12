import React from 'react';
import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

import { StyledLink } from './styles';


const Link: React.FC<LinkProps> = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <StyledLink active={match ? true : false} to={to} {...props}>
            {children}
        </StyledLink>
    );
}

export default Link;
