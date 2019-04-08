import { Tweets, Elements } from './config';
import * as View from './view';

const appState = {};

const addScore = () => {
    appState.score += 1;
    View.updateScoreView(appState.score);
}

const newGame = () => {
    appState.tweets = [...Tweets];
    appState.score = 0;
    View.updateScoreView(appState.score);
    Elements.btnReal.addEventListener('click', realTweet);
    Elements.btnFake.addEventListener('click', fakeTweet);
    loadTweet();
}

const randomNumber = () => {
    return Math.floor(Math.random() * (appState.tweets.length - 0)) + 0;
}

const loadTweet = () => {
    if (appState.tweets.length > 0) {
        const number = randomNumber();
        const filteredTweet  = replaceStr(appState.tweets[number].tweet);
        Elements.tweetContent.innerHTML = filteredTweet;
        Elements.tweetLikes.textContent = appState.tweets[number].likes;
        Elements.tweetTime.textContent = appState.tweets[number].time;
        appState.activeTweet = appState.tweets[number];
    }
}

const replaceStr = text => {
    const links = /(@\S+)/gi;
    const matchedWords = text.match(links)
    return text.replace(links, `<a href="#">${matchedWords}</a>`);
}

const realTweet = () => {
    checkAnswer(true)
}

const fakeTweet = () => {
    checkAnswer(false);
}

const checkAnswer = (value) => {
    const checkTweet = appState.activeTweet.answer;
    if (checkTweet === value) {
        View.showAnswer(Elements.goodAnswer);
        addScore();
    } else {
        View.showAnswer(Elements.badAnswer);
    }

    // remove tweet from array
    const index = appState.tweets.indexOf(appState.activeTweet);
    appState.tweets.splice(index, 1);
    loadTweet();
}

export const gameInit = () => {
    console.log(`
    ⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⣿⣿⣿ ⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣰⣶⣽⣽⣷⣶⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿ ⠁⠄⠄⠄⠄⠄⡀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣆⡀⠄⠄⠄⠄⠄⣀⠄⠄⣿⣿⣿ ⠄⠄⠄⠄⣤⣾⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣷⣶⣾⣿⠄⢀⣿⣿⣿ ⠄⠄⠄⠈⠉⠰⣷⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⢿⡿⣿⣿⠄⢸⣷⣿⣿ ⠄⠄⠄⠄⢀⣼⣿⣻⣿⡿⠿⠿⠆⠄⠄⠄⠈⢙⣿⡇⠉⠄⠄⠄⠄⣰⣞⡏⠄⢸⡿⣿⣿ ⢀⠄⠄⢀⢸⢿⣿⣟⣷⣦⣶⣶⣶⣶⣶⣷⣐⣼⣿⣷⠄⣠⣴⣤⣤⣄⢉⡄⠄⠸⠇⣿⣿ ⣶⣇⣤⡎⠘⠁⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣾⣿⣿⣿⣾⣿⣿⡇⡶⣥⣴⣿⣿ ⢣⣛⡍⠸⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿⠏⢈⣿⣿⣿⡇⢿⣿⣿⣿⣿⡿⠃⠄⢜⣿⣿⣿ ⠃⠋⠼⠥⠄⢠⠄⠐⣠⣿⣿⣿⣿⡿⢁⠈⠉⠛⠛⠛⠋⠈⠟⣿⣿⡏⠄⢸⢸⣽⣿⣿⣿ ⠄⠄⠄⠄⠄⠈⠄⠠⢿⣿⣿⣿⣿⣿⣿⣿⣾⣦⣤⣀⣤⣤⡀⢨⠿⣇⠄⣿⣻⣿⣿⣿⣿ ⠄⣾⣾⡇⡀⠄⠄⢀⢢⣽⣿⣿⡿⠿⠻⠿⠛⠛⠿⠛⠻⠜⡽⣸⣿⣿⠿⢿⣿⣿⣿⣿⣿ ⣷⠎⢡⡭⠂⠄⠄⠄⠄⠺⣿⣿⣷⣾⢿⠙⠛⠛⠛⠛⠛⠳⢶⣿⣿⡿⢋⣿⣿⣿⣿⣿⣿ ⠁⠄⢸⣿⡄⡀⠄⠄⠄⠈⠙⠽⣿⣷⣷⣶⣿⣿⣿⣶⣤⣠⣬⣏⠉⠁⣾⣿⣿⣿⣿⣿⣿ ⠄⠄⢸⣿⣿⣦⡀⠄⠄⠄⠄⠄⠈⠛⠛⡟⠿⡿⢻⠛⠟⠿⠋⠁
    `)
    Elements.newGame.addEventListener('click', newGame);   
    Elements.darkMode.addEventListener('click', View.darkMode);
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.game__wrapper').style.display = 'flex';

    newGame();
}

