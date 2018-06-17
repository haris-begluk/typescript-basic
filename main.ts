let message = 'abc'; 
message.endsWith('c'); 

let message2; 
message2 = "abcd"; 
let endsWithC = message2.endsWith('c'); 

//Type Assertions 
let endsWithD = (<string>message).endsWith('d'); 
let alternativeWay = (message as string).endsWith('d');