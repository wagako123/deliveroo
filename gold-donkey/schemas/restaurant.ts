import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant Name",
      validation:(Rule)=> Rule.required(),
    },
    {
      name:"short_description",
      type:"string",
      title:"Short description",
      validation:(Rule)=> Rule.max(200),
    }, {
      name:"image",
      type:"image",
      title:"Image of restaurant",
    },
    {
      name:"lat",
      type:"number",
      title:"latitude number of Restaurant",
    },
    {
      name:"long",
      type:"number",
      title:"longitude number of Restaurant",
    },
    {
      name:"address",
      type:"string",
      title:"Address of the restaurant",
      validation:(Rule)=> Rule.required(),
    },
    {
      name:"rating",
      type:"number",
      title:"Enter a Rating from (1-5 stars)",
      validation:(Rule)=> Rule.required()
      .min(1) .max(5).error("Please entera value betwwn 1 and 5"),
    },
    {
      name:"type",
      title:"Category",
      validation:(Rule)=> Rule.required(),
      type:"reference",
      to:[{ type: "category"}],
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{ type:"reference", to: [{type:"dish"}]}],
    },

    
  ],

 
})
