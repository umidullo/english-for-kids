import './style.css'
import cards from '../../assets/cards'
import { ICard } from '../interfaces'

const Statistics: React.FC = () => {

  const cardsHeadings:string[] | { word: string; translation: string; image: string; audioSrc: string; }[] = cards[0]
  const cardsItems: any = cards.slice(1)

  return (
    <div className="stats">
      <div className="btns">
        <button className="repeat-btn">repeat difficult words</button>
        <button className="reset-btn">reset</button>
      </div>
      <div className="table">
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">word</th>
              <th className="text-left">translation</th>
              <th className="text-left">category</th>
              <th className="text-left">clicks</th>
              <th className="text-left">correct</th>
              <th className="text-left">wrong</th>
              <th className="text-left">% errors</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {cardsItems.map((item:ICard[], ind: number) =>
              item.map((item:ICard, index: number) =>
                <tr key={index}>
                  <td className="text-left">{item.word}</td>
                  <td className="text-left">{item.translation}</td>
                  <td className="text-left">{cardsHeadings[ind]}</td>
                  <td className="text-left">0</td>
                  <td className="text-left">0</td>
                  <td className="text-left">0</td>
                  <td className="text-left">0.00</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Statistics