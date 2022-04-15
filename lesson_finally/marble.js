'use strict';

(() => {    

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);        
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const computerNumberIsEven = () => {
        return Math.round(Math.random()) === 1 ? false : true;
    };
    
    const game = (isUserWon) => {        
        const balls = {
            playerBalls: 5,
            computerBalls: 5,
        }
        const playerNumber = () => {               
            
            
            const ballPrompt = +prompt(`Загадайте число от 1 до ${balls.playerBalls}`);
            
            if (Number.isNaN(ballPrompt))
                return playerNumber();
            
            if (ballPrompt > balls.playerBalls || ballPrompt < 0)
                return playerNumber();
                
            if (computerNumberIsEven()) {
                if (ballPrompt % 2 === 0) {
                    alert('Компьютер выбрал четное число! Компьютер получает шарики!');
                    balls.playerBalls -= ballPrompt;
                    balls.computerBalls += ballPrompt;
                } else {
                    alert('Компьютер выбрал четное число! Вы получаете шарики!');
                    balls.playerBalls += ballPrompt;
                    balls.computerBalls -= ballPrompt;
                }   
            } else {
                if (ballPrompt % 2 === 1) {
                    alert(`Компьютер выбрал нечетное число! Он получает шарики!`);
                    balls.playerBalls -= ballPrompt;
                    balls.computerBalls += ballPrompt;
                } else {
                    alert('Компьютер выбрал нечетное число! Вы получаете шарики!');
                    balls.playerBalls += ballPrompt;
                    balls.computerBalls -= ballPrompt;
                }
            }

            if (balls.playerBalls < 1) {
                const gameAgain = confirm('Вы проиграли! Хотите еще поиграть?');
                if(gameAgain) {
                    balls.playerBalls = 5;
                    balls.computerBalls = 5;
                    const startGame = window.RPS();
                    startGame();
                }
                    
            } else {
                if (balls.computerBalls < 1) {
                    const gameAgain = confirm('Вы выиграли! Хотите еще поиграть?');
                    if(gameAgain) {
                        balls.playerBalls = 5;
                        balls.computerBalls = 5;                                                
                        const startGame = window.RPS();
                        startGame();
                    } 
                } else computerNumber();                
            }
        }
        
        const computerNumber = () => {

            const computerPrompt = getRandomInt(1 , balls.computerBalls);
            
            const isEvenNumber = confirm('Компьютер гадал четное число?');

            if (isEvenNumber) {
                if (computerPrompt % 2 === 0) {
                    alert(`Компьютер загадал четное число - ${computerPrompt}! Вы получаете шарики!`);
                    balls.playerBalls += computerPrompt;
                    balls.computerBalls -= computerPrompt;                
                } else {
                    alert(`Компьютер выбрал нечетное число - ${computerPrompt}! Компьютер получает шарики!`);
                    balls.playerBalls -= computerPrompt;
                    balls.computerBalls += computerPrompt;
                }
            } else {
                if (computerPrompt % 2 === 0) {
                    alert(`Компьютер выбрал четное число - ${computerPrompt}! Компьютер получает шарики!`);
                    balls.playerBalls -= computerPrompt;
                    balls.computerBalls += computerPrompt;
                } else {
                    alert(`Компьютер выбрал нечетное число - ${computerPrompt}! Вы получаете шарики!`);
                    balls.playerBalls += computerPrompt;
                    balls.computerBalls -= computerPrompt;
                }
            }

            if (balls.playerBalls < 1) {
                const gameAgain = confirm('Вы проиграли! Хотите еще поиграть?');
                if (gameAgain) {
                    balls.playerBalls = 5;
                    balls.computerBalls = 5;
                    const startGame = window.RPS();
                    startGame();
                }
            } else {
                if (balls.computerBalls < 1) {
                    const gameAgain = confirm('Вы выиграли! Хотите еще поиграть?');
                    if (gameAgain) {
                        balls.playerBalls = 5;
                        balls.computerBalls = 5;
                        const startGame = window.RPS();
                        startGame();
                    }
                } else playerNumber();
                
            }
        }
        function runGame () {
            if (isUserWon)
                playerNumber();
            else
                computerNumber();
        }

        return runGame();
    }

    window.Marble = game;
})();