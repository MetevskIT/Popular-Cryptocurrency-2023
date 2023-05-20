import './Row.css';
import { useEffect, useState } from 'react'

const Row = (props) => {

    const [price, setPrice] = useState();
    const [pricePosition, setPricePosition] = useState(true);
    useEffect(() => {
        (props.price >= price) ? setPricePosition(true) : setPricePosition(false)
        setPrice(props.price)
    }, [props.price])

    return (
        <tr className="tbody">
            <td>{props.rank}</td>
            <td className="name">
                <div className="img">
                    <img src={`https://coinicons-api.vercel.app/api/icon/${props.symbol.toLowerCase()}`} />
                </div>
                <div className="text">
                    <p>{props.name}</p> <span className="symbol">{props.symbol}</span>
                </div>
            </td>
            <td><p className="price">${Number(price).toFixed(2)} <span className={`arrow ${pricePosition ? 'up' : 'down'}`}> {pricePosition? '\uD83E\uDC71':'\uD83E\uDC73'}</span></p></td>
            <td><p className="market-cap">${Number(props.marketcap).toFixed(2)}</p></td>
            <td><p className="volume">${Number(props.volume).toFixed(2)}</p></td>
            <td><p className={`change ${Number(props.change)>0?'positive':'negative'}`}>{Number(props.change).toFixed(2)}%</p></td>
        </tr>
    )
}
export default Row;