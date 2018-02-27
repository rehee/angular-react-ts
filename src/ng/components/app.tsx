import * as React from 'react';
import HomeModule from '../../modules/home-module';
class App extends React.Component<HomeModule> {
    props: HomeModule;
    render() {
        return (
            <div>
                this is from react {this.props.Title} <br />
                <input type="text" value={this.props.Title} onChange={this.props.SetTitle} />
            </div>
        );
    }
}

export default App;