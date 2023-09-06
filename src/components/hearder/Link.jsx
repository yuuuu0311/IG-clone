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
        >
            {title.length != 0 || children}
        </a>
    );
};

export default Link;
