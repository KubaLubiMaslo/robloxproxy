import http from 'http';
import fetch from 'node-fetch';

const PORT = 3000;

http.createServer(async (req, res) => {
    const rawUrl = 'https://games.roblox.com/v1/games/115863998093509/servers/Public?sortOrder=R&excludeFullGames=false&Limit=100';

    try {
        const response = await fetch(rawUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const rawText = await response.text();

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(rawText);
    } catch (error) {
        console.error('Error fetching raw text:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Failed to fetch raw text');
    }
}).listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
