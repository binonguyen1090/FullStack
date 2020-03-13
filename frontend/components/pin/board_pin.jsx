

import React from 'react';
import { Link } from 'react-router-dom';
import Profile_container from '../profile/profile_container'
import BoardIndexContainer from '../board/board_index_container'
import BoardPinIndexItem from '../pin/board_pin_index_item'

export default class BoardPins extends React.Component {
    constructor(props) {
        
        super(props);
    }
    componentDidMount() {
        
        this.props.fetchOneBoardPins(this.props.match.params.boardId);
    }

    render() {
        
        const {pins} = this.props 
        if (!pins){
            return null
        }
        // let userPins = this.props.pins.map((pin, i) => {
        //     return (
        //         <div>
        //             <Link to={`pins/${pin.id}`} key={i}> {pin.title} </Link>


        //         </div>

        //     )
        // })

        // let id = this.props.match.params.userId
        // let user = this.props.currentUser
        // let name = (user.fname === null || user.lname === null) ? (user.email) : (user.fname + " " + user.lname)
        // let location = (user.location === null) ? "" : (user.location)
        return (
            // <div>Hello, this is the Pin in board, from Board_Pin.jsx
            //     <BoardPinIndexItem/>
            // </div>
            <div>
                <ul>
                    {
                        this.props.pins.map((pin, idx) =>
                            <BoardPinIndexItem
                                key={idx}
                                pin={pin}
                                // currentUserId={this.props.currentUserId}
                                // user={this.props.user}
                                src={pin.photoUrl}
                            />
                        )   
                    }
                </ul>
            </div>
            // 
            //     </div>

            //     <div className="user_pins_container">
            //         <Link to={`/users/${id}`}><i className="fas fa-long-arrow-alt-left"></i></Link>              

            //         <ul >
            //             {this.props.pins.map(pin => {
            //                     return (
            //                         <li key={pin.id}>
            //                             <h2>{pin.title}</h2>
            //                             <img src={pin.photoUrl} />
            //                         </li>
            //                     );
            //                 })}


            //             {
            //                 this.props.pins.map((pin, idx) =>
            //                     <PinUserIndexItem
            //                         key={idx}
            //                         pin={pin}
            //                         currentUserId={this.props.currentUserId}
            //                         user={this.props.user}
            //                         src={pin.photoUrl}
            //                     />
            //                 )
            //             }
            //         </ul>

            //     </div>
            // </div>
        )
    }

};