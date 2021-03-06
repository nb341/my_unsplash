
import React from "react";
import Page from './PageComponent';
import Header from './HeaderComponent';
import { connect } from 'react-redux';
import { deleteItem, fetchPhotos, postPhoto, updateInput, updateSearchList } from '../redux/ActionCreators';

//Note to self delete search reducer, not needed anymore and combine it with photo reducer to filter image set

const mapStateToProps = state => {
  return {
    photos: state.photos,
    search: state.search
  }
}
const mapDispatchToProps = dispatch => ({
  fetchPhotos: ()=> {dispatch(fetchPhotos())},
  postPhoto: (label, photoUrl)=> dispatch(postPhoto(label, photoUrl)),
  deletePhoto: (id) => dispatch(deleteItem(id)),
  updateSearchList: (text) => dispatch(updateSearchList(text)),
  updateInput: (text) => dispatch(updateInput(text))
});


class Main extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchPhotos();
        //alert(this.props.search.text.length)
    }

    render(){
        return(

        <div className="container mx-auto py-6 px-12">
            <header>
                <Header 
                    postPhoto={this.props.postPhoto} 
                    photos={this.props.photos}
                    search = {this.props.search}
                    updateInput={this.props.updateInput}
                    updateSearchList = {this.props.updateSearchList}
                    fetchPhotos={this.props.fetchPhotos}
                    />
            </header>
            <section>
                <Page 
                    photos={this.props.photos} deletePhoto={this.props.deletePhoto}
                    search={this.props.search}
                />
            </section>
        </div>
            )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);