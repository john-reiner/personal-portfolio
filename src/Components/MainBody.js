import React from 'react'

import {
    Switch,
    Route,
} from "react-router-dom";

import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About'
import Home from './Home'
import NoMatch from './NoMatch';

export default function MainBody(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" render={() => <Resume resumeInfo={props.data.resume}/>} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}
