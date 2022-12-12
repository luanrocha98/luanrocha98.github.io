import React, { PropsWithChildren } from 'react';

import { Span } from './styles';


const Error: React.FC<PropsWithChildren> = ({ children }) => (
    <Span> {children} </Span>
)

export default Error;