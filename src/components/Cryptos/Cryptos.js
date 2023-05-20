import { useState, useEffect } from "react";
import cryptoService from "../../services/cryptoService";

const Cryptos = () => {
    const [popularCryptos, setPopularCryptos] = useState([]);

    useEffect(() => {
        cryptoService.popularCryptos()
            .then(
                res => {
                    setPopularCryptos(res)
                }
            )
    }, [])
    //https://coinicons-api.vercel.app/api/icon/${x.symbol.toLowerCase()}`}
    //https://cryptoicons.org/api/black/${x.symbol.toLowerCase()}/400`

    return (
        popularCryptos.map(x => <img key={x.id} src={`https://coinicons-api.vercel.app/api/icon/${x.symbol.toLowerCase()}`} />)
    );
}
export default Cryptos;