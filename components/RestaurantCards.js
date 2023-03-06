import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'tailwind-rn'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'



const RestaurantCards = ({id, imgUrl,title, rating, genre, address, short_description, dishes, long, lat,}) => {
  return (
    <TouchableOpacity style={tailwind("bg-white mr-3 ")}>
        <Image source={{uri:imgUrl}} style={tailwind('h-36 w-64 rounded-sm')}/>
        <View style={tailwind('px-3 pb-4')}>
            <Text style={tailwind("font-bold text-lg pt-2")}>{title}</Text>
            <View style={tailwind('flex-row items-center')}>
                <StarIcon color='green' opacity={0.5} size={22}/>
                <Text style={tailwind("text-xs text-gray-500 ")}>
                <Text style={tailwind("text-xs text-green-500 ")}>{rating}    </Text>{genre}
                </Text>
            </View>
            <View style={tailwind("flex-row items-center")}>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text style={tailwind("text-xs text-gray-500")}>Nearby . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards