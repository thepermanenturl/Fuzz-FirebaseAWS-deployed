

  
import React,{Component} from 'react'; 
import PapaParse from 'papaparse'

class Toppapa extends Component { 
   
    state = { 
      selectedFile: null
    }; 
    onFileChange = event => { 
      this.setState({ selectedFile: event.target.files[0] }); 
      
    }; 
    onFileUpload = () => { 
      const formData = new FormData(); 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
  
      console.log(this.state.selectedFile); 
      PapaParse.parse(this.selectedFile);
      // axios.post("api/uploadfile", formData); 
    }; 

    render() { 
     
      return ( 
        <div> 
            <h1> 
              Upload .csv file 
            </h1> 
            <h3> 
              or enter manually. 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload .csv
                </button> 
            </div> 
          {/* {this.fileData()}  */}
          
        </div> 
      ); 
    } 
  } 
  
  export default Toppapa; 
