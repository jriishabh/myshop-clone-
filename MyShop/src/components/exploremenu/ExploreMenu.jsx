import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='exploremenu' id='exploremenu'>
    <h1>Expore our menu </h1>
    <p className='exploremenu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy every customer need.</p>
    <div className="exploremenu-list">
      {menu_list.map((item,index)=>{
        return (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className="exploremenu-list-item">
          <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
          <p>{item.menu_name}</p>
          </div> 
        )
      })}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu