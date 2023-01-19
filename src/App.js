import React from "react"

//return JSX

// function App(){
//     return <h1>Hello world</h1>
// }


// function App() {
//     return React.createElement('div', { className: 'container'}, 
//     React.createElement('h1', {}, 'My App'))
// }

function App(){
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id : 1, text : "comment one"},
        {id : 2, text : "comment two"}
    ]

    const loading = false
    const showComments = true
    const showBlock = (
    
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key = {index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )

    if (loading) return <h2>Loading...</h2>
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments && showBlock}
        </div>
    )
}

export default App