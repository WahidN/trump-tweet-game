
export const Elements = {
    btnReal: document.querySelector('.real'),
    btnFake: document.querySelector('.fake'),
    newGame: document.querySelector('.btn--newGame'),
    score: document.querySelector('.score'),
    badAnswer: document.querySelector('.bad-answer'),
    goodAnswer: document.querySelector('.good-answer'),
    darkMode: document.querySelector('#darkmode'),
    body: document.querySelector('body'),
    tweetContent: document.querySelector('.tweet__content p')
}

export const Tweets = [
    {
        tweet: `Dopey @Lord_Sugar I'm worth $8 billion and you're worth peanuts...without my show nobody would even know who you are.`,
        likes: 123,
        date: new Date(),
        answer: true
    },
    {
        tweet: `jeeez whatsup.`,
        likes: 423,
        date: new Date(),
        answer: true
    },
    {
        tweet: `get of my lawn n****.`,
        likes: 432,
        date: new Date(),
        answer: true
    },
    {
        tweet: `tesdfsaferfst`,
        likes: 234,
        date: new Date(),
        answer: false
    },
    {
        tweet: `tsdfsdfsdf`,
        likes: 234,
        date: new Date(),
        answer: true
    },
    {
        tweet: `lol look at this tweet.`,
        likes: 23423,
        date: new Date(),
        answer: false
    },
    {
        tweet: `Aayy lmaoo.`,
        likes: 2342,
        date: new Date(),
        answer: true
    },
    {
        tweet: `Grab her by the pussy.`,
        likes: 2342,
        date: new Date(),
        answer: false
    }
]