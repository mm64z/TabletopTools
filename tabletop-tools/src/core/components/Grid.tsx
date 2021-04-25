import React from 'react';

export class Grid extends React.Component<{}, {}> {
  public props;

  constructor (props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="grid-stack">
        {this.props.children}
      </div>
     );
   }
}
