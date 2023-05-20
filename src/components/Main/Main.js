import { useState, useEffect } from "react";
import cryptoService from "../../services/cryptoService";
import './Main.css'
import Row from "../Row/Row";

const Cryptos = () => {
    const [popularCryptos, setPopularCryptos] = useState([]);

    useEffect(() => {
        setInterval(() => {
            cryptoService.popularCryptos()
                .then(
                    res => {
                        setPopularCryptos(res)
                    }
                )
        }, 500)
    }, [])

    return (
        <>
            <h2 className="table-title">30 Most Popular Crypto</h2>
            <table>
                <tr>
                    <th>RANK</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>MARKET CAP</th>
                    <th>24H VOLUME</th>
                    <th>24H CHANGE</th>
                </tr>
                {popularCryptos.map(x => <Row key={x.id} rank={x.rank} symbol={x.symbol} name={x.name} price={x.priceUsd} marketcap={x.marketCapUsd} volume={x.volumeUsd24Hr} change={x.changePercent24Hr} />)}
            </table>
        </>
    );
}
export default Cryptos;