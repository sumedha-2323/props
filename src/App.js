import React from 'react';
import './App.css';

// instead of separate objects, keep all objects under one array and use it with indexes...

const data =[
  {
    title:'The Gray Man',
    imgUrl:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQ-oja73gENiNZNAI2dCjCCWsflVhnrg7FDvGrDz1ZpNzSb2eilczfqX3dSWGM27o_Nw7fbz8lLtxnMUGrm9RFMJjTWSRXRP8KcsxREOGRYPaVkBuGdWGqPPPfqu9NDEqZmQ.jpg?r=fb8',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.",
  },
  
   {
    title:'The Ice Road',
    imgUrl:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABVqT6oibT21xRA9jT8FnAaRnqlyOqQzIGy15nsA4Ix4VDAOOaeZkcUb9L9-ptjtvUZDzogVbYuS6Wne-pym-1_ZEl7-WPbGoJHCUEqQ1MkBK7BNhHo_-3JfgppY7Qu_N5WFX.jpg?r=cef',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.",
  },
  {
    title:'Bullet Train',
    imgUrl:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABdKD_7ZiQTuhiW2RKxTF7Z_YjUuid1J_13cAcINFMBFahgf067RXmvbLE6vqRzLq19JJgCqcc-gY3G9_QuW_ca62SJzIvh-IAzc.jpg?r=397',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.",
  }
]

//(2. let movieObj = {
//   title:'The Gray Man',
//   imgUrl:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQ-oja73gENiNZNAI2dCjCCWsflVhnrg7FDvGrDz1ZpNzSb2eilczfqX3dSWGM27o_Nw7fbz8lLtxnMUGrm9RFMJjTWSRXRP8KcsxREOGRYPaVkBuGdWGqPPPfqu9NDEqZmQ.jpg?r=fb8',
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.",
// }

// let iceroadObj = {
//   title:'The Ice Road',
//   imgUrl:'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABVqT6oibT21xRA9jT8FnAaRnqlyOqQzIGy15nsA4Ix4VDAOOaeZkcUb9L9-ptjtvUZDzogVbYuS6Wne-pym-1_ZEl7-WPbGoJHCUEqQ1MkBK7BNhHo_-3JfgppY7Qu_N5WFX.jpg?r=cef',
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.",
// })

// (1.let title = 'The Gray Man';
// let imgUrl = 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQ-oja73gENiNZNAI2dCjCCWsflVhnrg7FDvGrDz1ZpNzSb2eilczfqX3dSWGM27o_Nw7fbz8lLtxnMUGrm9RFMJjTWSRXRP8KcsxREOGRYPaVkBuGdWGqPPPfqu9NDEqZmQ.jpg?r=fb8';
// let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti excepturi eveniet! Vel ad dolore facilis! Sed blanditiis placeat magni.";)

const App=()=>{
  // 4. let newArray = data.map((eachObj)=>{
  //     return(
  //       <article>
  //         <h1>{eachObj.title}</h1>
  //         <img src={eachObj.imgUrl} alt="ntg" />
  //         <p>{eachObj.description}</p>
  //       </article>
  //     )
  
  // })
  return(
  <section className='movie-container'>
    {/*1. <Movie title={title} image={imgUrl} des={description}/> */}
    {/* 2. (<Movie title={movieObj.title} image={movieObj.imgUrl} des={movieObj.description}/>
    <Movie title={iceroadObj.title} image={iceroadObj.imgUrl} des={iceroadObj.description}/> )*/}
    
    {/*3. <Movie title={data[0].title} image={data[0].imgUrl} des={data[0].description}/>
    <Movie title={data[1].title} image={data[1].imgUrl} des={data[1].description}/>
    <Movie title={data[2].title} image={data[2].imgUrl} des={data[2].description}/> */}

    {/*4. {newArray} */}

    {data.map((eachObj, index)=>{
      return(
        <Movie key={index} title={eachObj.title} image={eachObj.imgUrl} des={eachObj.description}/>
      )
    })}
  </section>
  )
}


const Movie=(props)=>{
  return(
    <article className='each-mve'>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.des}</p>

    </article>
  )
}



export default App;
