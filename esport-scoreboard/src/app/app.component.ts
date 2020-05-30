import { Component, OnInit } from '@angular/core';
import * as csv from 'csvtojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {}
  
  scores=[]

  ngOnInit(): void {
    
  }

  title = 'esport-scoreboard';

  button() {
    var x = this.readCsv()
    this.scores.push(x)
    console.log(x)
    console.log(this.readCsv())
  }

  readCsv() {
    var file = document.querySelector("#file-input").files[0];
    var result;
    // perform validation on file type & size if required

    // read the file
    var reader = new FileReader();

    // file reading started
    reader.addEventListener('loadstart', function() {
        console.log('File reading started');
    });

    // file reading finished successfully
    reader.addEventListener('load', function(e) {
      // contents of file in variable     
        var text = e.target.result;
        csv().fromString(text.toString())
        .then((jsonObj)=>{
          result = jsonObj;
        })
    });

    // file reading failed
    reader.addEventListener('error', function() {
        alert('Error : Failed to read file');
    });

    // file read progress 
    reader.addEventListener('progress', function(e) {
        if(e.lengthComputable == true) {
          var percent_read = Math.floor((e.loaded/e.total)*100);
          console.log(percent_read + '% read');
        }
    });

    // read as text file
    reader.readAsText(file);
    console.log("result = "+result)
    return(result)
  }
  
}
