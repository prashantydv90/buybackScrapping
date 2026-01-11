import BuybackTable from './components/BuybackTable'

function App() {
  return (
    <div className="app">
      <header>
        <h1>NSE Buyback Announcements</h1>
        <p>Live feed of corporate buyback announcements from NSE</p>
      </header>
      <main>
        <BuybackTable />
      </main>
    </div>
  )
}

export default App

