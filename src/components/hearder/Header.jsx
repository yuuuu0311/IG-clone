import { useState } from "react";

import InfoCount from "./InfoCount";
import Button from "./Button";
import Biography from "./Biography";
import Link from "./Link";

// icon
import { IoPersonAddOutline, IoPersonAdd } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

import data from "../../asset/mockData.json";

const Header = ({}) => {
    // Destructuring !!
    const {
        graphql: {
            user: {
                username: userName,
                full_name: fullName,
                category_name: categoryName,
                edge_owner_to_timeline_media: { count: postCount }, // po文數
                edge_followed_by: followerCount, // 追蹤者人數
                edge_follow: follwingCount, // 追蹤中人數
                bio_links: bioLinks,
                biography_with_entities: biographyWithEntities,

                // 共同追蹤
                edge_mutual_followed_by: {
                    count: mutualFollowerCount,
                    edges: [...mutualFollowerList],
                },
            },
        },
    } = {
        graphql: {
            user: {
                username: data.graphql.user.username,
                full_name: data.graphql.user.full_name,
                category_name: data.graphql.user.category_name,

                edge_owner_to_timeline_media: {
                    count: data.graphql.user.edge_owner_to_timeline_media.count,
                },
                edge_followed_by: data.graphql.user.edge_followed_by.count,
                edge_follow: data.graphql.user.edge_follow.count,
                bio_links: data.graphql.user.bio_links,
                biography_with_entities:
                    data.graphql.user.biography_with_entities,
                edge_mutual_followed_by: {
                    count: data.graphql.user.edge_mutual_followed_by.count,
                    edges: data.graphql.user.edge_mutual_followed_by.edges,
                },
            },
        },
    };

    // state
    const [isFollowByViewr, setFollowByViewr] = useState(
        data.graphql.user.followed_by_viewer
    );
    const [isShowSuggested, setShowSuggested] = useState(
        data.show_suggested_profiles
    );

    return (
        <header className="flex gap-10">
            <div className="flex items-center grow-1">
                <div className="overflow-hidden rounded-full w-48 h-48 m-auto">
                    <img
                        src="https://kayshih.com/_astro/personal.3098625f_Zlq8c9.webp"
                        alt=""
                    />
                </div>
            </div>

            <div className="grow-2">
                <div className="flex gap-2 items-strech mb-5">
                    <Button link>
                        <a href={`https://www.instagram.com/${userName}`}>
                            {userName}
                        </a>
                    </Button>
                    <Button
                        isFollowByViewr={isFollowByViewr}
                        handleClick={() => {
                            isFollowByViewr
                                ? setFollowByViewr(false)
                                : setFollowByViewr(true);
                        }}
                    >
                        {isFollowByViewr ? (
                            <>
                                <span>追蹤中</span>
                                <RiArrowDownSLine></RiArrowDownSLine>
                            </>
                        ) : (
                            "追蹤"
                        )}
                    </Button>
                    <Button>發送訊息</Button>
                    <Button
                        isShowSuggested
                        handleClick={() => {
                            isShowSuggested
                                ? setShowSuggested(false)
                                : setShowSuggested(true);
                        }}
                    >
                        {isShowSuggested ? (
                            <IoPersonAdd></IoPersonAdd>
                        ) : (
                            <IoPersonAddOutline></IoPersonAddOutline>
                        )}
                    </Button>
                </div>

                <ul className="flex gap-8 mb-8">
                    <InfoCount number={postCount}>貼文</InfoCount>
                    <InfoCount number={followerCount}>位粉絲</InfoCount>
                    <InfoCount number={follwingCount}>追蹤中</InfoCount>
                </ul>

                <div className="mb-5">
                    <b>{fullName}</b>
                    <p className="text-neutral-500">{categoryName}</p>
                    <Biography>{biographyWithEntities}</Biography>
                    <>
                        {bioLinks.map((link, index) => {
                            // console.log(link);
                            const { title, url, link_type } = link;
                            return (
                                <Link
                                    title={title}
                                    linkType={link_type}
                                    url={url}
                                    key={index}
                                >
                                    {url}
                                </Link>
                            );
                        })}
                    </>
                </div>

                <div className="text-sm text-neutral-500">
                    {mutualFollowerList.map((ele, index) => {
                        // https://www.instagram.com/tim_learn_software/
                        return (
                            <>
                                <a
                                    className="font-bold  text-neutral-800"
                                    href={`https://www.instagram.com/${ele}/`}
                                >
                                    {ele.node.username}
                                </a>
                                {index == mutualFollowerList.length - 1 || "、"}
                            </>
                        );
                    })}
                    {`和其他${
                        mutualFollowerCount - mutualFollowerList.length
                    }人都在追蹤`}
                </div>
            </div>
        </header>
    );
};

export default Header;
