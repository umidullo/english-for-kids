import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a className="github" href="#" target="_blank" rel="noopener noreferrer"
        >umidullo</a>
        <a
          className="rss"
          href="https://rs.school/js/"
          target="_blank"
          rel="noopener"
        >
          <span className="rss-year">'21</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;