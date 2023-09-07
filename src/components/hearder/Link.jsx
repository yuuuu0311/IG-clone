// icon
import { AiOutlineLink } from "react-icons/ai";

const Link = ({ title, linkType, url, children }) => {
    const getTargetType = (linkType) => {
        if (linkType == "external") {
            return "_blank";
        } else {
            return false;
        }
    };

    return (
        <a
            href={url}
            target={getTargetType(linkType)}
            title={title.length != 0 || children}
            className="flex items-center font-bold text-sky-700"
        >
            {title.length != 0 || (
                <>
                    <AiOutlineLink></AiOutlineLink>
                    {children}
                </>
            )}
        </a>
    );
};

export default Link;
