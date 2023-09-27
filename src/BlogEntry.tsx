import './BlogEntry.css'

export default function BlogEntry() {
    return (
        <div className="BlogEntry">
            <h3>HTML</h3>
            <ul className="BlogEntryContent">
                <li>Grundgerüst des Web-Frontends</li>
                <li>besteht aus Tags: &lt;tag&gt;Text&lt;/tag&gt;</li>
            </ul>
            <div className="Author">
                Hendrik Scholtz
            </div>
        </div>
    )
}