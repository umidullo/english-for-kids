import './style.css'
import Card from './Card'

const Cards = ({ items }) => {
  return (
    <main className="main">
      <div className="cards-field">
        {items.map((item, index) =>
          <Card key={index} word={item.word} translation={item.translation} image={item.image} audio={item.audioSrc} />
        )}
      </div>
    </main>
  )
}

export default Cards
