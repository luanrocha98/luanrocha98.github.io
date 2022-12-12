import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import getContent from '../../utils/getContent';
import Link from '../Link';
import Image from '../Image';

import { StyledHeader, Name, Person, Nav, SocialMedias, Wrapper } from './styles';
import SocialMedia from '../SocialMedia';
import Container from '../Container';

const Header: React.FC = () => {
    const content = getContent();
    const context = useContext(Context);

    const current_language = context!.state.language || content.language[0]

    const getUsername = useCallback((): string => {
        return content.username[current_language];
    }, [content, current_language])

    const getPages = useCallback((): [string, string][] => {
        return Object.keys(content.page).map(url => [url, content.page[url].title[current_language]])
    }, [content, current_language])

    const [username, setUsername] = useState<string>(getUsername())
    const [pages, setPages] = useState<[string, string][]>(getPages())

    useEffect(() => {
        document.title = getUsername() || "Portflo";
        setUsername(getUsername());
        setPages(getPages());
    }, [context, getUsername, getPages]);

    return (
        <Wrapper>
            <Container>
                <StyledHeader>
                    <Person>
                        <Image round={content.icon.round} src={content.icon.source} width="3rem" height="3rem" />
                        <Name>{username}</Name>
                    </Person>
                    <Nav>
                        {
                            pages.map(([url, title], key) => (
                                <Link key={key} to={url}>{title}</Link>
                            ))
                        }
                    </Nav>
                    <SocialMedias>
                        {
                            Object.keys(content.social).map((platform, key) => (
                                <SocialMedia key={key} platform={platform} href={content.social[platform]} />
                            ))
                        }
                    </SocialMedias>
                </StyledHeader>
            </Container>
        </Wrapper>
    );
}

export default Header;