function Div1({title,content,img}){
    return (
        <>
            <div className = "wf-part-container1">
                <div>
                    <img src = {img} alt = "Water Calculator" className="wf-image"></img>
                </div>
                <div>
                <div className="wf-title1">
                  {title}
                </div><div className="wf-content1">
                  {content}
                </div>
                </div>
            </div>
        </>
    )
    }
    export default Div1;