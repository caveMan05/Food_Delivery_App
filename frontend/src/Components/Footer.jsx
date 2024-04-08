import {Link} from "react-router-dom"
function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Gofood, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          
        </ul>
      </footer>
    </>
  )
}
export default Footer