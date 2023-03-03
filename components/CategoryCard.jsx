import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'

const CategoryCard = (imgUrl, title) => {
  return (
    <TouchableOpacity style={tailwind('relative mr-2')}>
        <Image source={{uri:imgUrl}} 
        style={tailwind('h-20 w-20 rounded')}/>
        <Text style={tailwind('absolute bottom-1 left-1 text-white font-bold')}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard