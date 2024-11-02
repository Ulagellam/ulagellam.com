"use strict";(self.webpackChunkulagellam_docusaurus=self.webpackChunkulagellam_docusaurus||[]).push([[70],{6334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(4848),s=n(8453);const o={slug:"pausing-video-specific-second-guide",title:"How to Pause a Video at a Specific Second",authors:"sivayogeith",tags:["react","video","vite"],image:"./blog-images/my-present.png",description:"In this tutorial, we covered how to add a video to a React component using the <video> tag, how to use refs to reference the video element, and how to access and control the video using the ref.",enableComments:!0},a=void 0,d={permalink:"/blog/pausing-video-specific-second-guide",editUrl:"https://github.com/Ulagellam/ulagellam.com/tree/main/blog/2023-06-04-pausing-video-specific-second-guide.md",source:"@site/blog/2023-06-04-pausing-video-specific-second-guide.md",title:"How to Pause a Video at a Specific Second",description:"In this tutorial, we covered how to add a video to a React component using the <video> tag, how to use refs to reference the video element, and how to access and control the video using the ref.",date:"2023-06-04T00:00:00.000Z",tags:[{inline:!0,label:"react",permalink:"/blog/tags/react"},{inline:!0,label:"video",permalink:"/blog/tags/video"},{inline:!0,label:"vite",permalink:"/blog/tags/vite"}],readingTime:4.305,hasTruncateMarker:!0,authors:[{name:"Sivayogeith Umamaheswaran",title:"CTO, Ulagellam",url:"https://github.com/sivayogeith",imageURL:"/img/sivayogeith.jpg",key:"sivayogeith",page:null}],frontMatter:{slug:"pausing-video-specific-second-guide",title:"How to Pause a Video at a Specific Second",authors:"sivayogeith",tags:["react","video","vite"],image:"./blog-images/my-present.png",description:"In this tutorial, we covered how to add a video to a React component using the <video> tag, how to use refs to reference the video element, and how to access and control the video using the ref.",enableComments:!0},unlisted:!1,nextItem:{title:"How I learned MEAN in a week!",permalink:"/blog/how-i-learned-MEAN-in-a-week"}},r={image:n(5574).A,authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Add a video to <code>App.tsx</code>.",id:"step-1-add-a-video-to-apptsx",level:2},{value:"Step 2: Adding Refs",id:"step-2-adding-refs",level:2},{value:"Step 3. Adding <code>onTimeUpdate</code>",id:"step-3-adding-ontimeupdate",level:2},{value:"Extra Step (If you are using React with JS)",id:"extra-step-if-you-are-using-react-with-js",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"My present to my sister",src:n(433).A+"",width:"1070",height:"754"})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"I recently learned React, one of the most popular JavaScript frameworks in the\nworld. I also created a gift for my sister using React. The main feature of the\npresent is a video that contains a rickroll. When the rickroll plays, it should\nenable a previously disabled button."}),"\n","\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Note: This tutorial assumes you have a react-ts or react app with vite included.\nSo, if you don't have the project up and running, please visit\n",(0,i.jsx)(t.a,{href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"the Vite docs"}),"."]})}),"\n",(0,i.jsxs)(t.h2,{id:"step-1-add-a-video-to-apptsx",children:["Step 1: Add a video to ",(0,i.jsx)(t.code,{children:"App.tsx"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can include a video using the HTML ",(0,i.jsx)(t.code,{children:"<video>"})," tag."]}),"\n",(0,i.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="/src/App.tsx" showLineNumbers',children:'import rickRoll from "./rickroll.mp4";\nimport "./App.css";\n\nfunction App() {\n  return (\n    <>\n      <div>\n        <video src={rickRoll} width="750" height="500" controls></video>\n      </div>\n    </>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,i.jsx)(t.p,{children:"In this code, make sure to place the video file (rickroll.mp4) in the public\nfolder."}),"\n",(0,i.jsx)(t.h2,{id:"step-2-adding-refs",children:"Step 2: Adding Refs"}),"\n",(0,i.jsxs)(t.p,{children:["If you're new to React and aren't familiar with what a ref is, think of it as a\nway to reference an element similar to ",(0,i.jsx)(t.code,{children:"document.querySelector"})," in vanilla\nJavaScript."]}),"\n",(0,i.jsxs)(t.p,{children:["In React, using refs is considered a best practice instead of directly using\n",(0,i.jsx)(t.code,{children:"document."})," functions."]}),"\n",(0,i.jsx)(t.p,{children:"Let's add refs to our video tag:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="/src/App.tsx" showLineNumbers',children:'import { createRef } from "react";\nimport rickRoll from "./rickroll.mp4";\nimport "./App.css";\n\nfunction App() {\n  const videoRef = createRef<HTMLVideoElement>();\n\n  return (\n    <>\n      <div>\n        <video\n          src={rickRoll}\n          width="750"\n          height="500"\n          ref={videoRef}\n          controls\n        ></video>\n      </div>\n    </>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the updated code, we import the createRef function from React. We create a\nref using ",(0,i.jsx)(t.code,{children:"createRef<HTMLVideoElement>()"})," and assign it to ",(0,i.jsx)(t.code,{children:"videoRef"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We then use ",(0,i.jsx)(t.code,{children:"ref={videoRef}"})," to attach the ref to the video element. With refs,\nyou can access the underlying DOM element using ",(0,i.jsx)(t.code,{children:"videoRef.current"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To play or pause the video, you can use the following code:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Play: ",(0,i.jsx)(t.code,{children:"videoRef.current?.play()"})]}),"\n",(0,i.jsxs)(t.li,{children:["Pause: ",(0,i.jsx)(t.code,{children:"videoRef.current?.pause()"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The ? is used to safely access the play() and pause() methods, as the current\nmight be null initially."}),"\n",(0,i.jsxs)(t.h2,{id:"step-3-adding-ontimeupdate",children:["Step 3. Adding ",(0,i.jsx)(t.code,{children:"onTimeUpdate"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"<video>"})," tag in HTML has an attribute called ",(0,i.jsx)(t.code,{children:"onTimeUpdate"})," which allows us\nto set a function that will be called whenever the timestamp in the video\nchanges."]}),"\n",(0,i.jsxs)(t.p,{children:["In this step, we will create a function called ",(0,i.jsx)(t.code,{children:"handleTimeUpdate"})," to handle this\nevent and perform certain actions when the target timestamp is reached."]}),"\n",(0,i.jsx)(t.p,{children:"To retrieve the current timestamp, we can use the following code snippet:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const currentTime = videoRef.current?.currentTime || 0;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Here is an example ",(0,i.jsx)(t.code,{children:"handleTimeUpdate"})," function that we can use:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'const handleTimeUpdate = () => {\n  const currentTime = videoRef.current?.currentTime || 0;\n  setTimestamp(currentTime);\n  if (currentTime >= targetTimestamp && !didRickRollCome) {\n    videoRef["current"].pause();\n    setDidRickRollCome(true);\n  }\n};\n'})}),"\n",(0,i.jsxs)(t.p,{children:["And in the HTML you need to add the ",(0,i.jsx)(t.code,{children:"onTimeUpdate"})," attribute:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<video\n  src={rickRoll}\n  width="750"\n  height="500"\n  ref={videoRef}\n  onTimeUpdate={handleTimeUpdate}\n  controls\n></video>\n'})}),"\n",(0,i.jsx)(t.p,{children:"By stitching all that code, we get the final result,"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="/src/App.tsx" showLineNumbers',children:'import { useState, createRef } from "react";\nimport rickRoll from "/rickroll.mp4";\nimport "./App.css";\n\nfunction App() {\n  const targetTimestamp = 6;\n  const [timestamp, setTimestamp] = useState(0);\n  const [didRickRollCome, setDidRickRollCome] = useState(false);\n\n  const videoRef = createRef<HTMLVideoElement>();\n  const handleTimeUpdate = () => {\n    const currentTime = videoRef.current?.currentTime || 0;\n    setTimestamp(currentTime);\n    if (currentTime >= targetTimestamp && !didRickRollCome) {\n      onTimestamp();\n    }\n  };\n\n  const onTimestamp = () => {\n    // When the timestamp is at 6 seconds do this:\n    videoRef.current?.pause();\n    setDidRickRollCome(true);\n  };\n  return (\n    <>\n      <div>\n        <p>The Video is at {timestamp} seconds</p>\n        {didRickRollCome ? <p>Passed {targetTimestamp} seconds!</p> : null}\n        <video\n          src={rickRoll}\n          width="750"\n          height="500"\n          ref={videoRef}\n          onTimeUpdate={handleTimeUpdate}\n          controls\n        ></video>\n      </div>\n    </>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["I have added this code so it will show the current timestamp and if it touched\nthe ",(0,i.jsx)(t.code,{children:"targetTimestamp"})," var in the UI:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<p>The Video is at {timestamp} seconds</p>;\n{\n\tdidRickRollCome ? <p>Passed {targetTimestamp} seconds!</p> : null;\n}\n"})})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"handleTimeUpdate"})," function retrieves the current timestamp from\n",(0,i.jsx)(t.code,{children:"videoRef.current?.currentTime"})," with a default value of 0. It updates the\ntimestamp state with ",(0,i.jsx)(t.code,{children:"setTimestamp(currentTime)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If the current timestamp is at least the target timestamp and the Rickroll\nhasn't occurred, it pauses the video with and sets ",(0,i.jsx)(t.code,{children:"didRickRollCome"})," to true"]}),"\n",(0,i.jsx)(t.h2,{id:"extra-step-if-you-are-using-react-with-js",children:"Extra Step (If you are using React with JS)"}),"\n",(0,i.jsx)(t.p,{children:"In Step 2, you will need to change this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"// Line No. 6\nconst videoRef = createRef<HTMLVideoElement>();\n"})}),"\n",(0,i.jsx)(t.p,{children:"to"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"const videoRef = createRef();\n"})}),"\n",(0,i.jsx)(t.p,{children:"We are doing that as, Javascript does not support types."}),"\n",(0,i.jsxs)(t.p,{children:["Also, the file extension should be ",(0,i.jsx)(t.code,{children:".jsx"})," instead of ",(0,i.jsx)(t.code,{children:".tsx"})]}),"\n",(0,i.jsx)(t.h1,{id:"results",children:"Results"}),"\n",(0,i.jsxs)(t.p,{children:["Github (containing both react and react-ts):\n",(0,i.jsx)(t.a,{href:"https://github.com/Sivayogeith/stop-at-sec",children:"Stop At Sec"})]}),"\n",(0,i.jsxs)(t.p,{children:["Demo (I have hosted only react as it is the same as react-ts):\n",(0,i.jsx)(t.a,{href:"https://sivayogeith.github.io/stop-at-sec/",children:"GH Pages"})]}),"\n",(0,i.jsx)(t.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["React's JSX syntax is similar to HTML, but when working with React, it's\nrecommended to use refs instead of directly manipulating the DOM with\n",(0,i.jsx)(t.code,{children:"document."})," functions."]}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, we covered how to add a video to a React component using the\n",(0,i.jsx)(t.code,{children:"<video>"})," tag, how to use refs to reference the video element, and how to access\nand control the video using the ref."]}),"\n",(0,i.jsx)(t.p,{children:"I hope this tutorial has been helpful in your React journey!"}),"\n",(0,i.jsxs)(t.p,{children:["And If you want to see the present I gave to my sister, give me an DM on Discord\n(",(0,i.jsx)(t.a,{href:"https://discord.com/users/1061949717833068607",children:"thecodingsage#8758"}),")"]}),"\n",(0,i.jsx)(t.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5574:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/my-present-ca2ef3161afbd85e96dfcea8a74ac5f3.png"},433:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/my-present-ca2ef3161afbd85e96dfcea8a74ac5f3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);