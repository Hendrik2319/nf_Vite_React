import './Content.css'
import BlogEntry from './BlogEntry.tsx'

export default function Content() {
    //const defaultAuthor = "Hendrik Scholtz"
    const data = [
        { title:"Title", author:"Hendrik Scholtz" },
        { title:"Title", author:"Hendrik Scholtz" },
        { title:"Title", author:"Hendrik Scholtz" },
        { title:"Title", author:"Hendrik Scholtz" },
        { title:"Title", author:"Hendrik Scholtz" },
        { title:"Title", author:"Hendrik Scholtz" },
    ]

    function buttonWasClicked( key:number, message:string ) {
        alert( "Button was clicked: ["+ key +"] "+ message );
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
                            author={entry.author}
                            onclick={message => buttonWasClicked(index, message)}
                        />
                    )
                }
            </div>
        </div>
    )
}