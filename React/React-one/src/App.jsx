const App = () => {
  const profiles = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
  ];

  const updatedProfiles = profiles.map((profile, index) => {
    console.log(profile, index);

    return (
      <li key={index}>
        <span>Name : {profile.name} ,</span>
        <span> Age : {profile.age}</span>
      </li>
    );
  });

  return (
    <div>
      <h1>Rendering Json</h1>
      <ol> {updatedProfiles}</ol>
    </div>
  );
};

export default App;
