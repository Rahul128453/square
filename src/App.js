// src/App.js
import React from 'react';
import QuadrantSplitter from './QuadrantSplitter';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <QuadrantSplitter size={400} color="#728491" /> {/* Initial size and color */}
    </div>
  );
}

export default App;


// import React from 'react';
// import QuadrantSplitter from './QuadrantSplitter';

// function App() {
//   return (
//     <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <QuadrantSplitter width={600} height={600} />
//     </div>
//   );
// }

// export default App;

