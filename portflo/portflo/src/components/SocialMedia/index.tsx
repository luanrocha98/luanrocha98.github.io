import React, { AnchorHTMLAttributes } from 'react';
import { StyledAnchor } from './styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    platform: string
}

const SocialMedia: React.FC<Props> = ({ platform, ...rest }) => (
    <>
        <StyledAnchor title={(platform.split('-') || [''])[0]} target='_blank' {...rest}>
            <i className={`fab fa-${platform}`} />
        </StyledAnchor>
    </>
)

export default SocialMedia;