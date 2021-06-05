// Image import
import convert from './../image/screenshots/converter.png';
import calculate from './../image/screenshots/calculator.png';
import clocki from './../image/screenshots/clock.png';
import tutor from './../image/screenshots/document.png';
import drum from './../image/screenshots/drums.png';
import preview from './../image/screenshots/previewer.png';
import product from './../image/screenshots/product_landing.png';
import quotes from './../image/screenshots/randomQuote.png';
import survey from './../image/screenshots/survey.png';
import tributes from './../image/screenshots/tribute.png';
import oldPage from './../image/screenshots/website.png';
import focus from './../image/screenshots/weather.png';
import recipe from './../image/screenshots/recipe-lg.png';


const REPO = 'https://github.com/nhope123/';
const WEB = 'https://nhope123.github.io/';

// Projects card information
const cards = {
  recipe:{
    name:'Creole Food',
    description:'An online application for creating, editing, viewing and downloading of clients favorite recipes.',
    src: recipe,
    alt:'Creole Food ScreenShot',
    tags:['React','Redux','HTML','CSS','Bootstrap'],
    repository:`${REPO}creole_food`,
    website:`${WEB}creole_food/`,
  },
  weather:{
    name:'Weather Focus',
    description:'A location base weather service web application.',
    src: focus,
    alt:'Weather Focus ScreenShot',
    tags:['React','Redux','Sass','HTML','CSS'],
    repository:`${REPO}weather_focus`,
    website:`${WEB}weather_focus/`,
  },
  converter:{
    name:'Rebel Converter',
    description:'Online unit converter for length, weight and temperature.',
    src: convert,
    alt:'Converter ScreenShot',
    tags:['React','Redux','Sass','HTML','CSS'],
    repository:`${REPO}converter`,
    website:`${WEB}converter/`,
  },
  mixer:{
    name:'eFonic',
    description:'Sound effect drum machine.',
    src: drum,
    alt:'Drum Machine ScreenShot',
    tags:['React','HTML','CSS'],
    repository:`${REPO}drums`,
    website:`${WEB}drums/`,
  },
  clock:{
    name:'Rebel Pomodoro',
    description:'Web base countdown timer.',
    src: clocki,
    alt:'Pomodoro Clock ScreenShot',
    tags:['React','HTML','CSS'],
    repository:`${REPO}pomodoro`,
    website:`${WEB}pomodoro/`,
  },
  calculator:{
    name:'Calculator',
    description:'Online calculator.',
    src:calculate,
    alt:'Calculator ScreenShot',
    tags:['React','HTML','CSS','Mathjs'],
    repository:`${REPO}calculator`,
    website:`${WEB}calculator/`,
  },
  quote:{
    name:'Inspire',
    description:'Random programming quote machine',
    src: quotes,
    alt:'Quote Machine ScreenShot',
    tags:['React','HTML','CSS'],
    repository:`${REPO}inspire`,
    website:`${WEB}inspire/`,
  },
  markdown:{
    name:'PreMarked',
    description:'Markdown previewer',
    src: preview,
    alt:'Markdown Previewer ScreenShot',
    tags:['React','HTML','CSS','Marked.js'],
    repository:`${REPO}previewer`,
    website:`${WEB}previewer/`,
  },
  product:{
    name:'Hardcore Fitness',
    description:'Gym product landing page.',
    src: product,
    alt:'Product Landing Page ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:`${REPO}2020Portfolio/blob/master/webpages/product_landing.html`,
    website:`${WEB}2020Portfolio/webpages/product_landing.html`
  },
  tribute:{
    name:'Tribute',
    description:'St Vincent tribute page',
    src: tributes,
    alt:'Tribute ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:`${REPO}2020Portfolio/blob/master/webpages/tribute.html`,
    website:`${WEB}2020Portfolio/webpages/tribute.html`,
  },
  form:{
    name:'Survey',
    description:'Travel survey form',
    src: survey,
    alt:'Survey Form ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:`${REPO}2020Portfolio/blob/master/webpages/survey_form.html`,
    website:`${WEB}2020Portfolio/webpages/survey_form.html`,
  },
  tutorial:{
    name:'ShellCom',
    description:'Unix shell tutorial',
    src: tutor,
    alt:'Tutorial ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:`${REPO}2020Portfolio/blob/master/webpages/documentation.html`,
    website:`${WEB}2020Portfolio/webpages/documentation.html`,
  },
  portfolio:{
    name:'Old Portfolio',
    description:'Frond-End Portfolio created in 2020.',
    src: oldPage,
    alt:'Old Portfolio ScreenShot',
    tags:['React','HTML','CSS','JavaScript'],
    repository:`${REPO}2020Portfolio`,
    website:`${WEB}2020Portfolio`,
  }
};

export default cards;
