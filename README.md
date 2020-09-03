# Fuzz-FirebaseAWS-deployed
## Uses AWS lambda, AWS API Gateway for backend, ReactJs Frontend, Deployed using Firebase

### https://asanfuzz-try5.web.app/

Built on top of create-react-app
Output in console

 
-Sample Input
![Tux, the Linux mascot](/assets/images/tux.png)


-Sample Output
![Tux, the Linux mascot](/assets/images/tux.png)


-Relevant Console Log
![Tux, the Linux mascot](/assets/images/tux.png)


#### Issues and Improvements
-Minimal frontend. No csv file parse.
-The Fuzz algorithm can be optimised depending on the sort of received data.
-Function provides for multiple entries within single header, which frontend cannot utilise.
-Poor exception handling
-CORS enabled, all headers enabled. Insecure.
-Output visible only in console. 
