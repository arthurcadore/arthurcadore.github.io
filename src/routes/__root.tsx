import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logo from '../assets/logo.svg'

function RootComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-gray-900 dark:bg-black text-white relative border-b border-transparent dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              Arthur Cadore M. Barcella
            </Link>
          </div>
          <nav className="hidden md:flex gap-4 items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/"
              className="text-gray-300 hover:text-white [&.active]:text-white [&.active]:font-bold"
            >
              Init
            </Link>
            <Link
              to="/publications"
              className="text-gray-300 hover:text-white w-full p-2 rounded-md"
              onClick={toggleMenu}
            >
              Publications
            </Link>
            <Link
              to="/software"
              className="text-gray-300 hover:text-white [&.active]:text-white [&.active]:font-bold"
            >
              Software
            </Link>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white p-2 border border-gray-600 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <nav className="flex flex-col items-start gap-2 p-4 pt-0">
              <Link
                to="/"
                className="text-gray-300 hover:text-white w-full p-2 rounded-md"
                onClick={toggleMenu}
              >
                Init
              </Link>
              <Link
                to="/publications"
                className="text-gray-300 hover:text-white w-full p-2 rounded-md"
                onClick={toggleMenu}
              >
                Publications
              </Link>
              <Link
                to="/software"
                className="text-gray-300 hover:text-white w-full p-2 rounded-md"
                onClick={toggleMenu}
              >
                Software
              </Link>
            </nav>
          </div>
        )}
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})