import React from 'react'
import Logo  from '../assist/Images/unitech logo 2.png'
const Navbar = () => {
  const navItems =["Home", "About US ", "Work","Services","Carrer","Blog","Contact"]
  return (
    <div className="container">
      <div className="navbar flex justify-between align-middle pt-[21px] pb-[22.12px] max-w-[1248px] mx-auto">
        <div className="logo">
          <div className="img-container">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="nav-items flex justify-between items-center w-[737px]">
          {navItems.map((items,i)=>{
            return(
              <div className="nav-links " key={i}>
                <h1 className='nav-text '>{items}</h1>
              </div>
              
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar