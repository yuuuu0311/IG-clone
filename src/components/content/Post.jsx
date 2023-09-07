import classNames from "classnames";

// icon
// AiTwotonePushpin;
import { AiTwotonePushpin } from "react-icons/ai";
import { FaComment, FaHeart } from "react-icons/fa";
import { IoMdPhotos, IoIosFilm } from "react-icons/io";

import { twMerge } from "tw-merge";

// components

const Post = ({ postType, likedCountPreview, commentCount, pinnedList }) => {
    // console.log(postType);

    const previewcCountClass = twMerge(
        classNames("inline-flex gap-1 items-center text-xl")
    );

    const renderPostType = (pinnedList, postType) => {
        if (pinnedList.length > 0) {
            return <AiTwotonePushpin></AiTwotonePushpin>;
        } else if (postType == "GraphSidecar") {
            return <IoMdPhotos></IoMdPhotos>;
        } else if (postType == "GraphVideo") {
            return <IoIosFilm></IoIosFilm>;
        }
    };

    return (
        <div className="relative group bg-blue-500 aspect-square">
            {/* post thumd */}
            <div>{}</div>

            {/* post type */}
            <div className="absolute text-white top-0 right-0 m-3 text-2xl">
                {renderPostType(pinnedList, postType)}
            </div>

            {/* hover to see */}
            <div className="opacity-0 group-hover:opacity-100 transition flex absolute inset-0 justify-center gap-5 bg-black/25 text-white font-bold">
                <span className={previewcCountClass}>
                    <FaHeart></FaHeart>
                    {likedCountPreview}
                </span>
                <span className={previewcCountClass}>
                    <FaComment></FaComment>
                    {commentCount}
                </span>
            </div>
        </div>
    );
};

export default Post;
