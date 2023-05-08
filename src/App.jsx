import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data Added successfully");
          form.reset();
        } else {
          alert("Sorry data could not be inserted");
        }
        console.log(data)
      })
    console.log(newUser);
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
