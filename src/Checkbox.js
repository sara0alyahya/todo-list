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
            <div>

                {this.props.todo === "" ? "" : (
                    <div>
                        {/* adding checkbox style  */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <div className="center">
                            <label className="labelT">
                                <input className="label__checkbox" type="checkbox" onClick={this.change} />
                                <span className="label__text">
                                    <span className="label__check">
                                        <i className="fa fa-check icon"></i>
                                    </span>
                                </span>
                            </label>
                        </div>
                        <p className={this.state.checked} >
                            {this.props.todo} <label className='labelX' onClick={() => this.props.removeItem(this.props.index)} > X </label> </p>

                    </div>)}

            </div>
        );
    }


}
export default Checkbox;