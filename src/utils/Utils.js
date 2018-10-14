class Utils {

    static calculateWinner(list) {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (var i = 0; i < winCombinations.length; i++) {
            const [a,b,c] = winCombinations[i];
            if (list[a] && list[a] === list[b] && list[a] === list[c]) {
                return true;
            }
        }
        return false;
    };
}

export default Utils;