import { defineType,defineField } from "sanity";
export const author = defineType({
    name:"author",
    title:"Authors",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Enter Author's Name",
            type:"string",
            validation:Rule=>Rule.required().min(3)
        }),
        defineField({
            name:"bio",
            type:"text",
            title:"Enter Author's bio",
        }),
        defineField({
            name:"image",
            title:"Add Author's Image",
            type:"image",
            options:{
                hotspot:true
            },
            validation:Rule=>Rule.required()
        })
    ]
});