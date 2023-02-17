// by predefined modules called 'fs' commonly known as file system
// Use require() function and the function readFile() which takes two 
// argument first: file_name & second: callback function..


const fs=require('fs');

fs.readFile('sampleEx3.txt','utf-8',(err,data)=>{
    if(err)
        console.log("error");
    else
        console.log(data);
})

