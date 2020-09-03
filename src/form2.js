import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { PostSend } from './sendd'

var abc='{"train_fields":['
var tes='"test_fields":['
var als=''
var t=0
var t2=0
class EssayForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
   
      head:'',
      desc:'',
      fuzsug:'',
      exval:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitTrain = this.handleSubmitTrain.bind(this);

  }
  
  handleChange = (event) => {
    
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});

  };
  addEntry=()=>{
      if (t===0)
      {
        abc=abc.concat(JSON.stringify(this.state))
        t=1;
      }
      else
        {
          t=t+1
          abc=abc.concat(',')
          abc=abc.concat(JSON.stringify(this.state))
        }
      console.log(abc)

  }
  addEntryTest=()=>{
    if (t2===0)
    {
      tes=tes.concat(JSON.stringify(this.state))
      t2=1;
    }
    else
      {
        t2=t2+1
        tes=tes.concat(',')
        tes=tes.concat(JSON.stringify(this.state))
      }
    console.log(tes)

}
  handleSubmitTest = (event) => {

    //console.log('An essay was submitted: ' + this.state.head);
    //this.addEntry();
    tes=tes.concat(']}');
    console.log(tes);
    //postSend(abc)
    //event.preventDefault();
  };
   
  handleSubmitTrain = (event) => {

    //console.log('An essay was submitted: ' + this.state.head);
    //this.addEntry();
    abc=abc.concat(']');
    console.log(abc);
    //postSend(abc)
    //event.preventDefault();
  };
   handleBigSubmit = (event) =>
   {
    als=als.concat(abc)
    als=als.concat(',')
    als=als.concat(tes)
    //console.log(als)
    //console.log(JSON.parse(als))
    //console.log(JSON.stringify(als))
    PostSend(JSON.parse(als))

   }
formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

render = () => {
    return (
      <>
      {/* <toppapa /> */}
      {/*console.log(abc)*/}
      <h1>Enter Train Fields</h1>
      <Form name="dynamic_form_item" {...this.formItemLayoutWithOutLabel} onFinish={this.handleSubmitTrain}>
        <Form.List name="Train">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                  //   {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  //   label={index === 0 ? 'Passengers' : ''}
                    label={<><h2>Entry {index}</h2></>}
                    required={true}
                    key={field.key}
                  >
                  <Form.Item
                    //{...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input Header.",
                    },
                    ]}
                      noStyle
                    >
                    <Input 
                    placeholder="Header" 
                    name="head"            
                    onChange={this.handleChange}
                    style={{ width: '60%' }} 
                    />
                    </Form.Item>
                    <Form.Item
                      //{...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input Description.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Description"                     
                      name="desc"            
                      onChange={this.handleChange}
                      style={{ width: '60%' }} />
                    </Form.Item>
                    <Form.Item
                      //{...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input Fuzzy Suggestions.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Fuzzy Suggestions"                     
                      name="fuzsug"            
                      onChange={this.handleChange}
                      style={{ width: '60%' }} />
                    </Form.Item>
                    <Form.Item
                      //{...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input Example Values",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Example Values"                     
                      name="exval"            
                      onChange={this.handleChange}
                      style={{ width: '60%' }} />
                    </Form.Item>


                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: '60%' }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
          
        </Form.List>
        <Button onClick={this.addEntry}>Add train entry</Button>
        <Form.Item>
          <Button htmlType="submit">
            Finalise Train entry
          </Button>
        </Form.Item>
      </Form>

      


      {/* <toppapa /> */}
      {/*console.log(tes)*/}
      <h1>Enter Test Fields</h1>
      <Form name="dynamic_form_item" {...this.formItemLayoutWithOutLabel} onFinish={this.handleSubmitTest}>
        <Form.List name="Test">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                  //   {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  //   label={index === 0 ? 'Passengers' : ''}
                    label={<><h2>Entry {index}</h2></>}
                    required={true}
                    key={field.key}
                  >
                  <Form.Item
                    //{...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input Header.",
                    },
                    ]}
                      noStyle
                    >
                    <Input 
                    placeholder="Header" 
                    name="head"            
                    onChange={this.handleChange}
                    style={{ width: '60%' }} 
                    />
                    </Form.Item>
                    
                    <Form.Item
                      //{...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input Example Values",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Example Values"                     
                      name="exval"            
                      onChange={this.handleChange}
                      style={{ width: '60%' }} />
                    </Form.Item>   
          
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: '60%' }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
          
        </Form.List>
        <Button onClick={this.addEntryTest}>Add test entry</Button>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Finalise Test 
          </Button>
        </Form.Item>
      </Form>
      <br/> <br/> 
      <Button type="primary" onClick={this.handleBigSubmit}>Total Submit</Button>

      <br/> 
      

      

      
      </>
    );
  
};
}

export default EssayForm;