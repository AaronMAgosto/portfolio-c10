import { Github } from "react-bootstrap-icons"

export default function Footer() {

 const gitHubUrl = 'https://github.com/aaronmagosto/portfolio-c10'
 const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p className="text-center">
        <a href= {gitHubUrl}
        target="_blank"
        rel="noreferrer"
        className="button-effect">
        <Github size='60' color='red'/>
        </a>
        <small>&copy; {currentYear} </small>
        </p>
        </footer>



  )

}




