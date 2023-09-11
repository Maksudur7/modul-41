import PropTypes from 'prop-types'

import './bottol.css'
const Bottolclick = ({bottolclick, handalclick}) => {
    console.log(typeof(handalclick));
    const {name, img, price, stock} = bottolclick;
    // const taaa = taaa + price
    return (
        <div className='container'>
            <h2>Name: {name}</h2>
            <img className='image-container' src={img} alt="" />
            <p><span>Price: {price}  </span></p>
            <p><span>Stock: {stock} </span></p>
            <button onClick={() => handalclick(bottolclick)}>By Now</button>
        </div>
    );
};
Bottolclick.propTypes ={
    bottolclick: PropTypes.object.isRequired,
    handalclick: PropTypes.func.isRequired
}

export default Bottolclick;