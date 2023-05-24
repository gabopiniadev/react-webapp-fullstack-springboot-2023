import { UsersRow } from "./UsersRow"

export const UsersList = ({users}) => {

    return (
        <>
            <p>Listado de Usuarios</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id, username, email}) => (
                            <UsersRow 
                                key={id} 
                                id={id} 
                                username={username} 
                                email={email}
                            />
                        ) )
                    }
                </tbody>

            </table>
        </>
    )
}