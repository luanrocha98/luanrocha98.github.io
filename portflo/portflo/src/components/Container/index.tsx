import React, { PropsWithChildren } from 'react';

import { StyledContainer } from './styles';


const Container: React.FC<PropsWithChildren> = ({ children }) => (
    <StyledContainer> {children} </StyledContainer>
)

export default Container;