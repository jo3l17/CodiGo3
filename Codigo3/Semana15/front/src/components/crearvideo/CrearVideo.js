import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class CrearVideo extends Component {
    textField = {
        marginLeft: '10px',
        marginRight: '10px',
        width: 200,
    }
    currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    render() {
        return (
            <form style={{ display: 'flex', flexWrap: 'wrap', }} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    styles={this.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    styles={this.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="standard-dense"
                    label="Dense"
                    // className={clsx(classes.textField, classes.dense)}
                    styles={this.textField}
                    margin="dense"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    styles={this.textField}
                    helperText="Some important text"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-textarea"
                    label="With placeholder multiline"
                    placeholder="Placeholder"
                    multiline
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    styles={this.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    styles={this.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    styles={this.textField}
                    SelectProps={{
                        MenuProps: {
                            // className: classes.menu,
                            style: { width: '200px' }
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    value={'EUR'}
                >
                    {this.currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Native select"
                    styles={this.textField}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            // className: classes.menu,
                            style: { width: '200px' }
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    value={'EUR'}
                >
                    {this.currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-bare"
                    styles={this.textField}
                    defaultValue="Bare"
                    margin="normal"
                />
            </form>
        );
    }
}
