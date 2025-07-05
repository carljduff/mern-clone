import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {

  const { authUser } = useAuthStore();

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Dashboard</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      { authUser && <li><Link to='/profile'>Profile</Link></li>}
      <li>
        <details>
          <summary>Settings</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to='/settings'>Change Theme</Link></li>
            <li><a>...</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar