import './BlogEntry.css'
import {useState} from "react";

type BlogEntryProps = {
    title:string
    content?: string[]
    author:string
    onclick: (message: string) => void
}

export default function BlogEntry( props: BlogEntryProps ) {
    const [count, setCount] = useState(0)

    const content = props.content ? props.content : [
        "Grundgerüst des Web-Frontends",
        "besteht aus Tags: <tag>Text</tag>"
    ]

    return (
        <div className="BlogEntry">
            <h3>{props.title}</h3>
            <ul className="BlogEntryContent">
                {
                    content.map( (line, index ) =>
                        <li key={index}>{line}</li>
                    )
                }
            </ul>
            <div className="Author">{props.author}</div>
            <div>Counter: {count}</div>
            <div>
                <button onClick={() => props.onclick("\""+props.title+"\" was clicked (counter: "+count+")")}>Click Me</button>
                <button onClick={() => setCount((n)=>n+1)}>raise counter</button>
            </div>
        </div>
    )
}