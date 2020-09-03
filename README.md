# Fuzz-FirebaseAWS-deployed
## Uses AWS lambda, AWS API Gateway for backend, ReactJs Frontend, Deployed using Firebase

### https://asanfuzz-try5.web.app/

Built on top of create-react-app


_Output in console_

 
### Sample Input


![Input](/Screengrabs/Input.png)


### Sample Output


![Output](/Screengrabs/Output.png)


### Relevant Console Log


![Console](/Screengrabs/Console.png)


#### Issues and Improvements
- Minimal frontend. No csv file parse.
- The Fuzz algorithm can be optimised depending on the sort of received data.
- Function provides for multiple entries within single header, which frontend cannot utilise.
- Poor exception handling
- CORS enabled, all headers enabled. Insecure.
- Output visible only in console. 



Dev-Spandan Bhattacharya
