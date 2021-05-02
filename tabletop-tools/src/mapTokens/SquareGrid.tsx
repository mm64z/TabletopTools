import React from 'react';
import { Rnd, DraggableData, Position, RndDragEvent } from 'react-rnd';
import Silverflame from '../resources/Silverflame-quick.png';


class SquareGrid extends React.Component {

  public state: {
    dragArrowStart: Position,
    dragArrowCurrent: Position,
    dragArrowDragging: boolean
  } = {
    dragArrowStart: {x: 0, y:0},
    dragArrowCurrent: {x: 0, y:0},
    dragArrowDragging: false,
  };

  constructor(props) {
    super(props);
    this.setState({
      dragArrowStart: {x: 0, y:0},
      dragArrowCurrent: {x: 0, y:0},
      dragArrowDragging: false,
    });
  }


  startMovement = ( e: RndDragEvent, data: DraggableData): void => {
    console.log("start ", data.x, data.y);
     this.setState({
      dragArrowStart: {x: data.x-23, y: data.y+8},
      dragArrowCurrent: {x: data.x-23, y: data.y+8},
      dragArrowDragging: true
    });
  }
  dragMovement = ( e: RndDragEvent, data: DraggableData): void => {
    console.log("drag ", data.x, data.y);
    this.setState({
      dragArrowCurrent: {x: this.state.dragArrowCurrent.x + data.deltaX,
                         y: this.state.dragArrowCurrent.y + data.deltaY}
    });
  }
  endMovement = ( e: RndDragEvent, data: DraggableData): void => {
    console.log("END ", data.x, data.y);
    this.setState({
      dragArrowDragging: false
    });
  }


  render() {
    console.log("render ", this.state);
    const gridSize = 64;
    return (
      <div className="SquareGrid" style={{position: 'relative', width:'100%',height:'800px'}}>

        <Rnd
          default={{
            x: 128,
            y: 128,
            width: 64,
            height: 64,
          }}
          minWidth={16}
          minHeight={16}
          dragGrid={[64,64]}
          resizeGrid={[16,16]}
          bounds="window"
          onDragStart={this.startMovement}
          onDrag={this.dragMovement}
          onDragStop={this.endMovement}
        >
          <Box />
        </Rnd>
        <svg className="bgGrid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
              <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke="gray" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width={gridSize*5} height={gridSize*5} patternUnits="userSpaceOnUse">
              <rect width={gridSize*5} height={gridSize*5} fill="url(#smallGrid)"/>
              <path d={`M ${gridSize*5} 0 L 0 0 0 ${gridSize*5}`} fill="none" stroke="gray" strokeWidth="1"/>
            </pattern>
            <marker id="arrowhead" markerWidth="10" markerHeight="7"
              refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          {this.state.dragArrowDragging ?
          <line x1={this.state.dragArrowStart.x} y1={this.state.dragArrowStart.y}
                x2={this.state.dragArrowCurrent.x} y2={this.state.dragArrowCurrent.y}
                style={{stroke:'rgb(0,0,0)', strokeWidth:'2'}}
                markerEnd="url(#arrowhead)"/> : false }

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

      </div>
    );
  }
}
const Box = () => (
  <div
    className="box"
    style={{ margin: 0, height: '100%' }}
  >
          <img src={Silverflame} style={{ height: '100%', width: '100%' }} draggable="false" alt="player icon" />
  </div>
);


export default SquareGrid;
