import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkCredentials } from '../actions';
import { NavLink } from 'react-router-dom';
import Search from './search';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            count: 0,
            showError: false,
            showLoading: false
            
        }
    }
    componentWillReceiveProps(nxtProps){
        if(nxtProps.count > this.state.count && !nxtProps.authorized){
            this.setState({showError:true})
        }
    }
    onNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }
    onPassChange = (evt) => {
        this.setState({ password: evt.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {name:this.state.name,password:this.state.password};
        if(data.name === '' || data.password === ''){
            alert("please enter both name and password");
            return
        }
        this.setState({ password: "",name:"",count:this.props.count,showLoading:true});
        this.props.checkCredentials(data);
        //this.setState({ password: "",name:"",count:this.props.count,showLoading:true});
    }
    render() {
        if(this.props.authorized){
            this.props.history.push('/search')
        }
        return (<div className="col-sm-4 offset-sm-4"><br/><h3>Please enter details</h3>
        {this.state.showLoading && !this.state.showError? <div id="overlay"></div>: ""}
        <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" onChange={this.onNameChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" value={this.state.name}/>
           </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" onChange={this.onPassChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password}/>
            </div>
            <button type="submit" onClick={this.onSubmit} className="btn btn-primary marginbtn">Submit</button>
            <NavLink to='/' className="btn btn-secondary marginbtn"> Back </NavLink> 
          </form>{this.state.showError ? <p>Invalid details</p> : null}
          </div>)
    }
}
const mapStateToProps = state => { console.log(state); return { authorized: state.authorized,count: state.lCount } };
const mapDispatchToProps = dispatch => bindActionCreators({ checkCredentials }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);