import { defineType,defineArrayMember,defineField } from "sanity"
export const post = defineType({
    name:"post",
    title : "Posts",
    type:"document",
    fields:[
        defineField(
            {
                name:"title",
                title:"Give Title to your Post",
                type:"string",
                validation:Rule=>Rule.required().min(3),
                description:"Ye Post ka title h",
            },
        ),
        defineField({
            name:"slug",
            type:"slug",
            title:"Your Post's Slug",
            options:{
                source:"title",
                maxLength:96,
            },
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:"summary",
            title:"Summary of your Post",
            type:"text",
            validation:Rule=>Rule.required().max(400)
        }),
        defineField({
            name:"image",
            title:"Add Your Post's Image",
            type:"image"
        }),
        defineField({
            name:"content",
            type:"array",
            title:"Add your Post's Content",
            of:[
                defineArrayMember({
                    type:"block"
                })
            ],
            validation:Rule=>Rule.required()
        }),
        defineField({
            name:"author",
            title:"Write Author's Name",
            type:"reference",
            to:[{
                type:"author"
            }],
            validation:Rule=>Rule.required()
        })
    ]
})