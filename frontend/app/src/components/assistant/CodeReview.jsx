import { useState, useEffect } from "react"
import "prismjs/theme/prisma-tommorrow.css"
import prism from "prismjs"
import './CodeReview.css'
import axios from 'axios'
import Markdown from 'react-markdown'

export const CodeReview = () => {

  const [code, setCode] = useState(0)

  const [review, setReview] = useState(``)
  useEffect(() => {
    prism.highlightAll()
  }, [])

  //connecting backend
  async function reviewCode() {

    const response = await axios.post('http://localhost:5000/api/v2/user/get-response', {code})
    setReview(response.data)    
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onChange={setCode(code)}
              // highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">
            Review
          </div>

        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>

        </div>
      </main>
    </>
  )
}

export default CodeReview