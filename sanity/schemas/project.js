import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the Project',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      description: 'Title of the Project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {type: 'string'},
      ],
      // of:[{type:"reference", to:{type:'skill'}}]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {type: 'string'},
      ],
      // of:[{type:"reference", to:{type:'skill'}}]
    }),
    defineField({
      name: 'linkToBuild',
      title: 'linkToBuild',
      type: 'url',
    }),
  ],
})
