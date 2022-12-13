import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import useContent from '../../utils/useContent';

import { StyledFooter, Name, SocialMedias, Text, Wrapper } from './styles';
import SocialMedia from '../SocialMedia';
import Container from '../Container';
import { IContent } from '../../@types';

const Footer: React.FC = () => {
    const { content } = useContent();
    const context = useContext(Context);

    const getUsername = (content: IContent, current_language: string): string => {
        return content.username[current_language];
    };

    const getTexts = (content: IContent, current_language: string): string[] => {
        return content.footer.content.map(text => text[current_language]);
    };

    const getSocialText = (content: IContent, current_language: string): string => {
        return content.footer.socialText[current_language];
    };

    const [username, setUsername] = useState<string>();
    const [texts, setTexts] = useState<string[]>();
    const [socialText, setSocialText] = useState<string>();

    useEffect(() => {
        if (!content)
            return

        const current_language = context!.state.language || content!.language[0];
        setUsername(getUsername(content, current_language));
        setTexts(getTexts(content, current_language));
        setSocialText(getSocialText(content, current_language));
    }, [context, content]);

    return (
        <Wrapper>
            <Container>
                <StyledFooter>
                    <div>
                        <Name>{username}</Name>
                        {
                            texts && texts.map((text, key) => (
                                <Text key={key}>{text}</Text>
                            ))
                        }
                    </div>
                    <div>
                        <Text>{socialText}</Text>
                        <SocialMedias>
                            {
                                content && Object.keys(content.social).map((platform, key) => (
                                    <SocialMedia key={key} platform={platform} href={content.social[platform]} />
                                ))
                            }
                        </SocialMedias>
                    </div>
                </StyledFooter>
            </Container>
        </Wrapper>
    );
}

export default Footer;