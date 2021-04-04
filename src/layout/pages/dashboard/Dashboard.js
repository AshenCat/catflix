import React from 'react'
import { withRouter } from 'react-router'

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard-statistics-section" style={{height: "800px", background: 'white'}}></div>
            <div className="dashboard-user-videos" style={{height: "800px", background: 'white'}}></div>
        </div>
    )
}

export default withRouter(Dashboard)
