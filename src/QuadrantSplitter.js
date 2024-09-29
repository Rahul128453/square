import React, { useState } from 'react';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const QuadrantSplitter = ({ size, color }) => {
    const [isSplit, setIsSplit] = useState(false);

    // Handle the click to split the quadrant
    const handleClick = () => {
        setIsSplit(true);
    };

    // Style for each quadrant
    const quadrantStyle = {
        width: size,
        height: size,
        backgroundColor: color,
        display: 'inline-block',
        border: '1px solid #000',
        boxSizing: 'border-box',
    };

    // When clicked, split into 4 smaller quadrants
    if (isSplit) {
        const newSize = size / 2;
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', width: size, height: size }}>
                <QuadrantSplitter size={newSize} color={getRandomColor()} />
                <QuadrantSplitter size={newSize} color={getRandomColor()} />
                <QuadrantSplitter size={newSize} color={getRandomColor()} />
                <QuadrantSplitter size={newSize} color={getRandomColor()} />
            </div>
        );
    }

    return <div style={quadrantStyle} onClick={handleClick}></div>;
};

export default QuadrantSplitter;


// import React, { useState } from 'react';

// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// const QuadrantSplitter = ({ width, height, x = 0, y = 0, level = 0 }) => {
//     const [isSplit, setIsSplit] = useState(false);
//     const [quadrants, setQuadrants] = useState([]);

//     const handleClick = (e) => {
//         if (!isSplit) {
//             const rect = e.target.getBoundingClientRect();
//             const clickX = e.clientX - rect.left;
//             const clickY = e.clientY - rect.top;

//             // Split into 4 quadrants based on the click position
//             const newQuadrants = [
//                 { x: 0, y: 0, width: clickX, height: clickY }, // top-left
//                 { x: clickX, y: 0, width: width - clickX, height: clickY }, // top-right
//                 { x: 0, y: clickY, width: clickX, height: height - clickY }, // bottom-left
//                 { x: clickX, y: clickY, width: width - clickX, height: height - clickY } // bottom-right
//             ];

//             setQuadrants(newQuadrants);
//             setIsSplit(true);
//         }
//     };

//     // If the quadrant has been split, render 4 smaller quadrants recursively
//     if (isSplit) {
//         return (
//             <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
//                 {quadrants.map((quad, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             position: 'absolute',
//                             left: `${quad.x}px`,
//                             top: `${quad.y}px`,
//                             width: `${quad.width}px`,
//                             height: `${quad.height}px`,
//                             backgroundColor: getRandomColor(),
//                             border: '1px solid black'
//                         }}
//                     >
//                         <QuadrantSplitter width={quad.width} height={quad.height} x={quad.x} y={quad.y} level={level + 1} />
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     // Render the initial solid background quadrant
//     return (
//         <div
//             onClick={handleClick}
//             style={{
//                 width: `${width}px`,
//                 height: `${height}px`,
//                 backgroundColor: getRandomColor(),
//                 display: 'inline-block',
//                 position: 'relative',
//                 cursor: 'pointer',
//                 border: '1px solid black'
//             }}
//         ></div>
//     );
// };

// export default QuadrantSplitter;
