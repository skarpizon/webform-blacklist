import React from 'react'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const withData = (View) => {
    return class extends React.Component{

        state = {
            data: null,
            loading: false,
            error: false,
            filterText: ''
        };

        componentDidMount(){
            this.setState({
                loading: true,
                error:false
            });
            this.props.getData()
                .then((data) => {
                this.setState({
                    data,
                    loading: false
                });
                })
                .catch(()=> {
                this.setState({
                    loading: false,
                    error: true
                });
                })
        };

        changeFilterText = (text) => {
            this.setState(() => {
                return {
                    filterText: text
                };
            })
        };

        onFilterTextChanged = (event) => {
            this.changeFilterText(event.target.value);
        };

        onFilterTextCleared = async () => {
            await this.changeFilterText('');
        }

        getFilteredData = () => {
            let filData = this.state.data;
            if (filData===null) return this.state.data;
            return filData.filter((item) => {
                return (item.data.indexOf(this.state.filterText)+1) ? true : false
            });
        }

         onItemDeleted = async (id) => {
            await this.props.deleteItem(id);
            this.componentDidMount();
        }
        

        onItemAdded = async () => {
            await this.props.addItem(this.state.filterText);
            this.onFilterTextCleared();
            this.componentDidMount();
        }

        render() {
        const { data, loading, error } = this.state;

        
        return <View {...this.props} data={this.getFilteredData()} 
                                        isLoading={(!data)||(loading)}
                                        isError={error}
                                        onItemDeleted={this.onItemDeleted} 
                                        onFilterTextChanged={this.onFilterTextChanged} 
                                        onFilterTextCleared={this.onFilterTextCleared}
                                        FilterText={this.state.filterText}
                                        onItemAdded={this.onItemAdded}/>;
        }
    };
};

export default withData;