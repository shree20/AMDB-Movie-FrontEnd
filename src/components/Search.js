import React from 'react';



class Search extends React.Component {
    state = {
        title: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { title } = this.state;
        
            this.props.handleSendRequest(title)
        
    }

    handleInputTitle = (e) => {
        e.preventDefault();
        const title = e.target.value;
        this.setState({ title });

    }

    render() {
        const { title } = this.state;
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit} className="input-group">
                <input className="search-box input-group__item" placeholder="Search AMDB" type="text" onChange={this.handleInputTitle} value={title}  required/>
                <input className="button input-group__item nomarginbutton" type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search;