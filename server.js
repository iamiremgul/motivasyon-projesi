const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());

// Mottolar
const mottos = [
    "Bugün harika bir gün!",
    "Her gün yeni bir başlangıçtır.",
    "Küçük adımlar büyük başarı getirir.",
    "Kendine inan!",
    "Zorluklar seni güçlendirir."
];

// API endpoint
app.get('/motto', (req, res) => {
    const day = new Date().getDate();
    const index = day % mottos.length;
    res.json({ motto: mottos[index] });
});

// Frontend sunumu: index.html'i gönder
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Tüm site http://localhost:${PORT} üzerinden erişilebilir.`);
});
