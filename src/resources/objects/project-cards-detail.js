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

// Projects card information
const cards = {
  converter:{
    name:'Rebel Converter',
    description:'Online unit converter for length, weight and temperature.',
    src: convert,
    alt:'Converter ScreenShot',
    tags:['React','Redux','Sass','HTML','CSS'],
    repository:'https://github.com/nhope123/converter',
    website:'https://nhope123.github.io/converter/'
  },
  mixer:{
    name:'eFonic',
    description:'Sound effect drum machine.',
    src: drum,
    alt:'Drum Machine ScreenShot',
    tags:['React','HTML','CSS'],
    repository:'https://github.com/nhope123/drums',
    website:'https://nhope123.github.io/drums/'
  },
  clock:{
    name:'Rebel Pomodoro',
    description:'Web base countdown timer.',
    src: clocki,
    alt:'Pomodoro Clock ScreenShot',
    tags:['React','HTML','CSS'],
    repository:'https://github.com/nhope123/pomodoro',
    website:'https://nhope123.github.io/pomodoro/'
  },
  calculator:{
    name:'Calculator',
    description:'Online calculator.',
    src:calculate,
    alt:'Calculator ScreenShot',
    tags:['React','HTML','CSS','Mathjs'],
    repository:'https://github.com/nhope123/calculator',
    website:'https://nhope123.github.io/calculator/'
  },
  quote:{
    name:'Inspire',
    description:'Random programming quote machine',
    src: quotes,
    alt:'Quote Machine ScreenShot',
    tags:['React','HTML','CSS'],
    repository:'https://github.com/nhope123/inspire',
    website:'https://nhope123.github.io/inspire/'
  },
  markdown:{
    name:'PreMarked',
    description:'Markdown previewer',
    src: preview,
    alt:'Markdown Previewer ScreenShot',
    tags:['React','HTML','CSS','Marked.js'],
    repository:'https://github.com/nhope123/previewer',
    website:'https://nhope123.github.io/previewer/'
  },
  product:{
    name:'Hardcore Fitness',
    description:'Gym product landing page.',
    src: product,
    alt:'Product Landing Page ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:'https://github.com/nhope123/2020Portfolio/blob/master/webpages/product_landing.html',
    website:'https://nhope123.github.io/2020Portfolio/webpages/product_landing.html'
  },
  tribute:{
    name:'Tribute',
    description:'St Vincent tribute page',
    src: tributes,
    alt:'Tribute ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:'https://github.com/nhope123/2020Portfolio/blob/master/webpages/tribute.html',
    website:'https://nhope123.github.io/2020Portfolio/webpages/tribute.html'
  },
  form:{
    name:'Survey',
    description:'Travel survey form',
    src: survey,
    alt:'Survey Form ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:'https://github.com/nhope123/2020Portfolio/blob/master/webpages/survey_form.html',
    website:'https://nhope123.github.io/2020Portfolio/webpages/survey_form.html'
  },
  tutorial:{
    name:'ShellCom',
    description:'Unix shell tutorial',
    src: tutor,
    alt:'Tutorial ScreenShot',
    tags:['HTML','CSS','JavaScript'],
    repository:'https://github.com/nhope123/2020Portfolio/blob/master/webpages/documentation.html',
    website:'https://nhope123.github.io/2020Portfolio/webpages/documentation.html'
  },
  portfolio:{
    name:'Old Portfolio',
    description:'Frond-End Portfolio created in 2020.',
    src: oldPage,
    alt:'Old Portfolio ScreenShot',
    tags:['React','HTML','CSS','JavaScript'],
    repository:'https://github.com/nhope123/2020Portfolio',
    website:'https://nhope123.github.io/2020Portfolio'
  }
};

export default cards;
