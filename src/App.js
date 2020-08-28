import React from 'react';
import styled from 'styled-components';
import Calculate from './components/Calculate';
import Delete from './components/Delete';
import Input from './components/Input';
import Method from './components/Method';
import Result from './components/Result';
import Blank from './components/Blank';
import add from './utils/add';
import divide from './utils/divide';
import multiply from './utils/multiply';
import subtract from './utils/subtract';
import { GROUP } from './constants';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 345px;
  margin: 200px auto;
  border: 1px solid #dadada;
  border-radius: 4px;
`;

const takeLast = (input) => {
  const previousInput = [...input];
  const last = previousInput.pop();

  return { lessLast: previousInput, last }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // input: ['(', '2', multiply, '3', subtract, '6', multiply, '2', ')', divide, '2'],
      // input: ["(", "(", "1", add, "2", ")", multiply, "3", add, "4", multiply, "5", ")"],
      input: [],
      result: null,
    }

    this.setValue = this.setValue.bind(this);
    this.setMethod = this.setMethod.bind(this);
    this.setResult = this.setResult.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.setGroup = this.setGroup.bind(this);
  }

  setGroup(value) {
    this.setState((previousState) => {
      const { lessLast, last } = takeLast(previousState.input);

      if (!last) {
        return {
          input: [value],
        };
      }

      if (typeof last === 'function') {
        return {
          input: [...lessLast, last, value],
        };
      }

      return {
        input: [...lessLast, last, value],
      };
    })
  }

  setDelete() {
    this.setState({
      result: null,
    });

    this.setState((previousState) => {
      const { lessLast, last } = takeLast(previousState.input);

      if (typeof last === 'function') {
        return {
          input: lessLast,
        }
      }

      const deleted = last.toString().slice(0, -1);
      
      if (!deleted) {
        return {
          input: lessLast,
        }
      }
      
      return {
        input: [...lessLast, deleted],
      }
    });
  }

  setValue(value) {
    this.setState((previousState) => {
      const { lessLast, last } = takeLast(previousState.input);

      if (!last) {
        return {
          input: [value],
        }
      }

      if (typeof last === 'function' || Object.values(GROUP).includes(last)) {
        return {
          input: [...lessLast, last, value],
        }
      }

      const newValue = `${last}${value}`;

      return {
        input: [...lessLast, isNaN(newValue) ? last : newValue],
      }
    });
  }

  setMethod(value) {
    this.setState((previousState) => {
      const { lessLast, last } = takeLast(previousState.input);

      if (!last) {
        return previousState;
      }

      if (last === GROUP.left) {
        return previousState;
      }

      if (typeof last === 'function') {
        return {
          input: [...lessLast, value],
        }
      }

      return {
        input: [...lessLast, last, value],
      }
    });
  }
  
  setResult(result) {
    this.setState({
      result,
      input: [],
    })
  }

  render() {
    const { input, result } = this.state;

    return (
      <Layout>
        <Result result={result} input={input} />
        <Input setInput={this.setGroup} value={GROUP.left} />
        <Input setInput={this.setGroup} value={GROUP.right} />
        <Blank />
        <Delete onClick={this.setDelete} />
        <Input setInput={this.setValue} value="7" />
        <Input setInput={this.setValue} value="8" />
        <Input setInput={this.setValue} value="9" />
        <Method setInput={this.setMethod} fn={divide} />
        <Input setInput={this.setValue} value="4" />
        <Input setInput={this.setValue} value="5" />
        <Input setInput={this.setValue} value="6" />
        <Method setInput={this.setMethod} fn={multiply} />
        <Input setInput={this.setValue} value="1" />
        <Input setInput={this.setValue} value="2" />
        <Input setInput={this.setValue} value="3" />
        <Method setInput={this.setMethod} fn={subtract} />
        <Input setInput={this.setValue} value="0" />
        <Input setInput={this.setValue} value="."/>
        <Calculate setResult={this.setResult} input={input} />
        <Method setInput={this.setMethod} fn={add} />
      </Layout>
    );
  }
}

export default App;
