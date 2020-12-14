export default {
    name: 'project',
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "wordpress", title: "Wordpress" },
                    { value: "nationbuilder", title: "Nationbuilder" },
                    { value: "react", title: "React" }
                ],
            },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            },
        },
        {
            name: "Link",
            type: "url"
        },
    ],
};