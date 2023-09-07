import { useState } from "react";

import data from "../../asset/mockData.json";

const Content = ({}) => {
    // const { postList:  } = data.graphql.user.edge_owner_to_timeline_media.edges;

    const {
        graphql: {
            user: {
                edge_owner_to_timeline_media: {
                    edges: [...postList],
                },
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

    console.log(postList);

    return <section>GGGGG</section>;
};

export default Content;
