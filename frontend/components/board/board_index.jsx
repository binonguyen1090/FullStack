import React from 'react';
import { Link } from 'react-router-dom';
import BoardShow from './board_show'
import BoardIndexItem from './board_index_items'
/*
Export an `EventIndex` presentational component that renders a list (`ul`) of
`EventIndexItems`. This component should receive `events` from the store as a 
prop via its container and fetch them once it has successfully mounted to the 
DOM. Below the `ul`, add a link to the new event page with text 'New Event'.
*/

export default class BoardIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.currentUserId);
    }

    render() {
        if  (!this.props.boards){
            return null
        }
        const { boards } = this.props

        return (
            <div>
                This is from Board_Index_Component
                <ul>
                    {boards.map((board,idx) => <BoardIndexItem board={board} key={idx}/>)}
                </ul>
                
            </div>
        )
    }
}