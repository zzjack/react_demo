import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Login';
import registerServiceWorker from './registerServiceWorker';



// const loginFont = {
//     url:'http://www.baidu.com',
//     header : 'MoByHeart',
// };
//
// ReactDOM.render(
//     <Form form={loginFont}/>,
//     document.getElementById('root')
// );

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

class Index extends Component{
    render(){
        return(
            <div>
                {users.map((user)=>{
                    return(<div>
                        <div>name:{user.username}</div>
                        <div>age:{user.age}</div>
                        <div>gender:{user.gender}</div>
                    </div>)
                })}
                </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

registerServiceWorker();













































