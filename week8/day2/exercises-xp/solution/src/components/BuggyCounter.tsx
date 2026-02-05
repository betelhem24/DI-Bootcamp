import React, { Component } from 'react';

interface State {
    counter: number;
}

class BuggyCounter extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    };

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Buggy Counter</h5>
                    <h1 className="display-4">{this.state.counter}</h1>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Click Me
                    </button>
                    <p className="mt-2 text-muted">Clicking up to 5 will crash this component.</p>
                </div>
            </div>
        );
    }
}

export default BuggyCounter;
