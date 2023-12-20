function Divs({title,content,img}){
return (
    <>
        <div className = "wf-part-container" >
        <div>
            <div className="wf-title">
              {title}
            </div><div className="wf-content">
              {content}
            </div>
            </div>
            <div>
                <img src = {img} alt = "Water Calculator" className="wf-image"></img>
            </div>
        </div>
    </>
)
}
export default Divs;