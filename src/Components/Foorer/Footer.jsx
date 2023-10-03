import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footerDiv'>
        <div className='footerInfo'>
            <h1>The E-Com Store</h1>
            <p>This is a demo app</p>
        </div>
        <div className='footerSocials'>
            <a target="_blank" href="https://twitter.com">
            <img className='socialImg' src="https://imgs.search.brave.com/50UHMRxztKA1c72flwwtrDlw9LKT1DjyEa2N92Uas8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1M2Uu/cG5n" alt="Twitter"/>
            </a>
            <a target="_blank" href="https://instagram.com">
            <img className='socialImg' src="https://imgs.search.brave.com/sj2qX7fJgF3QkXKXo_dektzz9u9Itwmyaet5WHBcUGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjEu/cG5n" alt="Instagram" />
            </a>
            <a target="_blank" href="https://facebook.com">
            <img className='socialImg' src="https://imgs.search.brave.com/nWZqJGV2j3TkAAV_rtOHoln4Ubcw4TysMJHaJstkLfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L2ZhY2Vib29r/LWxvZ28tMC5wbmc" alt="Facebook" /> 
            </a>
            {/* 
            <img className='socialImg' src="https://imgs.search.brave.com/sj2qX7fJgF3QkXKXo_dektzz9u9Itwmyaet5WHBcUGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjEu/cG5n" alt="Instagram" />
            <img className='socialImg' src="https://imgs.search.brave.com/nWZqJGV2j3TkAAV_rtOHoln4Ubcw4TysMJHaJstkLfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L2ZhY2Vib29r/LWxvZ28tMC5wbmc" alt="Facebook" /> */}
        </div>
    </div>
  )
}
