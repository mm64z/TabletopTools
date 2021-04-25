import React from 'react';

export class GridItem extends React.Component<{}, {}> {
  public props;

  constructor (props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="grid-stack-item">
        {this.props.children}
      </div>
     );
   }
}
