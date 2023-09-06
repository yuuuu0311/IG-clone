const Biography = ({ children }) => {
    // 用 white-space 來處理純文字換行，避免使用innerHTML衍生的資安議題

    return <p className="whitespace-pre-wrap">{children}</p>;
};

export default Biography;
