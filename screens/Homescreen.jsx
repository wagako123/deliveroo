import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon, } from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import createClient from '../sanity';
{/*import category from '../gold-donkey/schemas/category';
*/}


const Homescreen = () => {

  const navigation =useNavigation();
  const [featuredCategories, setFeaturedcategories]= useState([])
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  {/*useEffect(()=>{
    createClient.fetch(`
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      },
    }`)
    .then((data)=> {setFeaturedcategories(data);}); 
  },[])*/}



  return (
    <SafeAreaView style={tailwind('bg-white pt-5')}>
      
      {/*Header */}
      <View style={tailwind('flex-row pb-3 items-center mx-4 ')}>
        <Image source={{uri:'https://links.papareact.com/wru'}}
        style={tailwind('h-7 w-7 bg-gray-300 p-4 rounded-full')}/>
        <View style={tailwind('flex-auto')}>
          <Text style={tailwind('font-bold text-gray-400 text-xs')}>Deliver Now</Text>
          <Text style={tailwind('font-bold text-xl')}>Current Location
          <ChevronDownIcon size={20} color='#00ccbb'/>
          </Text>
          

        </View>
        <UserIcon style={tailwind('items-end')} size={35} color='#00CCBB'/>
      </View>
      {/*Search */}

      <View style={tailwind('flex-row items-center pb-2')}>
        <View style={tailwind('flex-row flex-1 bg-gray-200 p-3')}>
          <MagnifyingGlassIcon color='#00CCBB' />
          <TextInput placeholder='Products' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB'/>
      </View>
      <ScrollView style={tailwind('bg-gray-100')} contentContainerStyle={{paddingBottom:100}}>
        {/*categories*/}
        <Categories/>

       {/*{featuredCategories?.map((category) =>(
           <FeaturedRow
           key={category._id}
           id={category._id}
           title={category.name}
           description={category.description}
       />
       ))}*/}
       <FeaturedRow
           id='123'
           title="featured"
           description='Paid placements from our partners'
           />
        <FeaturedRow
           id='1234'
           title="tasty discounts"
           description='Everyone is enjoying these juicy discounts'
           />
        <FeaturedRow
           id='12345'
           title="offers near you"
           description='support these local businesses'
           />
        
       
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homescreen