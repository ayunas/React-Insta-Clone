import React from 'react';


const withAuthenticate = (Comp1) => {

    return (
        class HOC extends React.Component {
            render() {
                return (
                    <div>
                        <Comp1 {...this.props} />
                    </div>
                )
            }
        }
    )
}

export default withAuthenticate;
