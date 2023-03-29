import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client =createClient({
    projectId:"3g4up3xy",
    dataset:"production",
    useCdn:true,
    apiVersion:'2023-03-22'
});

const builder=imageUrlBuilder(client);
export const urlFor =(source) => builder.image(source);


export default client;