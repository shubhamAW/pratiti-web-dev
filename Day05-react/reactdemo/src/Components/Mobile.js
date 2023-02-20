
function Mobile({img,title , price , desc}){
    <div className="Mobile__container">
       
        <div>
            <img src={img} alt="img" />
        </div>
        {/* description */}
        <div>
            <h1>
                {title}
            </h1>
            <h2>{price}</h2>
            <h3>{desc}</h3>
        </div>
    </div>
}

export default Mobile;