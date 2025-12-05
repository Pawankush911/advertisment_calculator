// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import './index.css';

// const App = () => {
//   const [shortStart, setShortStart] = useState("00:00:00");
//   const [shortEnd, setShortEnd] = useState("00:00:00");

//   const [longStart, setLongStart] = useState("00:00:00");
//   const [longEnd, setLongEnd] = useState("00:00:00");

//   const calculateAdTime = (start, end) => {
//     let s = new Date(`1970-01-01T${start}`);
//     let e = new Date(`1970-01-01T${end}`);
//     if (e < s) e.setDate(e.getDate() + 1);
//     let diff = (e - s) / 1000;
//     const h = String(Math.floor(diff / 3600)).padStart(2, "0");
//     const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
//     const sec = String(Math.floor(diff % 60)).padStart(2, "0");
//     return `${h}:${m}:${sec}`;
//   };

//   const addSecondsToTime = (time, secondsToAdd) => {
//     let t = new Date(`1970-01-01T${time}`);
//     t.setSeconds(t.getSeconds() + secondsToAdd);
//     return t.toTimeString().split(" ")[0];
//   };

//   return (
//     <div style={{ backgroundColor: '#03072bff', minHeight: '100vh', padding: '20px' }}>
//     <div className="container my-5" style={{ backgroundColor: 'white', color: 'black', padding: '30px', borderRadius: '15px', fontFamily: 'Poppins, sans-serif' }}>
//       <h1 className="text-center mb-5" style={{ fontWeight: 700 }}>Advertisement Time Calculator</h1>

//       {/* Short File Table */}
//       <div className="card mb-4 border-warning" style={{ backgroundColor: '#1c1c1c' }}>
//         <div className="card-header text-center text-danger fw-bold" style={{ fontWeight: 600 }}>
//           Short File
//         </div>
//         <div className="card-body">
//           <table className="table table-bordered text-center mb-0" style={{ color: 'white' }}>
//             <tbody>
//               <tr className="table-warning">
//                 <td className="fw-semibold">Start Time</td>
//                 <td>
//                   <input
//                     type="time"
//                     step="1"
//                     className="form-control"
//                     value={shortStart}
//                     onChange={(e) => setShortStart(e.target.value)}
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   />
//                 </td>
//                 <td className="fw-semibold">Clip Time (-15s)</td>
//                 <td>{addSecondsToTime(shortStart, -15)}</td>
//               </tr>

//               <tr className="table-light">
//                 <td className="fw-semibold">End Time</td>
//                 <td>
//                   <input
//                     type="time"
//                     step="1"
//                     className="form-control"
//                     value={shortEnd}
//                     onChange={(e) => setShortEnd(e.target.value)}
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   />
//                 </td>
//                 <td className="fw-semibold">Clip Time (+15s)</td>
//                 <td>{addSecondsToTime(shortEnd, 15)}</td>
//               </tr>

//               <tr>
//                 <td className="fw-semibold">Advertisement Time</td>
//                 <td colSpan="3">{calculateAdTime(shortStart, shortEnd)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Long File Table */}
//       <div className="card border-warning" style={{ backgroundColor: '#1c1c1c' }}>
//         <div className="card-header text-center text-danger fw-bold" style={{ fontWeight: 600 }}>
//           Long File
//         </div>
//         <div className="card-body">
//           <table className="table table-bordered text-center mb-0" style={{ color: 'white' }}>
//             <tbody>
//               <tr className="table-light">
//                 <td className="fw-semibold">Start Time</td>
//                 <td>
//                   <input
//                     type="time"
//                     step="1"
//                     className="form-control"
//                     value={longStart}
//                     onChange={(e) => setLongStart(e.target.value)}
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   />
//                 </td>
//                 <td className="fw-semibold">Clip Time (-2m30s)</td>
//                 <td>{addSecondsToTime(longStart, -150)}</td>
//               </tr>

//               <tr className="table-secondary">
//                 <td className="fw-semibold">End Time</td>
//                 <td>
//                   <input
//                     type="time"
//                     step="1"
//                     className="form-control"
//                     value={longEnd}
//                     onChange={(e) => setLongEnd(e.target.value)}
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   />
//                 </td>
//                 <td className="fw-semibold">Clip Time (+2m30s)</td>
//                 <td>{addSecondsToTime(longEnd, 150)}</td>
//               </tr>

//               <tr>
//                 <td className="fw-semibold">Advertisement Time</td>
//                 <td colSpan="3">{calculateAdTime(longStart, longEnd)}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './index.css';

const App = () => {
  const [shortStart, setShortStart] = useState("00:00:00");
  const [shortEnd, setShortEnd] = useState("00:00:00");
  const [longStart, setLongStart] = useState("00:00:00");
  const [longEnd, setLongEnd] = useState("00:00:00");

  const calculateAdTime = (start, end) => {
    let s = new Date(`1970-01-01T${start}`);
    let e = new Date(`1970-01-01T${end}`);
    if (e < s) e.setDate(e.getDate() + 1);
    let diff = (e - s) / 1000;
    const h = String(Math.floor(diff / 3600)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
    const sec = String(Math.floor(diff % 60)).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const addSecondsToTime = (time, secs) => {
    let t = new Date(`1970-01-01T${time}`);
    t.setSeconds(t.getSeconds() + secs);
    return t.toTimeString().split(" ")[0];
  };

  return (
    <div className="bg-wrapper">
      <div className="container-responsive p-3 p-md-4">

        <h1 className="text-center mb-4 title-text">
          ADVERTISEMENT TIME CALCULATOR
        </h1>

        {/* Short File */}
        <div className="custom-card mb-4">
          <div className="card-header text-center text-danger fw-bold">
            SHORT FILE
          </div>
          <div className="card-body">
            <table className="table table-bordered text-center">
              <tbody>
                <tr>
                  <td className="fw-semibold">Start Time</td>
                  <td>
                    <input type="time" step="1" className="form-control"
                      value={shortStart}
                      onChange={(e) => setShortStart(e.target.value)}
                    />
                  </td>
                  <td className="fw-semibold small-text">(-15s)</td>
                  <td>{addSecondsToTime(shortStart, -15)}</td>
                </tr>

                <tr>
                  <td className="fw-semibold">End Time</td>
                  <td>
                    <input type="time" step="1" className="form-control"
                      value={shortEnd}
                      onChange={(e) => setShortEnd(e.target.value)}
                    />
                  </td>
                  <td className="fw-semibold small-text">(+15s)</td>
                  <td>{addSecondsToTime(shortEnd, 15)}</td>
                </tr>

                <tr className="result-row">
                  <td className="fw-bold">Advertisement Time</td>
                  <td colSpan="3" className="fw-bold">
                    {calculateAdTime(shortStart, shortEnd)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Long File */}
        <div className="custom-card">
          <div className="card-header text-center text-danger fw-bold">
            LONG FILE
          </div>
          <div className="card-body">
            <table className="table table-bordered text-center">
              <tbody>
                <tr>
                  <td className="fw-semibold">Start Time</td>
                  <td>
                    <input type="time" step="1" className="form-control"
                      value={longStart}
                      onChange={(e) => setLongStart(e.target.value)}
                    />
                  </td>
                  <td className="fw-semibold small-text">(-2m30s)</td>
                  <td>{addSecondsToTime(longStart, -150)}</td>
                </tr>

                <tr>
                  <td className="fw-semibold">End Time</td>
                  <td>
                    <input type="time" step="1" className="form-control"
                      value={longEnd}
                      onChange={(e) => setLongEnd(e.target.value)}
                    />
                  </td>
                  <td className="fw-semibold small-text">(+2m30s)</td>
                  <td>{addSecondsToTime(longEnd, 150)}</td>
                </tr>

                <tr className="result-row">
                  <td className="fw-bold">Advertisement Time</td>
                  <td colSpan="3" className="fw-bold">
                    {calculateAdTime(longStart, longEnd)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
