

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      items: ['a', 'b', 'c']
    };
    this.del = this.del.bind(this);
  }
  del(item) {
    const newItems = this.state.items
              .filter(i => i !== item)
    this.setState({
      items: newItems
    });
  }
  render() {
    const action = this.del
    return <React.Fragment>
           <h1>{this.state.name}</h1>
           <ul>
           {this.state.items
              .map(i => <Item name={i} 
                         action={action}/>)}
           </ul>
           </React.Fragment>;
  }
}

function Item(props) {
  const name = props.name
  const action = props.action
  return <li>
         <button onClick={() => action(name)}>
           {name}
         </button>
         </li>;
}

ReactDOM.render(
  <List name="List FZ" />,
  document.getElementById('list')
);

