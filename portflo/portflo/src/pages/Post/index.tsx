import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Context } from '../../context';
import useContent from '../../utils/useContent';
import { useParams } from 'react-router';
import Container from '../../components/Container';
import PostItem, { IPostView } from '../../components/Post';
import { EmptyMessage } from './styles';
import { IContent } from '../../@types';

const Post: React.FC = () => {
    const { page, post } = useParams();
    const { content } = useContent();
    const context = useContext(Context);

    const getPost = useCallback((content: IContent, current_language: string): IPostView | undefined => {
        try {
            const currentPage = content.page[page || ''];
            const currentPost = currentPage.content![post || ''];

            const postContent = currentPost.content.map(c => {
                if (c.type === 'image')
                    return {
                        type: c.type,
                        source: c.source,
                        value: undefined,
                        url: undefined
                    }

                else if (c.type === 'figma')
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
                        value: c.value ? c.value[current_language] : '',
                        url: undefined
                    }
            });

            let postView: IPostView = {
                title: currentPost.title[current_language],
                cover: currentPost.cover,
                description: currentPost.description ? currentPost.description[current_language] : '',
                subtitle: currentPost.subtitle ? currentPost.subtitle[current_language] : '',
                tags: currentPost.tags || [''],
                content: postContent
            }

            return postView;
        }
        catch {
            return
        }
    }, [page, post]);

    const [postView, setPost] = useState<IPostView | undefined>();
    const [emptyText, setEmptyText] = useState<string>('');

    useEffect(() => {
        if (!content)
            return

        const current_language = context!.state.language || content!.language[0];
        setPost(getPost(content, current_language));
        setEmptyText(content.empty[current_language]);
    }, [page, post, content, context, getPost]);

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