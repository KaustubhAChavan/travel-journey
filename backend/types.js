const zod = require('zod');

/*
schema for the destination object
    - id: number
    - name: string
    - country: string


*/

const destinationSchema = zod.object({
  id: zod.string(),
  name: zod.string().min(1, 'Name is required'),
  country: zod.string().min(1, 'Country is required'),
});

const imageSchema = zod.object({
  id: zod.string(),
  url: zod.string().min(1, 'URL is required'),
  alt: zod.string().min(1, 'Alt text is required'),
});

const noteSchema = zod.object({
  id: zod.string(),
  content: zod.string().min(1, 'Content is required'),
});

module.exports = {
  destinationSchema,
  imageSchema,
  noteSchema,
};