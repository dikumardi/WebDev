
const Read = (proprs) => {

    const users = proprs.users;
    const setusers = proprs.setusers;
 console.log(proprs);
 
    
  const updatedProfiles = users.map((users, index) => {
    console.log(users, index);

    return (
      <li key={index}>
        <li>Name : {users.name} ,</li>
        <li> Age : {users.age}</li>
      </li>
    );
  });

  return (
    
    <div>
    <h1>Rendering Json</h1>
      <ol> {updatedProfiles}</ol>
    </div>
  )
}

export default Read