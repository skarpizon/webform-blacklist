import React from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const ItemList = (props) => {

    const { data, onItemDeleted, onFilterTextChanged, onFilterTextCleared, onItemAdded, isLoading, FilterText, isError } = props;

    if (isError) return(<ErrorIndicator/>);
    const items = isLoading ? <Spinner/> : data.map((item) => {
        const {id, data} = item;
        return (
            <div key={id} className = "item">
                <p>{data}</p> 
                <button onClick={() => onItemDeleted(id)}><i className="fas fa-trash-alt" ></i></button>
            </div>
        );
    });

    return (
        <div>
            <section className= "wrapper">
                <div className= "cover">
                    <div className= "content">
                        {items}
                    </div>
                    
                    <div><input type = "text" className = "input" value={FilterText} onChange={onFilterTextChanged}/></div>
                    <button className="button button__reset" onClick={onFilterTextCleared}>Сброс</button>
                    <button className="button button__add" onClick={onItemAdded}>Добавить</button>
                    
                </div>
            </section>
        </div>
    );
}


export default ItemList;