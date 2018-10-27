import React, {Component} from 'react';

class InstructionInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event){
      const {updateRecipe, index, ...rest} = this.props;
      updateRecipe(['instructions', event.target.name], event.target.value, index);
    }

    handleSave(){
      const {instruction, updateRecipe, index, ...rest} = this.props;
      if (instruction.text) {
        let currentState = instruction.isSaved;
        updateRecipe(['instructions', 'isSaved'], !currentState, index);
      }
    }

    render(){
      const {instruction, index, deleteItem, ...rest} = this.props;

      return (
        <div className='instruction-input'>
          <div className='instruction-info'>
            <textarea className='name' name='text' placeholder='instruction input' 
              onChange={this.handleChange} 
              value={instruction.text} 
              disabled={instruction.isSaved}
            />
            <input className='button' type='submit' value={instruction.isSaved ? 'Edit' : 'Save'} 
              onClick={this.handleSave}
            />
            <input className='button' type='button' value='Delete' 
              onClick={() => deleteItem('instructions', index)}
            />
          </div>
        </div>)
    }
}

export default InstructionInput;