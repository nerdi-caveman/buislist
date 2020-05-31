# React Radio Button

React components for radio buttons

## Use

    <ReactRadioBtn onSelect={(value: string) => {console.log(value);}} id="size" type="b" items={["9inch", "12inch", "l"]} />

## Props

    onSelect        - event callback triggered when radio btn is selected
    items           - input value and label
    id              - unique name for styling and correct html function
    type            - choose the styling type of the radio button

### items

    Special format for type c: [{label:string, value:string}]
    Format for other types: [string]

### type

    There are 3 supported styling types a, b and c. Type c supports only array of objects while others support arrays of strings

### onSelect

    Function takes an argument(string of selected input value) ans is called on radio input change
