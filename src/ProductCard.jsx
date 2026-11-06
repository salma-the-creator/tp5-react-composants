function ProductCard(props) {
  return (
    <div>
        <h2>{props.name}</h2>
      <p>Prix : {props.price} DH</p>
      <p>{props.description}</p>
      <img
        src={props.image}
        alt={props.name}
       
      />

    </div>
  )
}

export default ProductCard