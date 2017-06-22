import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    container: {
        textAlign: 'center'

    },

 root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 70,
    justifyContent: 'space-around',
    background: 'white',
  },
  gridList: {

    width: 900,
    height: 1000,
    marginTop: 50,
    overflowY: 'auto',
  },
}


export default class Show extends Component {
    render (){
        return(
            <div style={styles.root}>
                  <GridList
                    cellHeight={150}
                    style={styles.gridList}

                  >

                    {this.props.list.map((item,index) => (
                      <GridTile
                        key={index}
                        title={item.movie_name}
                        subtitle={<div>
                                  <span> Released:  <b>{item.movie_year}</b></span> <br/>
                                  <span> Genre:  <b>{item.movie_genre}</b></span></div>
                                  }

                      >
                      <img src='https://image.shutterstock.com/z/stock-photo-movie-clapper-and-film-reel-on-a-wooden-background-169841813.jpg' alt="moviepic"/>
                      </GridTile>
                    ))}
                  </GridList>
                </div>
        )
    }
}
