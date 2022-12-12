import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Context } from '../../context';
import getContent from '../../utils/getContent';
import { useParams } from 'react-router';
import { EmptyMessage } from './styles';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Post, { IPreviewProps } from '../../components/Post';

const Page: React.FC = () => {
    const { page } = useParams();
    const content = getContent();
    const context = useContext(Context);

    const current_language = context!.state.language || content.language[0];

    const getPosts = useCallback((): IPreviewProps[] | undefined => {
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
    }, [page, content, current_language]);

    const getColumns = useCallback((): string => {
        try {
            return content.page[page || ''].columns;
        }
        catch {
            return ''
        }
    }, [page, content])

    const [posts, setPosts] = useState<IPreviewProps[] | undefined>(getPosts());
    const [emptyText, setEmptyText] = useState<string>(content.empty[current_language]);
    const [columns, setColumns] = useState<string>(getColumns());

    useEffect(() => {
        setPosts(getPosts());
        setEmptyText(content.empty[current_language]);
        setColumns(getColumns());
    }, [page, context, getPosts, getColumns, content, current_language]);

    return (
        <Container>
            {posts && posts.length > 0 ? (
                <Grid columns={columns}>
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