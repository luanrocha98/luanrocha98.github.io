import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import useContent from '../../utils/useContent';
import Link from '../Link';
import Image from '../Image';

import { StyledHeader, Name, Person, Nav, SocialMedias, Wrapper } from './styles';
import SocialMedia from '../SocialMedia';
import Container from '../Container';
import { IContent } from '../../@types';

const Header: React.FC = () => {
    const { content } = useContent();
    const context = useContext(Context);

    const getUsername = (content: IContent, current_language: string): string => {
        return content.username[current_language];
    };

    const getPages = (content: IContent, current_language: string): [string, string][] => {
        return Object.keys(content.page).map(url => [url, content.page[url].title[current_language]])
    };

    const [username, setUsername] = useState<string>()
    const [pages, setPages] = useState<[string, string][]>()

    useEffect(() => {
        if (!content)
            return

        const current_language = context!.state.language || content!.language[0];
        document.title = getUsername(content, current_language) || "Portflo";
        setUsername(getUsername(content, current_language));
        setPages(getPages(content, current_language));
    }, [context, content]);

    return (
        <Wrapper>
            <Container>
                <StyledHeader>
                    <Person>
                        <Image round={content && content.icon.round} src={content && content.icon.source} width="3rem" height="3rem" />
                        <Name>{username}</Name>
                    </Person>
                    <Nav>
                        {
                            pages && pages.map(([url, title], key) => (
                                <Link key={key} to={url}>{title}</Link>
                            ))
                        }
                    </Nav>
                    <SocialMedias>
                        {
                            content && Object.keys(content.social).map((platform, key) => (
                                <SocialMedia key={key} platform={platform} href={content!.social[platform]} />
                            ))
                        }
                    </SocialMedias>
                </StyledHeader>
            </Container>
        </Wrapper>
    );
}

export default Header;