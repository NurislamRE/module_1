'use strict';

(() => {
    const optionEng = ['rock', 'scissors', 'paper'];
    const optionRu = ['камень', 'ножницы', 'бумага'];

    const gameLanguageEng = {
        figures: 'rock, scissors, paper',
        prompt: 'Choose: rock, scissors, paper',
        incorrectPrompt: 'You have entered incorrect data!',
        draw: 'A draw! You both chose: ',
        won: `You've won! You chose: `,
        lose: `You've lost! You chose: `,
        compChoose: 'computer chose: ',
        gameAgain: 'Still want to play?',
        resultComp: `Result: 
        Computer won: `,
        resultYou: 'You won: ',
    };
    const gameLanguageRu = {
        figures: 'камень, ножницы, бумага',
        prompt: 'Выберите: камень, ножницы, бумага',
        incorrectPrompt: 'Вы ввели некорректные данные!',
        draw: 'Ничья! Вы оба выбрали: ',
        won: 'Вы выиграли! Вы выбрали: ',
        lose: 'Вы проиграли! Вы выбрали: ',
        compChoose: 'компьютер выбрал: ',
        gameAgain: 'Еще хотите поиграть?',
        resultComp: `Результат: 
        Компьютер выиграл: `,
        resultYou: 'Вы выиграли: '
    };

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getFigureByIndex = (index, lang) => {
        let indexValue = optionRu;
        
        if (lang === 'En' || lang === 'Eng')
            indexValue = optionEng;
        
        return indexValue[index];
    };

    const getIndex = (value, lang) => {
        if (lang === 'En' || lang === 'Eng')
            return optionEng.findIndex(item => item.substring(0, 1).includes(value));

        return optionRu.findIndex(item => item.substring(0, 1).includes(value));
    };

    const game = lang => {
        const result = {            
            player: 0,
            computer: 0,
        };

        return function Start() {
            let arrByLang = gameLanguageRu;

            if(lang === 'Eng' || lang === 'En')
                arrByLang = gameLanguageEng;

            const playerValue = prompt(`${arrByLang['prompt']}`);
            
            if (playerValue < 0) {
                alert(`${arrByLang['incorrectPrompt']}`);
                return Start();
            }        
            const subPlayerValue = playerValue.substring(0, 1);

            const playerIndex = getIndex(subPlayerValue, lang);        
        
            if (playerIndex < 0) {
                alert(`${arrByLang['incorrectPrompt']}`);
                return Start();
            }

            const botIndex = getRandomIntInclusive(0, 2);

            if (playerIndex === botIndex) {
                alert(`${arrByLang['draw']} ${getFigureByIndex(playerIndex, lang)}`);
                return Start();
            }
                        
            if ((playerIndex === 0 && botIndex === 1) || (playerIndex === 1 && botIndex === 2) || (playerIndex === 2 && botIndex === 0)) {
                result.player++;
                alert(`${arrByLang['won']} ${getFigureByIndex(playerIndex, lang)}, ${arrByLang['compChoose']} ${getFigureByIndex(botIndex, lang)}`);
            } else {
                result.computer++;
                alert(`${arrByLang['lose']} ${getFigureByIndex(playerIndex, lang)}, ${arrByLang['compChoose']} ${getFigureByIndex(botIndex, lang)}`);
            }
            
            const gameAgain = confirm(`${arrByLang['gameAgain']}`);
            console.log(gameAgain);
            if (gameAgain) 
                return Start();
            else 
                alert(`${arrByLang['resultComp']} ${result.player}
                    ${arrByLang['resultYou']} ${result.computer}`);
        };        
    };      

    window.RPS = game;
})();


