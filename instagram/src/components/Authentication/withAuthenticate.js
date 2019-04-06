import React from 'react';


const withAuthenticate = (Comp1,Comp2) => {

    return (
        class HOC extends React.Component {
            render() {
                return (
                    <div>
                         { (localStorage.length === 2 && localStorage.username !== '' && localStorage.password !== '') ? <Comp1 {...this.props} /> : <Comp2 {...this.props} /> }
                    </div>
                )
            }
        }
    )
}

export default withAuthenticate;
