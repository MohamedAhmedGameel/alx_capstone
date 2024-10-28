import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative px-4 bg-gray-100 pt-20">
  <nav aria-label="Footer Navigation" className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <Link to="/" className="font-medium text-neutral-800">Home</Link>
    <Link to="#" className="font-medium text-neutral-800">Support</Link>
    <Link to="#" className="font-medium text-neutral-800">Privacy Policy</Link>
    <Link to="#" className="font-medium text-neutral-800">Terms & Conditions</Link>
  </nav>
  <p className="py-10 text-center text-gray-300">© 2024 Store | All Rights Reserved</p>
</footer>

  )
}

export default Footer