import React from 'react'

const Contato = () => {
  return (
    <main className='main flex direction-column justify-center items-center p-[2rem]'>
      <div className='contato bg-purple-500 p-[1rem] rounded-[10px] w-100 text-center h-40 border-2 border-white shadow-2xl shadow-purple-500 mt-[2rem]'>
        <h2 className='subtitulo text-white mx-0 font-[Arial, sans-serif] font-[1.5rem] font-bold'>FALE CONOSCO!</h2>
        <p className='paragrafo text-black font-[Arial, sans-serif] font-[1.5rem] mx-[1rem 0]'>Através do email:</p>
        <a href="mailto:contato@lojabrinquedos.com" className='text-white decoration-none font-bold p-[0.5rem 1rem] font-[Arial, sans-serif]'>contato@lojabrinquedos.com</a>
        <button className='botao bg-white text-purple-500 p-[0.5rem 1rem] rounded-[10px] font-[Arial, sans-serif] font-bold cursor-pointer grid direction-column justify-center items-center w-[300px] mt-[20px] hover:bg-purple-500 hover:text-white '>Enviar </button>
      </div>
    </main>
  )
}

export default Contato
