import React from "react";

export class InputComponent extends React.Component {
    render() {
        const { label, state, setState, type = "text" } = this.props;
        const id = `component-input-${label}`;

        return (
            <label htmlFor={id}>
                {label}
                <input
                    id={id}
                    type={type}
                    value={state}
                    placeholder=""
                    onChange={(event) => setState(event.target.value)}
                />
            </label>
        );
    }
}
