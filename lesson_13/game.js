'use strict';

(() => {
    const figuresEng = ['rock', 'scissors', 'paper'];
    const figuresRu = ['камень', 'ножницы', 'бумага'];

    //#region Language 
    const promtByLang = lang => {
        if (lang === 'Eng' || lang === 'En') 
            return 'Choose: rock, scissors, paper';
        
        return 'Выберите: камень, ножницы, бумага';                      
    };

    const incorrectValueByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return 'You have entered incorrect data!';

        return 'Вы ввели некорректные данные!';
    }

    const drawByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return 'A draw! You both chose: ';

        return 'Ничья! Вы оба выбрали: ';
    }

    const wonByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return `You've won! You chose: `;

        return 'Вы выиграли! Вы выбрали: ';
    }

    const loseByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return `You've lost! You chose: `;

        return 'Вы проиграли! Вы выбрали: ';
    }

    const computerChooseByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return `computer chose: `;

        return 'компьютер выбрал: ';
    }

    const gameAgainByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return 'Still want to play?';

        return 'Еще хотите поиграть?';
    }

    const resultCompByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return `Result: 
                Computer won: `;

        return `Результат: 
            Компьютер выиграл: `;
    }

    const resultYouByLang = lang => {
        if (lang === 'Eng' || lang === 'En')
            return `You won: `;

        return `Вы выиграли: `;
    }
//#endregion
    
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getFigureByIndex = (index, lang) => {
        let indexValue = figuresRu;
        
        if (lang === 'En' || lang === 'Eng')
            indexValue = figuresEng;
        
        return indexValue[index];
    };

    const getIndex = (value, lang) => {
        if (lang === 'En' || lang === 'Eng')
            return figuresEng.findIndex(item => item.substring(0, 1).includes(value));

        return figuresRu.findIndex(item => item.substring(0, 1).includes(value));
    };

    const game = lang => {
        const result = {            
            player: 0,
            computer: 0,
        };

        return function Start() {
            const playerValue = prompt(`${promtByLang(lang)}`);
            
            if (playerValue < 0) {
                alert(`${incorrectValueByLang(lang)}`);
                return Start();
            }        
            const subPlayerValue = playerValue.substring(0, 1);

            const playerIndex = getIndex(subPlayerValue, lang);        
        
            if (playerIndex < 0) {
                alert(`${incorrectValueByLang(lang)}`);
                return Start();
            }

            const botIndex = getRandomIntInclusive(0, 2);

            if (playerIndex === botIndex) {
                alert(`${drawByLang(lang)} ${getFigureByIndex(playerIndex, lang)}`);
                return Start();
            }
                        
            if ((playerIndex === 0 && botIndex === 1) || (playerIndex === 1 && botIndex === 2) || (playerIndex === 2 && botIndex === 0)) {
                result.player++;
                alert(`${wonByLang(lang)} ${getFigureByIndex(playerIndex, lang)}, ${computerChooseByLang(lang)} ${getFigureByIndex(botIndex, lang)}`);
            } else {
                result.computer++;
                alert(`${loseByLang(lang)} ${getFigureByIndex(playerIndex, lang)}, ${computerChooseByLang(lang)} ${getFigureByIndex(botIndex, lang)}`);
            }
            
            const gameAgain = confirm(`${gameAgainByLang(lang)}`);
            console.log(gameAgain);
            if (gameAgain) 
                return Start();
            else 
                alert(`${resultCompByLang(lang)} ${result.player}
                    ${resultYouByLang(lang)} ${result.computer}`);
        };        
    };      

    window.RPS = game;
})();


