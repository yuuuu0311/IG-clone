import Link from "./Link";

const Header = ({ biography, bioLinks }) => {
    // console.log(biography, bioLinks);

    // console.log(bioLinks);

    return (
        <div>
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
        </div>
    );
};

export default Header;
