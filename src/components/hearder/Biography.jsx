import reactStringReplace from "react-string-replace";

const Biography = ({ children }) => {
    const { raw_text, entities } = children;

    const addLinkToText = (textElement, mapingList) => {
        let replacedText;

        mapingList.map(() => {
            replacedText = reactStringReplace(
                textElement,
                /@([\w.]+)/g, // 正則表達式，要在閱讀資料
                (match, i) => (
                    <a
                        className="text-sky-700"
                        key={match + i}
                        href={`https://www.instagram.com/${match}`}
                    >
                        {`@${match}`}
                    </a>
                )
            );
        });

        return replacedText;
    };

    return (
        // 用 white-space 來處理純文字換行，避免使用innerHTML衍生的資安議題
        <p className="whitespace-pre-wrap">
            {addLinkToText(raw_text, entities)}
        </p>
    );
};

export default Biography;
