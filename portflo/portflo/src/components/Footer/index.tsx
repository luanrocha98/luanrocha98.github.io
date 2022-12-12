import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import getContent from '../../utils/getContent';

import { StyledFooter, Name, SocialMedias, Text, Wrapper } from './styles';
import SocialMedia from '../SocialMedia';
import Container from '../Container';

const Footer: React.FC = () => {
    const content = getContent();
    const context = useContext(Context);

    const current_language = context!.state.language || content.language[0];

    const getUsername = useCallback((): string => {
        return content.username[current_language];
    }, [content, current_language]);

    const getTexts = useCallback((): string[] => {
        return content.footer.content.map(text => text[current_language]);
    }, [content, current_language]);

    const getSocialText = useCallback((): string => {
        return content.footer.socialText[current_language];
    }, [content, current_language]);

    const [username, setUsername] = useState<string>(getUsername());
    const [texts, setTexts] = useState<string[]>(getTexts());
    const [socialText, setSocialText] = useState<string>(getSocialText());

    useEffect(() => {
        document.title = getUsername() || "Portflo";
        setUsername(getUsername());
        setTexts(getTexts());
        setSocialText(getSocialText());
    }, [context, getUsername, getTexts, getSocialText]);

    return (
        <Wrapper>
            <Container>
                <StyledFooter>
                    <div>
                        <Name>{username}</Name>
                        {
                            texts.map((text, key) => (
                                <Text key={key}>{text}</Text>
                            ))
                        }
                    </div>
                    <div>
                        <Text>{socialText}</Text>
                        <SocialMedias>
                            {
                                Object.keys(content.social).map((platform, key) => (
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