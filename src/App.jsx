import Header from './Header'
import Question from './Question'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Question />
      </main>
    </>
  )
}

export default App
