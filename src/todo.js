import React, {useState, useEffect} from 'react';

function Todo(props) {
    return (
        <div>

            {/*<div className="grid grid-cols-2">*/}


            {/*</div>*/}

            <div className={'border p-6'}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <input type="text" className={'border'}/>
                    &nbsp;<span className={'p-2 border bg-blue-600 rounded pr-3 pl-3 text-white'}>Submit</span>

                </div>

                <div className={'p-5'}>

                    <div className={'bg-gray-100 p-2 rounded'}>
                        <ul>
                            <li className={' border-b-2 border-cool-gray-200 p-1'}>
                                <input type="checkbox"/>&nbsp;&nbsp;
                                <span className={'text-gray-700 font-semibold text-sm'}>some item</span>
                                <i className={'fa fa-trash text-red-400 float-right'} />
                            </li>
                        </ul>
                    </div>

                </div>

            </div>




        </div>
    );
}

export default Todo;
