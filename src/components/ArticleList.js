import React from "react";
import Article from "./Article"

const ArticleList = ({posts}) => {
    
    const articleCollection = posts.map((post) => {
        return <Article key= {post.id} title={post.title} date={post.date} preview={post.preview}/>
    })

    return (
        <main>
            {articleCollection}
        </main>
    )
}

export default ArticleList