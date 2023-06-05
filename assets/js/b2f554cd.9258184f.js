"use strict";(self.webpackChunkulagellam_docusaurus=self.webpackChunkulagellam_docusaurus||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"pausing-video-specific-second-guide","metadata":{"permalink":"/blog/pausing-video-specific-second-guide","editUrl":"https://github.com/Ulagellam/ulagellam.com/tree/main/blog/2023-06-03-pausing-video-specific-second-guide.md","source":"@site/blog/2023-06-03-pausing-video-specific-second-guide.md","title":"How to Pause a Video at a Specific Second","description":"In this tutorial, we covered how to add a video to a React component using the <video> tag, how to use refs to reference the video element, and how to access and control the video using the ref.","date":"2023-06-03T00:00:00.000Z","formattedDate":"June 3, 2023","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"video","permalink":"/blog/tags/video"},{"label":"vite","permalink":"/blog/tags/vite"}],"readingTime":3.275,"hasTruncateMarker":false,"authors":[{"name":"Sivayogeith Umamaheswaran","title":"CTO, Ulagellam","url":"https://github.com/sivayogeith","imageURL":"/img/sivayogeith.jpg","key":"sivayogeith"}],"frontMatter":{"slug":"pausing-video-specific-second-guide","title":"How to Pause a Video at a Specific Second","authors":"sivayogeith","tags":["react","video","vite"],"image":"./blog-images/my-present.png","description":"In this tutorial, we covered how to add a video to a React component using the <video> tag, how to use refs to reference the video element, and how to access and control the video using the ref.","enableComments":true},"nextItem":{"title":"How I learned MEAN in a week!","permalink":"/blog/how-i-learned-MEAN-in-a-week"}},"content":"![My present to my sister](./blog-images/my-present.png)\\n\\n## Introduction\\n\\nI recently learned React, one of the most popular JavaScript frameworks in the\\nworld. I also created a gift for my sister using React. The main feature of the\\npresent is a video that contains a rickroll. When the rickroll plays, it should\\nenable a previously disabled button.\\n\\n## Getting Started\\n\\n:::caution\\n\\nNote: This tutorial assumes you have a react-ts or react app with vite included.\\nSo, if you don\'t have the project up and running, please visit\\n[the Vite docs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).\\n\\n:::\\n\\n## Step 1: Add a video to `App.tsx`.\\n\\nYou can include a video using the HTML `<video>` tag.\\n\\nHere\'s an example:\\n\\n```tsx\\nimport rickRoll from \\"./rickroll.mp4\\";\\nimport \\"./App.css\\";\\n\\nfunction App() {\\n\\treturn (\\n\\t\\t<>\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<video src={rickRoll} width=\\"750\\" height=\\"500\\" controls></video>\\n\\t\\t\\t</div>\\n\\t\\t</>\\n\\t);\\n}\\n\\nexport default App;\\n```\\n\\nIn this code, make sure to place the video file (rickroll.mp4) in the public\\nfolder.\\n\\n## Step 2: Adding Refs\\n\\nIf you\'re new to React and aren\'t familiar with what a ref is, think of it as a\\nway to reference an element similar to `document.querySelector` in vanilla\\nJavaScript.\\n\\nIn React, using refs is considered a best practice instead of directly using\\n`document.` functions.\\n\\nLet\'s add refs to our video tag:\\n\\n```tsx\\nimport { createRef } from \\"react\\";\\nimport rickRoll from \\"./rickroll.mp4\\";\\nimport \\"./App.css\\";\\n\\nfunction App() {\\n\\tconst videoRef = createRef<HTMLVideoElement>();\\n\\n\\treturn (\\n\\t\\t<>\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<video\\n\\t\\t\\t\\t\\tsrc={rickRoll}\\n\\t\\t\\t\\t\\twidth=\\"750\\"\\n\\t\\t\\t\\t\\theight=\\"500\\"\\n\\t\\t\\t\\t\\tref={videoRef}\\n\\t\\t\\t\\t\\tcontrols\\n\\t\\t\\t\\t></video>\\n\\t\\t\\t</div>\\n\\t\\t</>\\n\\t);\\n}\\n\\nexport default App;\\n```\\n\\nIn the updated code, we import the createRef function from React. We create a\\nref using `createRef<HTMLVideoElement>()` and assign it to `videoRef`.\\n\\nWe then use `ref={videoRef}` to attach the ref to the video element. With refs,\\nyou can access the underlying DOM element using `videoRef.current`.\\n\\nTo play or pause the video, you can use the following code:\\n\\n-   Play: `videoRef.current?.play()`\\n-   Pause: `videoRef.current?.pause()`\\n\\nThe ? is used to safely access the play() and pause() methods, as the current\\nmight be null initially.\\n\\n## Step 3. Adding `onTimeUpdate`\\n\\nThe `<video>` tag in HTML has an attribute called onTimeUpdate which allows us\\nto set a function that will be called whenever the timestamp in the video\\nchanges.\\n\\nIn this step, we will create a function called `handleTimeUpdate` to handle this\\nevent and perform certain actions when the target timestamp is reached.\\n\\nTo retrieve the current timestamp, we can use the following code snippet:\\n\\n```tsx\\nconst currentTime = videoRef.current?.currentTime || 0;\\n```\\n\\nHere is an example `handleTimeUpdate` function that we can use:\\n\\n```tsx\\nconst handleTimeUpdate = () => {\\n\\tconst currentTime = videoRef.current?.currentTime || 0;\\n\\tsetTimestamp(currentTime);\\n\\tif (currentTime >= targetTimestamp && !didRickRollCome) {\\n\\t\\tvideoRef[\\"current\\"].pause();\\n\\t\\tsetDidRickRollCome(true);\\n\\t}\\n};\\n```\\n\\nThe `handleTimeUpdate` function retrieves the current timestamp from\\n`videoRef.current?.currentTime` with a default value of 0. It updates the\\ntimestamp state with `setTimestamp(currentTime)`.\\n\\nIf the current timestamp is at least the target timestamp and the Rickroll\\nhasn\'t occurred (`!didRickRollCome`), it pauses the video\\n(`videoRef.current.pause()`) and sets `didRickRollCome` to true\\n(`setDidRickRollCome(true)`).\\n\\n## Extra Step (If you are using React with JS)\\n\\nIn Step 2, you will need to change this:\\n\\n```tsx\\nconst videoRef = createRef<HTMLVideoElement>();\\n```\\n\\nto\\n\\n```jsx\\nconst videoRef = createRef();\\n```\\n\\nWhen using React with JavaScript, you should omit the type argument\\n(`<HTMLVideoElement>`) when creating the ref. The createRef() function can be\\nused without specifying the element type.\\n\\n# Results\\n\\nGithub (containing both react and react-ts):\\n[Stop At Sec](https://github.com/Sivayogeith/stop-at-sec)\\n\\nDemo (I have hosted only react as it is the same as react-ts):\\n[GH Pages](https://sivayogeith.github.io/stop-at-sec/)\\n\\n# Conclusion\\n\\nReact\'s JSX syntax is similar to HTML, but when working with React, it\'s\\nrecommended to use refs instead of directly manipulating the DOM with\\n`document.` functions.\\n\\nIn this tutorial, we covered how to add a video to a React component using the\\n`<video>` tag, how to use refs to reference the video element, and how to access\\nand control the video using the ref.\\n\\nI hope this tutorial has been helpful in your React journey! Happy coding!"},{"id":"how-i-learned-MEAN-in-a-week","metadata":{"permalink":"/blog/how-i-learned-MEAN-in-a-week","editUrl":"https://github.com/Ulagellam/ulagellam.com/tree/main/blog/2023-03-03-how-i-learned-MEAN-in-a-week.md","source":"@site/blog/2023-03-03-how-i-learned-MEAN-in-a-week.md","title":"How I learned MEAN in a week!","description":"Learning MEAN stack development in a week was a challenging but rewarding experience.","date":"2023-03-03T00:00:00.000Z","formattedDate":"March 3, 2023","tags":[{"label":"mean","permalink":"/blog/tags/mean"},{"label":"angular","permalink":"/blog/tags/angular"},{"label":"mongodb","permalink":"/blog/tags/mongodb"},{"label":"express","permalink":"/blog/tags/express"},{"label":"nodejs","permalink":"/blog/tags/nodejs"}],"readingTime":1.81,"hasTruncateMarker":false,"authors":[{"name":"Sivayogeith Umamaheswaran","title":"CTO, Ulagellam","url":"https://github.com/sivayogeith","imageURL":"/img/sivayogeith.jpg","key":"sivayogeith"}],"frontMatter":{"slug":"how-i-learned-MEAN-in-a-week","title":"How I learned MEAN in a week!","authors":"sivayogeith","tags":["mean","angular","mongodb","express","nodejs"],"image":"./blog-images/mean-stack.jpeg","description":"Learning MEAN stack development in a week was a challenging but rewarding experience.","enableComments":true},"prevItem":{"title":"How to Pause a Video at a Specific Second","permalink":"/blog/pausing-video-specific-second-guide"}},"content":"![MEAN Stack](./blog-images/mean-stack.jpeg)\\n\\nAs a developer with some experience in Node.js and Angular, I was interested in\\nlearning how to build full-stack applications using the MEAN stack. So, I set\\nout to learn it in a week, and to my surprise, I was able to pick it up\\nrelatively quickly. Here\'s how I did it.\\n\\n# What is MEAN?\\n\\nMEAN is an acronym that stands for MongoDB, Express.js, Angular, and Node.js.\\nTogether, these technologies form a powerful full-stack web development\\nframework.\\n\\n# My Background\\n\\nBefore I started learning MEAN, I already had experience with Node.js and\\nAngular, but I was not familiar with HttpClient. So, I had a good grasp of\\nJavaScript and TypeScript.\\n\\n# The Learning Process\\n\\nI started by reading the documentation for each technology and watching video\\ntutorials. I also took an online course that covered the basics of MEAN. This\\ngave me a good understanding of the framework and how the technologies fit\\ntogether.\\n\\nAfter that, I started working on a simple project to put my newly acquired\\nskills into practice. I decided to build a to-do app using the MEAN stack.\\n\\nI started by setting up the backend with Node.js and Express.js, and connected\\nit to a MongoDB database. Then, I built the frontend with Angular and used\\nHttpClient to make HTTP requests to the backend.\\n\\nWhile building the app, I encountered several issues and bugs, but I was able to\\nsolve most of them by researching online and asking for help on developer\\nforums.\\n\\n# Conclusion\\n\\nLearning MEAN stack development in a week was a challenging but rewarding\\nexperience. With my prior experience in Node.js and Angular, I was able to pick\\nup the framework relatively quickly. With MEAN, I now have the skills to build\\npowerful full-stack web applications.\\n\\n# Next Steps\\n\\nLearning MEAN in a week was a challenging but rewarding experience. With my\\nprior experience in Node.js and a little familiarity with Angular, I was able to\\nlearn the basics of MEAN quickly and build a simple project.\\n\\nHowever, I\'m not stopping there. My next goal is to explore other full-stack web\\ndevelopment frameworks, such as MERN.\\n\\nBut, that\'s a story for another blog..."}]}')}}]);