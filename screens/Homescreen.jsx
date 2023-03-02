import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon, } from "react-native-heroicons/outline"
import Categories from '../components/Categories';



const Homescreen = () => {

  const navigation =useNavigation();
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
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

        {/*featured block */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homescreen