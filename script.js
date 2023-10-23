// JavaScript

// フェード
const fade = document.querySelectorAll('.fade');
console.log(fade);
// for文
for(let i = 0; i < fade.length; i++){
const keyframes = {
  opacity: [0, 1],
}

const options = {
  duration: 5000,
  easing: 'ease',
  fill: 'forwards',
  delay: i * 400,
}

fade[i].animate(keyframes, options);
}

// 回転
const spin = document.querySelectorAll('.spin');
console.log(spin);
// for文
for(let i = 0; i < spin.length; i++){
const keyframes = {
  rotate: ['x 360deg','x 0deg'],
  opacity: [0, 1],
}

const options = {
  duration: 2000,
  easing: 'ease',
  delay: i * 400,
}

spin[i].animate(keyframes, options);
}

// 色が変わる
const color = document.querySelector('.color');

const colorKeyframes = {
  backgroundColor: ['red ','orange ','yellow ','lightgreen','skyblue','blue ','purple ','lavender ','pink '],
}

const colorOptions = {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
}

color.animate(colorKeyframes,colorOptions);


// 背景が延びる
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#333'],
}

const lineOptions = {
  duration: 2000,
  fill: 'forwards',
  easing:'ease-out',
}

line.animate(lineKeyframes,lineOptions);


// 文字のスライドイン
const slide = document.querySelectorAll('.slide-in');
console.log(slide);
// for文
for(let i = 0; i < slide.length; i++){
const keyframes = {
  opacity: [0, 1],
  translate: ['0 0px', 0],
};

const options = {
  duration: 1000,
  fill: 'forwards',
  delay: i * 400,
};

slide[i].animate(keyframes, options);
}