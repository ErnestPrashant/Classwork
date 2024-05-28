import { useEffect, useMemo, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;;
  },[exchange1Data,exchange2Data])
  
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App

// USEREF

// import { useCallback, useEffect, useRef, useState } from 'react'

// function App() {
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       divRef.current.innerHTML = "10"
//     }, 5000);
//   }, [])

//   const incomeTax = 20000;

//   return (
//     <div>
//         hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </div>
//   )
// }

// export default App