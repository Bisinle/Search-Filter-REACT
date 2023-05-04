import React from 'react'
import styles from './searchStyles/Styles.css'
import { useState } from 'react';




export default function SearchFilter({data}) {
  const [searchWords, setSearchWord]=useState('')
      return (
   
    <div 
    className='search'    
    >
      <input
      className='input'
      placeholder='Search...'
      onChange={(e)=>{setSearchWord(e.target.value)}}

      />
            {

        data.filter((curr)=>{
          if(searchWords == ''){
            return curr
             }
             else if( curr.first_name.toLowerCase().includes(searchWords.toLowerCase()) || curr.last_name.toLowerCase().includes(searchWords.toLowerCase())){
              return curr

             }

        }).map((item)=>{
          return (
            <li className='list'>{`${item.first_name} ${item.last_name}`} </li>
          )
        })
      }
      
    </div>
  
  )
}
