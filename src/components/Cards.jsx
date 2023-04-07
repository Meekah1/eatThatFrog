import '../App.css'


function Card (props) {
  return (
    <div className='card-style'>
      <div className='card-content'>
        <img
          alt='card'
          // src={props.images}
          src={`../images/${props.img}`}
          className='card-design'
        />
        <p>
          <img alt='star' src='images/Star1.png' className='star-style' />
          5.0 (6).USA
        </p>
        <p> {props.name} </p>
        <p className='price-style'>
          <span>From $136 </span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;