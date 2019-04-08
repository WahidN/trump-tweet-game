import { Elements } from './config';

export const updateScoreView = (score) => {
    Elements.score.innerHTML = score
}

export const darkMode = () => {
    if (Elements.body.classList.contains('darkmode')) {
        Elements.body.classList.remove('darkmode')
    } else {
        Elements.body.classList.add('darkmode')
    }
}

export const showAnswer = (element) => {
    element.style.display = 'flex';
    setTimeout(() => {
        element.style.display = 'none';
    }, 1500)
}