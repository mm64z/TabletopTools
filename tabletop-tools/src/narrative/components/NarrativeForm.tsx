import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class NarrativeForm extends React.Component {
 render() {
   return (
     <div className="NarrativeForm">
       <Form>
         <Form.Group>
           <Form.Label>Title</Form.Label>
           <Form.Control type="input" placeholder="Title" />
         </Form.Group>
         <Form.Group>
           <Form.Label>Summary</Form.Label>
           <Form.Control type="textarea" placeholder="Describe what happens in this plot beat" />
         </Form.Group>
         <Form.Group>
           <Form.Label>Outcomes</Form.Label>
           <Form.Control type="input" placeholder="Title the outcomes" />
         </Form.Group>
         <Button variant="primary" type="submit">Save</Button>
       </Form>
     </div>
   );
 }
}
