## React 
->React is a library.
->It is a single page application
->It has virtual dom.
types:
->Using framework -(vite)
->without using framework -(Create React App)

 ## why? 
->on demand
->Job opportunity
->flexible,Efficient,light weight,single page
->Component based

How??
->Using framework
->Without using framework

## --File structure:
vite-Reat-
 1-Node modules(All necessary modules)
 2-Public(public logo)
 3-src(Source Folder)

->.gitignore -To ignore the files from pushing
-> index.html(single page/main html file)
-> package-lock.json(all installed modules's version)
 ->package.json(installed modules & dependancy)
 ->Readme.md(mark down file->documentation)

 ->src
   1.app.jsx(file/components import)
   2.index.jsx/main.jsx(main file)

 ## jsx?->
 javascript + XML
 const element=<h1>React</h1> (it is XML=js+html)

## Component:-
 ->reusable,independent part of UI in React
 Types:
 1.Functional based
 2.Class based
 
 -->components must be capitalize
 ## props:(properties)
 -->components must be capitalize(like first ltr must be upper case)
 ## ex:
 alike<HTML>element uppercase
 <Component name={Ankita} age = {21}/>
 -->To acess
 {name,age}->props

 Card.jsx
 ->type->rafce(react arrow function component)

 ## Import and Export
 
 ## react State
 ->It holds the data(dynamic -> mutable ->primitive, non primitive)
-> Re-render after every update in state.

## Hooks

## Usestate() Hook 
syntax:-
let [count,setCount]=useState()  
Here count=current state,
setCount= dispatch function

we can put 0 or count in useState ()

## UseEffet()

## UseRef()

## custom hoooks

## Controlled component
 ->It is controlled by react state.
 ->Re-render after evey 
 onchane( event)handler
 ->state update

 ## Uncontrolled 
 ->It's not depend upon rect state.
-> (useRef) ->hook
## useRef
It return an object having a property called current.


## React Router DOM
It is a react js  library by which we can perform multiple activies in a single page application.
why?->Navigation b/w componenets and views.
    ->Dynamic routing
    ->Avoids full page reload.
 How? ->Follows browser's history according to that it performs.
      
Step-1->npm i react-router-dom
step-2->src folder->Components--|
                  ->Home/navbar/about/contact.jsx
step-3  ->navbar.jsx
          |->import {Link} from "React-router-dom"
          <ul>
          <li><link to="/"></Link><li>
          </ul>               

step-4 ->App.js
       ->import {BrowserRouter as Router,Routes,Route}   from "react-router-dom"
         return  <>
     <Router>
     <Navbar/> 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     </Router>
     </>

  ## Context-API
  ->It's  a react feature to facilitate states or data sharing globally to component

  ->Context->(store)
  ->provider->to provide

