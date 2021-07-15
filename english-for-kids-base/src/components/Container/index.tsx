import './style.css'

interface Props  { 
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">{children}</div>
  )
}

export default Container
