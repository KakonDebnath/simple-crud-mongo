import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const findUser = useLoaderData();
    console.log(findUser);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email }
        console.log(name, email);
        fetch(`http://localhost:5000/users/${findUser._id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    alert("Updated successfully");
                }else{
                    alert("Failed to update");
                }
            })
    }


    return (
        <div>
            This is update Page
            <p>name: {findUser.name}</p>
            <p>email: {findUser.email}</p>
            <form onSubmit={handleUpdate}>
                <p>
                    <input type="text" name="name" id="" defaultValue={findUser?.name} />
                </p>
                <p>
                    <input type="email" name="email" id="" defaultValue={findUser?.email} />
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;