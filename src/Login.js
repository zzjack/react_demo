import React,{Component} from 'react';
import styled from 'styled-components';


class SwitchState extends Component{
    constructor(){
        super();
        this.state = {
            selected : {
                color:'#ea6f5a',
                borderBottom : '2px solid #ea6f5a'
            },
            unselected : {
                color:'#969696',
                borderBottom : 'none'
            },
        };
    }

    switchState(){
        this.setState(
            {
                selected : this.state.unselected,
                unselected:this.state.selected,
            }
        );
        FormTable.switchButton()
    }

    render(){
        return(
            <div>
                <a style={this.state.selected} onClick={this.switchState.bind(this)}>登录</a>
                <b>·</b>
                <a style={this.state.unselected} onClick={this.switchState.bind(this)}>注册</a>
            </div>
        )
    }
}

class FormTable extends Component{
    constructor(){
        super();
        this.state = {
            buttonSelected : 'Sign in',
            buttonUnselected : 'Sign up',
        }
    }

    static switchButton(){
        this.setState(
            {
                buttonSelected : 'Sign up'
            }
        )
    }

    render(){
        const FormStyle = styled.form`
        padding:10%;
        div:nth-child(1) {
            border-radius : 5px 5px 0 0;
            border-bottom-width : 0;
        }
        
        div:nth-child(2){
            border-radius :0 0 5px 5px;
        }
        `;
        const InputBar = styled.div`
        border-color : #c8c8c8;
        border-width : 1px;
        border-style : solid;
        width : 100%;
        height : 50px; 
        font-size : 20px;
        outline : none;
        input{
            border-width : 0px;
            display : inline;
            width : 88%;
            height : 45px; 
            font-size : 20px;
            outline : none;
            }
        span{
            margin : 0 11px 0 5px;
            display : inline;
            }
        `;

        const Button =  styled.input`
        margin-top : 10%;
        border-radius : 25px;
        background : #3194d0;
        border : #3194d0;
        color: #fff;
        border-color : #c8c8c8;
        border-width : 1px;
        border-style : solid;
        width : 100%;
        height : 50px; 
        font-size : 20px;
        outline : none;`;

        const CheckBox = styled.div`
        margin-top:'8px';
        input{
            background : #3194d0;
            border : #3194d0;
            color: #fff;
            border-color : #c8c8c8;
            border-width : 1px;
            border-style : solid; 
            display : inline;
        }
        span{
            fontSize:'15px
        }`;
        return(
            <FormStyle action={this.props.form.url} method={'POST'}>
                <InputBar>
                    <span className="glyphicon glyphicon-user"></span>
                    <input placeholder={'name'}/>
                </InputBar>
                <InputBar>
                    <span className="glyphicon glyphicon-lock"></span>
                    <input placeholder={'password'} type={'password'}/>
                </InputBar>
                <CheckBox>
                    <input type={'checkbox'} />
                    <span>Remember me</span>
                </CheckBox>
                <Button value={this.state.buttonSelected} type={'submit'}/>
            </FormStyle>
        )
    }
}

class Form extends Component{
    render(){
        //注意box-sizing!!!它是传统模式和w3c计算盒子模型的差异
        const FormBackground = styled.div`
        background : #ffffff;
        margin : 5% auto;
        width : 30%;
        border : 1px ;
        border-radius:4px;
        box-shadow:0 0 8px rgba(0,0,0,.1);`;

        const Title = styled.header`
        color : #ea6f5a;
        padding:20px;
        font : 40px bolder;
        letter-spacing ：0px;
        text-align : center;`;

        //居然要讲究顺序！顺序不同，渲染的结果不同，我真是服气了
        const FormHeader = styled.div`
        padding:50px 0 20px;
        text-align:center;
        a{
            margin:20px;
            color:#969696;
            font-weight:700;
            font-size:18px;
            padding:10px;
        }
        a:hover{
            border-bottom : 2px solid #ea6f5a;
            text-decoration-line : none;
            cursor:pointer;
        }
        a:focus{
            text-decoration-line : none;
        }
        b{
            color:#969696;
        }`;

        return(
            <div>
                <FormBackground>
                    <Title>{this.props.form.header}</Title>
                    <FormHeader>
                        <SwitchState />
                    </FormHeader>
                    <FormTable form={this.props}/>
                </FormBackground>
            </div>)
    };
}

export default Form;





























