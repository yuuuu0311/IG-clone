import { useState } from "react";

import Post from "./Post";

import data from "../../asset/mockData.json";

const Content = ({}) => {
    // const { postList:  } = data.graphql.user.edge_owner_to_timeline_media.edges;

    const {
        graphql: {
            user: {
                edge_owner_to_timeline_media: { edges: postList },
            },
        },
    } = {
        graphql: {
            user: {
                edge_owner_to_timeline_media: {
                    edges: data.graphql.user.edge_owner_to_timeline_media.edges,
                },
            },
        },
    };

    return (
        <section className="grid gap-1 grid-cols-3">
            {postList.map((ele, index) => {
                console.log(ele);

                const {
                    node: {
                        __typename: postType,
                        edge_media_preview_like: { count: likedCountPreview },
                        edge_media_to_comment: { count: commentCount },
                        pinned_for_users: pinnedList,
                    },
                } = {
                    node: {
                        __typename: ele.node.__typename,
                        edge_media_preview_like: {
                            count: ele.node.edge_media_preview_like.count,
                        },
                        edge_media_to_comment: {
                            count: ele.node.edge_media_to_comment.count,
                        },

                        // is pin
                        pinned_for_users: [...ele.node.pinned_for_users],
                    },
                };

                return (
                    <Post
                        key={index}
                        postType={postType}
                        likedCountPreview={likedCountPreview} // 愛心數
                        commentCount={commentCount} // 留言數
                        pinnedList={pinnedList}
                    ></Post>
                );
            })}
        </section>
    );
};

export default Content;
