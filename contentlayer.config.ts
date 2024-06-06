import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        isPublished: {
            type: 'boolean',
            description: 'Indicates whether the post has been published',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            description: 'The computed post URL',
            resolve: (post) => `/blog/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            description: 'The computed post slug',
            resolve: (post) => post._raw.flattenedPath,
        },
    },
}));

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
});
