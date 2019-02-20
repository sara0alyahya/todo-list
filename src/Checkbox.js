import React from 'react'
class Checkbox extends React.Component {
    state = {
        checked: 'false',
    }

    change = () => {
        if (this.state.checked === 'false') {
            this.setState({ checked: 'checked' });
        } else {
            this.setState({ checked: 'false' })
        }
    }

    render() {
        // console.log(this.state);

        return (
            <div >
                {this.props.todo === "" ? "" : (
                    <div>
                        <p className={this.state.checked} onClick={this.change}>
                            <input type='checkbox' /> {this.props.todo} <label className='label' onClick={() => this.props.removeItem(this.props.index)} > X </label> </p>

                    </div>)}

            </div>
        );
    }


}
export default Checkbox;