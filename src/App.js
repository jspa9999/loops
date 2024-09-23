import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <button onClick={()=>{

    
      let sciMarks = 89;
      while (sciMarks>=35) {
        console.log(`${sciMarks}`);
        sciMarks++;
      }
     }}>While</button>

     <button onClick={()=>{
      let hinMarks=39;
      do {
        console.log("student passed in hindi")
      } while (hinMarks>=35);
     }}>
     Do While</button>

     <button onClick={()=>{

      
       for(let i=20;i<=450;i++){
        console.log(i);
       }
     }}>For</button>

     <button onClick={()=>{
      
          for( let i=1;i<=5;i++){
             for(let j=20;j<=100;j++){
              console.log(`${i}*${j}=${i*j}`);
             }
          }
         
     }}>nestedloops</button>

     <button onClick={()=>{
      for (let i=1;i<=9999;i++){
        console.log(i);
        if(i==9000){
          break;
        }
      }

     }}>Break</button>

     <button onClick={()=>{
      for(let j=1;j<=50000;j++){
       if(j>5000&&j<35000){
       continue;
       }
       console.log(j);
      }
     }}>Con</button>

     <button onClick={()=>{
        for(let i=1;i<=100;i++){
          if(i==5||i==7||i==9||i==8||i==15||i==34||i==25||i==46||i==57||i==68||i==97){
            continue
          }
         for(let j=1; j<=100;j++){
            if(j==11||j==2||j==15||j==19||j==11||j==27||j==46||j==54){
           continue;
            }
          
          console.log(`${i}*${j}=${i*j}`);
          }
        }
        }}>Task</button>
     
    </div>


  );
}

export default App;
