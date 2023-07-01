// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/FirstPage";
import Mainpage from "./components/mainPage";

function App() {
  React.useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/main" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// // App.js
// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/FirstPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route path="/" element={<Header />} />
//       </div>
//     </Router>
//   );
// }

// export default App;
