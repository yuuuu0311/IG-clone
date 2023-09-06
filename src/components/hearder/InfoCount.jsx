const InfoCount = ({ number, children }) => {
    const numberToChineseUnit = (num) => {
        if (num >= 100000000) {
            const quotient = Math.floor(num / 100000000); // 计算亿位
            return quotient + "億";
        }
        if (num >= 10000) {
            const quotient = Math.floor(num / 10000); // 计算万位
            return quotient + "萬";
        }
        if (num >= 1000) {
            const quotient = Math.floor(num / 1000); // 计算千位
            return quotient + "千";
        }

        return num.toString(); // 如果都不满足条件，直接返回原数字
    };

    return (
        <li>
            <span className="font-bold">{numberToChineseUnit(number)}</span>
            <span>{children}</span>
        </li>
    );
};

export default InfoCount;
