// import {useState} from 'react';
//
// const LoginForm = (isLoggedIn, setIsLoggedIn) => {
//
//     const [userName, setUserName] = useState('user');
//     const [password, setPassword] = useState('secret');
//
//     const users = [{user: "Jim", password: "secret"}, {user: "Bob", password: "secret2"}]
//
//     const handleSubmit = (inputs) => {
//         inputs.preventDefault();
//         console.log(userName, password);
//         const account = users.find((user) => user.username === username);
//         if (account && account.password === password) {
//             localStorage.setItem("authenticated", true);
//             navigate("/dashboard");
//         }
//     }
//
//     return(
//         <>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <label> Username </label>
//                 <input type="text" id="userName" onChange={input => setUserName(input.target.value)} required/>
//                 <br/>
//                 <label> Password </label>
//                 <input type="password" id="password" onChange={input => setPassword((input.target.value))} required/>
//                 <br/>
//                 <button> Submit details </button>
//             </form>
//         </>
//             )
// }
//
// export default LoginForm;