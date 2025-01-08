import { defineField, defineType, defineArrayMember } from 'sanity'

export const blog = defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
        }),
        defineField({
            name: 'authorName',
            title: 'Author Name',
            type: 'string'
        }),
        defineField({
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'block',
            title: 'Block',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
})

