import { useState } from "react"

const initialUsersForm = {
    username: '',
    password: '',
    email: '',
}

export const UsersForm = () => {
    
    const [usersForm, setUsersForm] = useState(initialUsersForm); 

    const { username, password, email } = usersForm;
    
    const onInputChange = ({ target }) => {
       // console.log(target.value);
       const { name, value } = target;
       setUsersForm({
            ...UsersForm,
            [name] : value,
       })
<<<<<<< Updated upstream
    }  
    
    const onSubmit = () => {
        event.preventDefault();
    }

    return (
           <form onSubmit={ onSubmit }>
=======
    }   

    const onSumit = ( event ) => {
        event.preventDefault(); //Utilizar para no reiniciar la pantalla.
        console.log(usersForm);
    }

    return (
           <form onSubmit={ onSumit }>
>>>>>>> Stashed changes
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Username"
                    name = "username"
                    value={username}
                    onChange={onInputChange} />
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Password"
                    type="password"
                    name = "password" 
                    value={password}
                    onChange={onInputChange} />
                <input 
                    className="form-control my-3 w-75" 
                    placeholder="Email"
                    name = "email"
                    value={email}
                    onChange={onInputChange} />    
                <button
                    className="btn btn-primary"
                    type="submit"
                    >
                        Crear
                </button>    
           </form>
    )
}