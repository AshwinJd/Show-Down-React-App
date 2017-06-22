import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Row, Col } from 'react-flexbox-grid';
import Drawer from 'material-ui/Drawer';
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ContentInbox from 'material-ui/svg-icons/content/filter-list';
import Show from './Show'
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



var request = require('superagent');

const style = {
  margin: 12,
}

const items = [];
for (let i = 1990; i < 2016; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Year ${i}`} />);
}

const names = [
  'Action',
  'Adventure',
  'Horror',
  'Comedy',
  'Fiction',
  'Documentary',
  'Romance',
];


const styles = {

  drawerButton : {

  },

  appBar: {
   textAlign: 'center',
  text: {
    textAlign: 'center',
    leftMargin: 100
  },

 },


};


class SearchPage extends Component {
  constructor(props) {

    super(props);
    this.state = {
      open: false,
      valueGenre: [],
      valueYear: 1990,
      query: 'Avatar',
      movieObj: [],
      movieGenreFilter: [],
      firstCheck: 0
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleChangeGenre = (event, index, valueGenre) => this.setState({valueGenre});

  handleChangeYear = (event, index, valueYear) => {
    this.setState({valueYear});
  };
  menuItems(valueGenre) {

    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={valueGenre && valueGenre.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  handleTextFieldChange = (e) => {

        this.setState({
            query: e.target.value,
            firstCheck : 1
        });

    }
  handleClick = (e) => {

          let URL = "http://localhost:8080/home/search/" + e;

          request
            .get(URL)
            .end((err,res)=>{
              if(err){
              console.log("err", err)
                this.setState({error: err})
              }
              //console.log("1", res.body[0].movie_name);

              else{
                //  console.log(res.body);
                this.setState({
                  movieObj : res.body
                })
              }
            });


        }


  handleClickFilter = (e) => {

    let URL = "http://localhost:8080/home/filter/" + e.toString();

            request
              .get(URL)
              .end((err,res)=>{
                if(err){
                console.log("err", err)
                  this.setState({error: err})
                }
                //console.log("1", res.body[0].movie_name);

                else{
                  // console.log(res.body);
                  this.setState({
                    movieGenreFilter : res.body
                  })
                }
              });
              // console.log(this.movieGenreFilter);


  }


    check = (movie) => {
            if (movie[0]) {
              return (

              <Show list = {movie} />

                )
            }else{
              return (
                <h4>not found</h4>
              )
            }
          }



  render() {
    return (

      <div style = {styles.container}>
        <AppBar style={styles.appBar}
            title="Show Down"
            onLeftIconButtonTouchTap = {this.handleToggle}
          />


        <Drawer open={this.state.open} width ={300} docked={false} >
          <AppBar title="Menu" onLeftIconButtonTouchTap = {this.handleToggle}/>
            <div >
              <Subheader>Options</Subheader>

              <ListItem
              primaryText="Filter"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                   key={1} >
                <SelectField
                  multiple={true}
                  autoWidth = {false}
                  hintText="Go on pick a Genre"
                  value={this.state.valueGenre}
                  onChange={this.handleChangeGenre} >

                {this.menuItems(this.state.valueGenre)}

                </SelectField>
                <FlatButton

                  secondary={true}
                  backgroundColor="#a4c639"
                  hoverColor="#8AA62F"
                  icon={<SearchIcon color={fullWhite} />}
                  onClick={this.handleClickFilter.bind(this, this.state.valueGenre)}
                  style={style}
                />
                </ListItem>,
                <ListItem
                  key={2}
                  disabled={true} >
                <SelectField
                value={this.state.valueYear}
                onChange={this.handleChangeYear}
                maxHeight={200}>

                {items}
                </SelectField>
                </ListItem>
              ]} />



              </div>
            <div>


            </div>
        </Drawer>

        <Row>
          <Col xs={12}>
            <Row center="xs">

              <Col xs={6}>
              <TextField  style={{width : '75%',marginTop: 100, backgroundColor:'white', }} hintText="Go Ahead Search for a Movie!!"
                onChange={this.handleTextFieldChange.bind(this)}  />
              <RaisedButton backgroundColor="#a4c639" icon={<SearchIcon color={fullWhite} />} style={style}
                onClick={this.handleClick.bind(this, this.state.query)}/>
              </Col>
            </Row>
          </Col>
        </Row>

        {this.check(this.state.movieObj)}
        {this.check(this.state.movieGenreFilter)}



      </div>

    );
  }
}

export default SearchPage;
