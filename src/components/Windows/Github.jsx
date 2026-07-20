import React from 'react'
import MacWindow from './MacWindow'
import githubData from "../../assets/github.json"
import "./github.scss"

const GitCard = ({data})=>{
    const {id ,image, title,description,tags,repoLink,demoLink} = data

    return <div className='card'>
        <div>
            <img src={image} alt="" />
        </div>

        <h1 className='title'>{title}</h1>

        <p className='description'>{description}</p>

        <div className='tags'>
            {data.tags.map((tag,ind)=> <p key={ind} className='tag'>{tag}</p>)}
        </div>

        <div className="urls">
            <a href={repoLink}>Repository</a>
            {demoLink && <a href={demoLink} >Demo Link</a>}
        </div>

    </div>

}







function Github() {
  return (
    <MacWindow >
        <div className='cards'>
            {githubData.map((project,index)=>{
                return <GitCard key={index} data={project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github
