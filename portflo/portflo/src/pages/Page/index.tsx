import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Context } from '../../context';
import useContent from '../../utils/useContent';
import { useParams } from 'react-router';
import { EmptyMessage } from './styles';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Post, { IPreviewProps } from '../../components/Post';
import { IContent } from '../../@types';

const Page: React.FC = () => {
    const { page } = useParams();
    const { content } = useContent();

    const context = useContext(Context);

    const getColumns = useCallback((content: IContent): string => {
        try {
            return content.page[page || ''].columns;
        }
        catch {
            return ''
        }
    }, [page]);

    const getPosts = useCallback((content: IContent, current_language: string): IPreviewProps[] | undefined => {
        try {
            const current_page = content.page[page || ''];
            return Object.keys(current_page.content!).map(key => {
                let post = current_page.content![key];
                let result: IPreviewProps = {
                    url: key,
                    hover: post.hover || false,
                    title: post.title[current_language],
                    thumbnail: post.thumbnail,
                    expand: post.expand || false
                };

                return result;
            })
        }
        catch {
            return
        }
    }, [page]);

    const [posts, setPosts] = useState<IPreviewProps[] | undefined>();
    const [emptyText, setEmptyText] = useState<string>('');
    const [columns, setColumns] = useState<string>();

    useEffect(() => {
        if (!content)
            return

        const current_language = context!.state.language || content!.language[0];

        setPosts(getPosts(content!, current_language!));
        setEmptyText(content!.empty[current_language!]);
        setColumns(getColumns(content!));

    }, [content, context, getColumns, getPosts]);

    return (
        <Container>
            {posts && posts.length > 0 ? (
                <Grid columns={columns!}>
                    {
                        posts!.map((post, key) => (
                            <Post.Preview {...post} key={key} />
                        ))
                    }
                </Grid>
            ) : (
                <EmptyMessage>{emptyText}</EmptyMessage>
            )}
        </Container>
    )
}

export default Page;