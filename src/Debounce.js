import React, { useState, useCallback, useEffect } from "react";



function Debounce() {
  const [text, setText] = useState("");
  const [res,setRes]=useState("")


  const debounceFn = (fnc, d) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fnc(...args);
      }, d);
    };
  };


  const mainFn = useCallback((q) => {
     setRes(q);
    },
    []
  );



  const EnhancedFn = useCallback(debounceFn(mainFn, 500), []);
  useEffect(() => {
    if (text !== "") {
      EnhancedFn(text);
    }
  }, [text]);

  return (
    <div>
      <input
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>{res}</h3>
    </div>
  );
}

export default Debounce;







// ----------------------- debouncing using js ----------------------------

// import React from "react";

// function App() {
//   function debounce(func, delay) {
//     let timer;

//     return function (...args) {
//       if (timer) {
//         clearTimeout(timer);
//       }

//       timer = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   }
//   const fn = (query) => {
//     console.log("Searching for:", query);
//   };

//   const handleSearch = debounce(fn, 300);

//   return (
//     <div>
//       <input onChange={(e) => handleSearch(e.target.value)} />
//     </div>
//   );
// }

// export default App;
