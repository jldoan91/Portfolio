import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

const App = class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Intro />
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));