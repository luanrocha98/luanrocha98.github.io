import React, { HTMLAttributes } from 'react';
import Link from '../Link';
import { ICover } from '../../@types';
import Image from '../Image';
import { Title as StyledTitle, CoverWrapper, PreviewTitle, Wrapper, Header, Content, Subtitle, Description, Tags, Head, Body, Text } from './styles';
import Container from '../Container';
import Icon from '../Icon';
import { useNavigate } from 'react-router';
import sanitizeHTML from 'sanitize-html';

export interface IPreviewProps {
    url: string,
    title: string,
    thumbnail: string,
    expand: boolean,
    hover?: boolean
}
export interface IPostView {
    title: string,
    subtitle: string,
    description: string,
    tags: string[],
    cover?: ICover,
    content: {
        type: string,
        source?: string,
        value?: string,
        url?: string
    }[]
}

interface SubCoponents {
    Preview: React.FC<IPreviewProps>,
    Cover: React.FC<ICover>,
    Title: React.FC,
}

const Title: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => (
    <StyledTitle {...props} />
);

const Cover: React.FC<ICover> = ({ source, ...props }) => (
    <CoverWrapper {...props}>
        <Container>
            <Image src={source} loader={false} height='15rem' width='auto' />
        </Container>
    </CoverWrapper>
);

const Preview: React.FC<IPreviewProps> = ({ url, title, thumbnail, expand, hover }) => {
    const children = (
        <>
            <Image src={thumbnail} hover={hover} />
            <PreviewTitle dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }} />
        </>
    );

    return (
        <>
            {expand ? (
                <Link to={'post/' + url}>
                    {children}
                </Link>
            ) : (
                <div>
                    {children}
                </div>
            )}
        </>
    );
}



const Post: React.FC<IPostView> & SubCoponents = (post) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const formatTags = (tags: string[]): string => {
        return tags.map(tag => '#' + tag).join(' ');
    };

    return (
        <Wrapper cover={Object.keys(post.cover || {}).length === 0 ? false : true}>
            {post.cover && (
                <Cover {...post.cover} />
            )}
            <Container>
                <Header>
                    <Icon pointer onClick={goBack}>navigate_before</Icon>
                    <Title dangerouslySetInnerHTML={{ __html: sanitizeHTML(post.title) }} />
                </Header>
                <Content>
                    <Head>
                        <Subtitle>{post.subtitle}</Subtitle>
                        <Description>{post.description}</Description>
                        <Tags>{formatTags(post.tags)}</Tags>
                    </Head>
                    <Body>
                        {
                            post.content!.map((content, key) => (
                                <>
                                    {
                                        content.type == 'text' && (
                                            <Text key={key} dangerouslySetInnerHTML={{ __html: sanitizeHTML(content.value || '') }} />
                                        )
                                    }
                                    {
                                        content.type == 'image' && (
                                            <Image key={key} src={content.source!} />
                                        )
                                    }
                                    {
                                        content.type == 'figma' && (
                                            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="450" allowFullScreen={true} src={content.url} />
                                        )
                                    }
                                </>
                            ))
                        }
                    </Body>
                </Content>
            </Container>
        </Wrapper>
    )
}

Post.Preview = Preview;
Post.Title = Title;
Post.Cover = Cover;

export default Post;