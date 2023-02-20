import './Product.css';

function Product({classname,img,title,desc}){
    return(
        <div className={classname}>
              <img src={img} alt=""/>
              <h3>{title}</h3>
              <p>{desc}</p>
        </div>

    );
}

export default Product;
