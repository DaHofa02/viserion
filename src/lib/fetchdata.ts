import https from 'https';

export function fetchWithNoSSL({
    host,
    path,
    method,
    credentials,
}: {
    host: string;
    path: string;
    method: string;
    credentials: string;
}) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: host,
            port: 443,
            path,
            method,
            headers: {
                Authorization: `Basic ${credentials}`,
                ContentType: `application/json`,
            },
            rejectUnauthorized: false, // disables SSL verification
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    reject(new Error('Invalid JSON response ' + err));
                }
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
}