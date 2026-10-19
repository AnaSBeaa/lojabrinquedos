import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header flex justify-between bg-purple-500 p-4 font-[Arial, sans-serif] font-bold max-w-300 items-center mx-auto rounded-[100px] cursor-pointer'>
      <h1 className='titulo text-white text-[2rem] mx-0 font-[Arial, sans-serif] ml-[1rem]'>Loja de Brinquedos</h1>
      <nav>
        <ul className='lista-ordenada list-none mx-0 flex font-[Arial, sans-serif] font-bold justify-between items-center p-[1rem 2rem] gap-[30px]'>
            <li className='lista-item decoration-none text-white hover:text-black transition duration-500'>
                <Link to='/'>Home</Link>
            </li>
            <li className='lista-item decoration-none text-white hover:text-black transition duration-500'>
                <Link to='/jogos'>Jogos</Link>
            </li>
            <li className='lista-item decoration-none text-white hover:text-black transition duration-500'>
                <Link to='/contato'>Contato</Link>
            </li>
            <li className='lista-item decoration-none text-white hover:text-black transition duration-500'>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
