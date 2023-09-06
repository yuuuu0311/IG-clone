import { twMerge } from "tw-merge";
import classNames from "classnames";

const Button = ({
    isFollowByViewr,
    isShowSuggested,
    children,
    handleClick,
}) => {
    console.log(isFollowByViewr);
    // isFollowByViewr 追蹤或追蹤中
    // isShowSuggested 顯示推薦用戶

    const btnClass = twMerge(
        classNames(
            "bg-slate-200 text-slate-800 rounded-lg flex items-center p-2 font-bold",
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
