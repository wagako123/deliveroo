import { View, Text, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import tailwind from 'tailwind-rn'
import RestaurantCards from './RestaurantCards'
{/*import createClient from '../sanity';*/}

const FeaturedRow = ({id, title, description,} )=> {
  {/*const[restaurants, setRestaurants] =useState([]);

  useEffect(()=>{
    createClient.fetch(`
    *[_type == "featured" &&_id== $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{name}

      },
    }[0]

    `, {id}).then(data=>{
      setRestaurants(data?.restaurants);
    })
  },[])*/}

  

  return (
    <View>
        <View style={tailwind('mt-4 flex-row items-center justify-between pt-4')}>
            <Text style={tailwind('font-bold text-lg px-4')}>{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
      </View>
      <Text style={tailwind('text-xs text-gray-500 px-4')}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal:15,}} ShowsHorizontalScrollIndicator={false}
        style={tailwind(' pt-4')} >
            {/*RestaurantCards */}
            <RestaurantCards 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title="Bun's buns "
            rating={4.5}
            genre="Japanese"
            address="123 street"
            short_description="This is a Test description"
            dishes={[]} 
            long={20}
            lat={0}/>
             <RestaurantCards 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title="Bun's buns "
            rating={4.5}
            genre="Japanese"
            address="123 street"
            short_description="This is a Test description"
            dishes={[]} 
            long={20}
            lat={0}/>
             <RestaurantCards 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title="Bun's buns "
            rating={4.5}
            genre="Japanese"
            address="123 street"
            short_description="This is a Test description"
            dishes={[]} 
            long={20}
            lat={0}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow