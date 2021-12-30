import React, { useEffect, useState } from 'react'
import { eventTypes } from '../services/eventTypes'
import { ToggleButton } from './ToggleButton'

export const EventTypes = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetchEvents()
    }, [])
    const fetchEvents = async () => {
        const events = await eventTypes()
        if (events.data) setEvents(events.data)
    }
    return (
        <div>
            <ToggleButton>{JSON.stringify(events)}</ToggleButton>
        </div>
    )
}