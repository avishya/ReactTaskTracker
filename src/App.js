function App() {

  const name = 'Manoj';
  const x = false;

return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {1+1}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
