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
    // count
    const [postCount, followerCount, follwingCount] = [
        data.graphql.user.edge_owner_to_timeline_media.count,
        data.graphql.user.edge_followed_by.count,
        data.graphql.user.edge_follow.count,
    ];

    // biography
    const { biography, bio_links } = data.graphql.user;

    // mutualFollower
    const [mutualFollowerList, mutualFollowerCount] = [
        data.graphql.user.edge_mutual_followed_by.edges,
        data.graphql.user.edge_mutual_followed_by.count,
    ];

    // username
    const [userName, fullName, categoryName] = [
        data.graphql.user.username,
        data.graphql.user.full_name,
        data.graphql.user.category_name,
    ];

    const [isFollowByViewr, setFollowByViewr] = useState(
        data.graphql.user.followed_by_viewer
    );
    const [isShowSuggested, setShowSuggested] = useState(
        data.show_suggested_profiles
    );

    return (
        <header>
            <div className="flex">
                {/* <img
                    src="https://kayshih.com/_astro/personal.3098625f_Zlq8c9.webp"
                    alt=""
                /> */}
            </div>

            <div className="flex gap-2 items-center">
                <b>
                    <a href={`https://www.instagram.com/${userName}`}>
                        {userName}
                    </a>
                </b>
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

            <ul className="flex gap-3">
                <InfoCount number={postCount}>貼文</InfoCount>
                <InfoCount number={followerCount}>位粉絲</InfoCount>
                <InfoCount number={follwingCount}>追蹤中</InfoCount>
            </ul>

            <>
                <b>{fullName}</b>
                <p>{categoryName}</p>
                <Biography>{biography}</Biography>
            </>
            <>
                {bio_links.map((link, index) => {
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

            <>
                <div>
                    {mutualFollowerList.map((ele, index) => {
                        // https://www.instagram.com/tim_learn_software/
                        return (
                            <>
                                <a href={`https://www.instagram.com/${ele}/`}>
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
            </>
        </header>
    );
};

export default Header;
