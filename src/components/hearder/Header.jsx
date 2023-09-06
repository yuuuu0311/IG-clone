import InfoCount from "./InfoCount";
import Biography from "./Biography";
import Link from "./Link";

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
    const [userName] = [data.graphql.user.username];

    // console.log(avatarPic320);

    return (
        <header>
            <div className="flex">
                {/* <img
                    src="https://kayshih.com/_astro/personal.3098625f_Zlq8c9.webp"
                    alt=""
                /> */}
            </div>

            <div>
                <p>
                    <a href={`https://www.instagram.com/${userName}`}>
                        {userName}
                    </a>
                </p>
            </div>

            <ul>
                <InfoCount number={postCount}>貼文</InfoCount>
                <InfoCount number={followerCount}>位粉絲</InfoCount>
                <InfoCount number={follwingCount}>追蹤中</InfoCount>
            </ul>
            <>
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
