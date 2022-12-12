import React, { PropsWithChildren } from 'react';

import { Container } from './styles';


const Main: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Main;