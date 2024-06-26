import React, { useState } from 'react';
import './App.css';

function calculatePaths(x, y) {
    let grid = Array.from(Array(x), () => new Array(y).fill(-1));
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (i === 0 || j === 0) {
                grid[i][j] = 1;
            } else {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
    }
    return grid;
}

function App() {
    const [x, setX] = useState(3);
    const [y, setY] = useState(3);
    const [totalPaths, setTotalPaths] = useState(6);
    const [grid, setGrid] = useState(calculatePaths(3, 3));

    const handleSubmit = (event) => {
        event.preventDefault();
        var grd = calculatePaths(x, y);
        setTotalPaths(grd[x-1][y-1]);
        setGrid(grd);
    };

    return (
        <div className="App">
            <h1>Grid Path Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    X:
                    <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} min="1" />
                </label>
                <label>
                    Y:
                    <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} min="1" />
                </label>
                <button type="submit">Calculate</button>
            </form>
            <div>
            <h1>{`Total Paths: ${totalPaths}`}</h1>;
            </div>
            <div className="grid">
                {grid.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((cell, j) => (
                            <div key={j} className={`cell ${i === x - 1 && j === y - 1 ? 'last-cell' : ''}`}>{cell}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
