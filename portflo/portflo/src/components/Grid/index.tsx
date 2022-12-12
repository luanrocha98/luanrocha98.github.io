import React, { PropsWithChildren } from 'react';

import { Grid as StyledGrid, GridProps } from './styles';

interface IProps extends PropsWithChildren, GridProps { };

const Grid: React.FC<IProps> = ({ columns, children }) => {
    return (
        <StyledGrid columns={columns}>
            {children}
        </StyledGrid>
    );
}

export default Grid;