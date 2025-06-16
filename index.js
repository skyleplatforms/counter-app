import express from 'express';
const app = express();

// Middleware (modern replacement for bodyParser)
app.use(express.json());

// In-memory data store
let items = [
  { id: '1', name: 'Sample Item' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello, We are here to help');
});

// RESTful Routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.post('/items', (req, res) => {
  const newItem = { id: Date.now().toString(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).send('Item not found');
  
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id !== req.params.id);
  res.status(204).send();
});

// 404 Handler (MUST be last!)
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
