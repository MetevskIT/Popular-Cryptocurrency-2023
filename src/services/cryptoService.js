const baseUrl = 'https://api.coincap.io/v2/assets';
const headerOptions = {
    'Accept-Encoding': 'gzip',
    'Authorization': 'ded20ee4-9d6e-47d1-a4b5-c0e110a51fd2'
}

async function allCryptos() {
    //return top 100 cryptos from api
    const request = await fetch(baseUrl, {
        method: "GET",
        headers: headerOptions,
    });

    const response = await request.json();
    return response.data;
}

async function popularCryptos() {
    //return 30 most popular cryptos
    const cryptos = await allCryptos();
    return await cryptos.slice(0, 30);
}

export default {
    allCryptos,
    popularCryptos,
}