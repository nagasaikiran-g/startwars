import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  { Redirect } from 'react-router-dom';
import {SEARCH_PLANETS , searchPlanets, updatePlanetsScount, updateAuth, updatePlanetsScount0} from '../actions';
import {Planet} from './planet';
import {ADMIN} from '../constants';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            searchResults : [],
            maxPop:0,
            timerStarted:false
        }
    }
    clearTimer = () => {
        this.props.updatePlanetsScount0();
        this.setState({ timerStarted: false });
    }
    onSearchKeyUp = (evt) => {
        this.doneTypingInterval =5000;
        if (evt.target.value === this.state.searchField) {
            return false
        }
        this.setState({ searchField: evt.target.value });
        if(!this.state.timerStarted){
            this.setState({ timerStarted: true });
            var timer;
            clearTimeout(timer);
            timer = setTimeout(this.clearTimer, 60000)
        }
        this.searchPlanets(evt.target.value);
        if(this.stopExec){
            return
        }
        this.stopExec = true;
        if(this.props.name.toLowerCase() !== ADMIN.toLowerCase()){
            //var typingTimer;                //timer identifier
            //var doneTypingInterval = 5000;  //time in ms (5 seconds)
            //clearTimeout(typingTimer);
            this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval);
        }
    }
    onLogOut = () => {
        this.props.updateAuth(false);
        this.props.history.push('/');
    }
    doneTypingInterval = 5000;
    stopExec = false;
    typingTimer;
    doneTyping = () => {
        this.props.updatePlanetsScount();
        this.stopExec = false;
    }
    componentWillUnmount(){
        clearTimeout(this.typingTimer);
        console.log("timer cleared")
    }
    searchPlanets = (str) => {
        var results = [],
            planets = this.props.planets,
            maxPop = 0;
        if(this.props.restrict){
            return
        }
        if(planets.length > 0 && str !==''){
            planets.forEach((planet)=>{
                if(planet.name.toLowerCase().indexOf(str.toLowerCase()) > -1){
                    results.push(planet);
                    var pop = +(planet.population);
                    if(!isNaN(pop) && maxPop < pop){
                        maxPop = pop;
                    }
                }
            })
        }
        console.log(results)
        this.setState({searchResults:results,maxPop})
    }
    render() {
        if(!this.props.authorized){
            this.props.history.push('/login')
        }
        var plnts = [],width =0,mPop = this.state.maxPop;
        if(this.state.searchResults.length > 0){
            this.state.searchResults.forEach((res,i)=>{
                width = (+(res.population)*100)/mPop;
                width = isNaN(width) ? "0%" : width+"%";
                plnts.push(<Planet name={res.name} width={width} pop={+(res.population)} key={"$-"+i}/>)
            })
        }
        return (<div className="container">
            <div className="row col-sm-12"> 
            <div className="marginbtn col-sm-10"><h3>Welcome {this.props.name}.</h3></div>
            <button type="submit" onClick={this.onLogOut} className="btn  marginbtn">Logout</button>
            </div>
            
            {this.props.fetchState ? <p>Fetching Planets list...</p> : null}{this.props.restrict ? <p>Only 15 searches allowed in a Minute</p> : null}
            <div className="row">
                <div className="col-sm-4 marginbtn">
                    <input type="text" placeholder="Search for planets..." className="form-control" onKeyUp={this.onSearchKeyUp} onChange={this.onSearchChange}
                        disabled = {(this.props.restrict)? "disabled" : ""}/>
                </div>
                <div className="col-sm-12 marginbtn">
                    <div className="col-sm-12 searchbox">
                    {plnts.length ? plnts : null}
                    </div>

                </div>
            </div>
        </div>)
    }
}
const mapStateToProps = state => {
                                console.log(state);
                                return  {
                                    planets: state.planets,
                                    authorized: state.authorized, 
                                    fetchState: state.fetchState,
                                    name: state.name,
                                    restrict: state.restrict
                            }
                        };
const mapDispatchToProps = dispatch => bindActionCreators({updatePlanetsScount, updateAuth, updatePlanetsScount0}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
