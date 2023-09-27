import './Content.css'
import BlogEntry from './BlogEntry.tsx'

export default function Content() {
    //const defaultAuthor = "Hendrik Scholtz"
    const data = [
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
        { title:"Title", author:"Hendrik Scholtz", content:generateLines() },
    ]

    function buttonWasClicked( key:number, message:string ) {
        alert( "Button was clicked: ["+ key +"] "+ message );
    }

    function generateLines(): string[] {
        const n = Math.floor( Math.random()*7 )+2;
        return Array(n).fill("").map( (_e,index)=> "Line "+index )
    }

    return (
        <div className="Content">
            <div className="BlogList">
                {
                    data.map(
                        (entry , index) =>
                        <BlogEntry
                            key={index}
                            title={"["+index+"] "+entry.title}
                            content={entry.content}
                            author={entry.author}
                            onclick={message => buttonWasClicked(index, message)}
                        />
                    )
                }
            </div>
        </div>
    )
}