'use strict';

const e = React.createElement;

class ChaoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const portrait = e('div', {key: 'portrait'}, e(
            'h1', {}, 'Hello React'
        ));

        const body = e('div', {}, [portrait]);

        return body;
    }
}

// Setup code
const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

root.render(e(ChaoApp));