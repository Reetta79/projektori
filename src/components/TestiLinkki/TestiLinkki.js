import React from 'react';
import { Link } from 'react-router';

class Linkki extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/react">Muokkaa</Link></li>
                </ul>
            </div>
        );
    }
}

export default Linkki;