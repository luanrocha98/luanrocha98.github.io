import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Context } from '../../context';
import getContent from '../../utils/getContent';
import { useParams } from 'react-router';
import Container from '../../components/Container';
import PostItem, { IPostView } from '../../components/Post';
import { EmptyMessage } from './styles';

const Post: React.FC = () => {
    const { page, post } = useParams();
    const content = getContent();
    const context = useContext(Context);
    const currentLanguage = context!.state.language || content.language[0];

    const getPost = useCallback((): IPostView | undefined => {
        try {
            const currentPage = content.page[page || ''];
            const currentPost = currentPage.content![post || ''];

            const postContent = currentPost.content.map(c => {
                if (c.type == 'image')
                    return {
                        type: c.type,
                        source: c.source,
                        value: undefined,
                        url: undefined
                    }

                else if (c.type == 'figma')
                    return {
                        type: c.type,
                        source: undefined,
                        value: undefined,
                        url: c.url || ''
                    }

                else
                    return {
                        type: c.type,
                        source: undefined,
                        value: c.value ? c.value[currentLanguage] : '',
                        url: undefined
                    }
            });

            let postView: IPostView = {
                title: currentPost.title[currentLanguage],
                cover: currentPost.cover,
                description: currentPost.description ? currentPost.description[currentLanguage] : '',
                subtitle: currentPost.subtitle ? currentPost.subtitle[currentLanguage] : '',
                tags: currentPost.tags || [''],
                content: postContent
            }

            return postView;
        }
        catch {
            return
        }
    }, [page, content]);

    const [postView, setPost] = useState<IPostView | undefined>(getPost());
    const [emptyText, setEmptyText] = useState<string>(content.empty[currentLanguage]);

    useEffect(() => {
        setPost(getPost());
        setEmptyText(content.empty[currentLanguage]);
    }, [page, post, context, getPost, content, currentLanguage]);

    return (
        <>
            {
                postView ? (
                    <PostItem {...postView} />
                ) : (
                    <Container>
                        <EmptyMessage>{emptyText}</EmptyMessage>
                    </Container>
                )
            }

        </>
    )
}

export default Post;