!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={btnReal:document.querySelector(".real"),btnFake:document.querySelector(".fake"),newGame:document.querySelector(".btn--newGame"),score:document.querySelector(".score"),badAnswer:document.querySelector(".bad-answer"),goodAnswer:document.querySelector(".good-answer"),darkMode:document.querySelector("#darkmode"),body:document.querySelector("body"),tweetContent:document.querySelector(".tweet__content p"),tweetLikes:document.querySelector(".likes"),tweetTime:document.querySelector(".tweet__info-time")},o=[{tweet:"have never seen a thin person drinking  Diet Coke.",likes:"119k",time:"8:43 PM - Oct 14, 2012",answer:!0},{tweet:"Hey Canada. You're getting a wall too you Snow Mexicans",likes:"6,663",time:"4:13 PM - Apr 01, 2018",answer:!1},{tweet:"Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",likes:"158k",time:"3:37 AM - May 9, 2013",answer:!0},{tweet:"If Iran does not cooperate, I will buy the Middle East nd lease back to the U.S. #EffectiveForeignPolicy",likes:"281",time:"10:08 AM - Aug 25, 2016",answer:!1},{tweet:"I loved beating these two terrible human beings. I would never recommend that anyone use her lawyer, he is a total loser!",likes:"62",time:"1:24 AM - May 24, 2013",answer:!0},{tweet:"Thank you Kanye, very cool!",likes:"346k",time:"12:33 PM - Apr 25 2018",answer:!0},{tweet:"#Kanye and I are such good friends because we have such great, tenuous, grip on reality. BFF!",likes:"621k",time:"09:21 PM - Oct 12 2018",answer:!1},{tweet:"INVASION! They are coming to KILL you, then RAPE you! Build the wall! Don't need to talk to my Sec of Defense! No time! I know more about this then all my Generals! Trust ME!",likes:"621k",time:"7:14 AM - Feb 17 2018",answer:!1}],a=function(e){r.score.innerHTML=e},i=function(){r.body.classList.contains("darkmode")?r.body.classList.remove("darkmode"):r.body.classList.add("darkmode")},s=function(e){e.style.display="flex",setTimeout(function(){e.style.display="none"},1500)};function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l={},u=function(){l.tweets=c(o),l.score=0,a(l.score),r.btnReal.addEventListener("click",w),r.btnFake.addEventListener("click",f),d()},d=function(){if(0<l.tweets.length){var e=Math.floor(Math.random()*(l.tweets.length-0))+0,t=y(l.tweets[e].tweet);r.tweetContent.innerHTML=t,r.tweetLikes.textContent=l.tweets[e].likes,r.tweetTime.textContent=l.tweets[e].time,l.activeTweet=l.tweets[e]}},y=function(e){var t=/(@\S+)/gi,n=e.match(t);return e.replace(t,'<a href="#">'.concat(n,"</a>"))},w=function(){m(!0)},f=function(){m(!1)},m=function(e){l.activeTweet.answer===e?(s(r.goodAnswer),l.score+=1,a(l.score)):s(r.badAnswer);var t=l.tweets.indexOf(l.activeTweet);l.tweets.splice(t,1),d()};n(0),window.addEventListener("load",function(){console.log("\n    ⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⣿⣿⣿ ⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣰⣶⣽⣽⣷⣶⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿ ⠁⠄⠄⠄⠄⠄⡀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣆⡀⠄⠄⠄⠄⠄⣀⠄⠄⣿⣿⣿ ⠄⠄⠄⠄⣤⣾⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣷⣶⣾⣿⠄⢀⣿⣿⣿ ⠄⠄⠄⠈⠉⠰⣷⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⢿⡿⣿⣿⠄⢸⣷⣿⣿ ⠄⠄⠄⠄⢀⣼⣿⣻⣿⡿⠿⠿⠆⠄⠄⠄⠈⢙⣿⡇⠉⠄⠄⠄⠄⣰⣞⡏⠄⢸⡿⣿⣿ ⢀⠄⠄⢀⢸⢿⣿⣟⣷⣦⣶⣶⣶⣶⣶⣷⣐⣼⣿⣷⠄⣠⣴⣤⣤⣄⢉⡄⠄⠸⠇⣿⣿ ⣶⣇⣤⡎⠘⠁⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣾⣿⣿⣿⣾⣿⣿⡇⡶⣥⣴⣿⣿ ⢣⣛⡍⠸⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿⠏⢈⣿⣿⣿⡇⢿⣿⣿⣿⣿⡿⠃⠄⢜⣿⣿⣿ ⠃⠋⠼⠥⠄⢠⠄⠐⣠⣿⣿⣿⣿⡿⢁⠈⠉⠛⠛⠛⠋⠈⠟⣿⣿⡏⠄⢸⢸⣽⣿⣿⣿ ⠄⠄⠄⠄⠄⠈⠄⠠⢿⣿⣿⣿⣿⣿⣿⣿⣾⣦⣤⣀⣤⣤⡀⢨⠿⣇⠄⣿⣻⣿⣿⣿⣿ ⠄⣾⣾⡇⡀⠄⠄⢀⢢⣽⣿⣿⡿⠿⠻⠿⠛⠛⠿⠛⠻⠜⡽⣸⣿⣿⠿⢿⣿⣿⣿⣿⣿ ⣷⠎⢡⡭⠂⠄⠄⠄⠄⠺⣿⣿⣷⣾⢿⠙⠛⠛⠛⠛⠛⠳⢶⣿⣿⡿⢋⣿⣿⣿⣿⣿⣿ ⠁⠄⢸⣿⡄⡀⠄⠄⠄⠈⠙⠽⣿⣷⣷⣶⣿⣿⣿⣶⣤⣠⣬⣏⠉⠁⣾⣿⣿⣿⣿⣿⣿ ⠄⠄⢸⣿⣿⣦⡀⠄⠄⠄⠄⠄⠈⠛⠛⡟⠿⡿⢻⠛⠟⠿⠋⠁\n    "),r.newGame.addEventListener("click",u),r.darkMode.addEventListener("click",i),document.querySelector(".loader").style.display="none",document.querySelector(".game__wrapper").style.display="flex",u()})}]);