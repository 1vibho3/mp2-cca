const express = require('express');
const { spawn } = require('child_process');
const os = require('os');
const IP = require('ip');

const app = express();
const port = 3000;

app.post('/', (req, res) => {
    const stressProcess = spawn('python3', ['stress_cpu.py']);

    stressProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
    });
});

app.get('/', (req, res) => {
    res.send(IP.address());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 9f85e658608282b004d097e3150e5ce4a1935578
