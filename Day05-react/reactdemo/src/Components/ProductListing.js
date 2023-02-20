import Product from './Product';

const ProductListing = () => {
    let products=[
        {classname: "card1", img:"https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png",title:"Statue of Libarty", desc:"lorem ipsum"},
        {classname:"card2" , img:'http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png',title:"Taj mahal",desc:"lorem ipsum"},
        {classname:"card3" , img:'https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png',title:"Taj mahal",desc:"lorem ipsum"}
    
      ];
    return (
        <div>
             {products.map((product)=>{
               return <Product classname={product.classname} img={product.img} title={product.title} desc={product.desc}/>
             }
            )}
        </div>
    );
}

export default ProductListing