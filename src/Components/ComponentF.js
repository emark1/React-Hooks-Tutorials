import React, {useState, useEffect} from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user=> {
                        return (
                            <div>
                                <ChannelContext.Consumer>
                                    {
                                        channel => {
                                            return <div>Last name: {channel}</div>
                                        }
                                    }
                                </ChannelContext.Consumer>
                                <div>User Context Value: {user}</div>
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF