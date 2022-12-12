import React, { ImgHTMLAttributes } from 'react';
import useImage from '../../utils/useImage';

import { Wrapper, Loading, StyledImage } from './styles';

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    round?: boolean;
    width?: string;
    height?: string;
    loader?: boolean;
    hover?: boolean;
}

const Image: React.FC<IImageProps> = ({ src, loader = true, ...rest }) => {
    const [image, loading,] = useImage(src || '');

    if (!src)
        return (<></>);

    return (
        <Wrapper>
            {loading && loader && (
                <Loading {...rest} />
            )}
            {!loading && (
                <StyledImage src={image} {...rest} />
            )}
        </Wrapper>
    )
};

export default Image;