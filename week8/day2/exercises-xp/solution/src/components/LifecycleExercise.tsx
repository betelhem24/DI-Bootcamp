import React, { Component } from 'react';

interface State {
    favoriteColor: string;
    show: boolean;
}

class LifecycleExercise extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            favoriteColor: 'red',
            show: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps: {}, nextState: State) {
        // Determine if the component should re-render
        return true;
    }

    componentDidUpdate(prevProps: {}, prevState: State) {
        if (prevState.favoriteColor !== this.state.favoriteColor) {
            console.log(`Updated color from ${prevState.favoriteColor} to ${this.state.favoriteColor}`);
        }
    }

    getSnapshotBeforeUpdate(prevProps: {}, prevState: State) {
        const div = document.getElementById("div1");
        if (div) {
            return div.innerHTML;
        }
        return null;
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    deleteHeader = () => {
        this.setState({ show: false });
    }

    render() {
        let comp;
        if (this.state.show) {
            comp = <Child />;
        }
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Lifecycle Exercise</h5>
                    <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                    <button className="btn btn-info mr-2" onClick={this.changeColor}>
                        Change Color to Blue
                    </button>

                    <div id="div1"></div>

                    <hr />
                    {comp}
                    <button type="button" className="btn btn-danger mt-3" onClick={this.deleteHeader}>Delete Header</button>
                </div>
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default LifecycleExercise;
