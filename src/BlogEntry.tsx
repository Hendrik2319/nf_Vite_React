import './BlogEntry.css'
import {useState} from "react";

type BlogEntryProps = {
    title:string
    author:string
    onclick: (message: string) => void
}

export default function BlogEntry( props: BlogEntryProps ) {
    const [count, setCount] = useState(0)

    return (
        <div className="BlogEntry">
            <h3>{props.title}</h3>
            <ul className="BlogEntryContent">
                <li>Grundgerüst des Web-Frontends</li>
                <li>besteht aus Tags: &lt;tag&gt;Text&lt;/tag&gt;</li>
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