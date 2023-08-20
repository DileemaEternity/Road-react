
const LoginForm = (props) => {
        return (
            <form>
                <div>
                    <input placeholder={"Login"} />
                </div>
                <div>
                <input placeholder={"Password"} />
                </div>
                <div>
                <input type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }

    const Login = (props) => {
            return <div>
                <h1>LOGIN</h1>
                <LoginForm />
            </div>
        }
        export default Login;  

// import React from 'react';
// import { reduxForm, Field, reset } from 'redux-form';
// const LoginForm = (props) => {
//     return (
//         <form>
//             <div>
//                 <input placeholder={"Login"} />
//             </div>
//             <div>
//             <input placeholder={"Password"} />
//             </div>
//             <div>
//             <input type={'checkbox'} /> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

// const Login = (props) => {
//     return <div>
//         <h1>LOGIN</h1>
//         <LoginReduxForm />
//     </div>
// }
// export default Login;