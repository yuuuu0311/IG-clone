import { twMerge } from "tw-merge";
import classNames from "classnames";

const Button = ({
    isFollowByViewr,
    isShowSuggested,
    children,
    handleClick,
    link,
}) => {
    // isFollowByViewr 追蹤或追蹤中
    // isShowSuggested 顯示推薦用戶

    const btnClass = twMerge(
        classNames(
            "flex items-center font-bold text-neutral-800 text-sm",
            {
                "px-3 py-2 bg-neutral-200 rounded-lg": !link,
            },
            {
                "bg-blue-500 text-white": isFollowByViewr == false,
            }
        )
    );

    return (
        <button className={btnClass} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
