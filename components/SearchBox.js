import React from 'react';


const SearchBox = (props) => {
    return (
        <div className="container-fluid">
            <div className='col col-sm-4'>
                <input
                    className='form-control'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder='Enter Movie Title'
                ></input>
            </div>
            <div className='col col-sm-4'>
                <input
                    className='form-control'
                    value={props.value}
                    onChange={(event) => props.setSearchValue1(event.target.value)}
                    placeholder='Enter Movie year'
                ></input>
            </div>
        </div>

    );
};

export default SearchBox;