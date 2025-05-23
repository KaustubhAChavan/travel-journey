const express = require('express');
const cors = require('cors');
const destinationSchema = require('./types').destinationSchema;
const imageSchema = require('./types').imageSchema;
const noteSchema = require('./types').noteSchema;


const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.get('/api/destinations', (req, res) => {
  const destinations = [
    { id: 1, name: 'Paris', country: 'France' },
    { id: 2, name: 'Tokyo', country: 'Japan' },
    { id: 3, name: 'New York', country: 'USA' },
  ];
  res.json(destinations);
}
);  


app.post('/api/destinations', (req, res) => {
  const newDestination = req.body;  
    const validationResult = destinationSchema.safeParse(newDestination);
    if (!validationResult.success) {
      return res.status(400).json({ error: 'Invalid destination data' });
    }else{
      res.status(202).json(validationResult);
  }
}
);




app.get('/api/images', (req, res) => {
  const images = [
    { id: 1, url: 'https://example.com/paris.jpg', alt: 'Eiffel Tower in Paris' },
    { id: 2, url: 'https://example.com/tokyo.jpg', alt: 'Tokyo Skyline' },
    { id: 3, url: 'https://example.com/newyork.jpg', alt: 'Statue of Liberty in New York' },
  ];
  res.json(images);
}
); 

app.post('/api/images', (req, res) => {
  const newImage = req.body;
  const validationResult = imageSchema.safeParse(newImage);
  if (!validationResult.success) {
    return res.status(400).json({ error: 'Invalid image data' });
  } else {
    res.status(202).json(validationResult);
  }
}
);

app.get('/api/notes', (req, res) => {
  const notes = [
    { id: 1, content: 'Visit the Eiffel Tower in Paris' },
    { id: 2, content: 'Explore the streets of Tokyo' },
    { id: 3, content: 'See the Statue of Liberty in New York' },
  ];
  res.json(notes);
}
); 

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const validationResult = noteSchema.safeParse(newNote);
  if (!validationResult.success) {
    return res.status(400).json({ error: 'Invalid note data' });
  } else {
    res.status(202).json(validationResult);
  }
}
);








app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});