# webduino人體感測器實作自動感應燈與簡易型遠端開關電模組
* 自動感應燈
https://drive.google.com/file/d/1QOIQne-IeKDTfcIVg5TWVbCRrF_e97Jc/view?usp=drive_link
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142764807.jpg)  
* 遠端開關電
https://drive.google.com/file/d/1wabf-OdpnvittIR_xto539R9bcJGf7YB/view?usp=drive_link
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142781234.jpg)  
* 用google試算表來記錄
https://drive.google.com/file/d/1uNSPjJOZHzxsxA90RvhYV-GCKEF1lVJ7/view?usp=drive_link
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142799229.jpg)  
* 系統操作流程說明
將webduino設備組連接上網路，接上超聲波感測器和LED燈
當使用者在超聲波感應器感應範圍內15公分時，會觸發LED開關，並記錄觸發的時間、觸發器種類與LED的開關
或當使用者在電腦或手機上按下用戶界面上的按鈕時會觸發LED開關，並記錄觸發的時間、觸發器種類與LED的開關  
* 系統架構  
* 用戶界面:使用者可以點擊紅色按鈕來控制LED燈的開關  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142475056.jpg)    
* 事件處理器:當使用者觸發LED開關時，事件處理器將會記錄觸發的時間、觸發器種類與LED的開關  
* 超聲波感測器:當使用者在超聲波感應器感應範圍內15公分時，會觸發LED開關  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142488866.jpg)    
* LED燈: 可以由程式控制開關  
* webduino:用來與網路、LED燈、超聲波感測器設備連接與處理程式執行  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142518524.jpg)    
* Google試算表: 每當LED燈的狀態改變時，相關數據會被寫入Google試算表  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142536057.jpg)  
*系統程式截圖說明  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142621579.jpg)  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142649856.jpg)  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142672201.jpg)  
![image](https://github.com/WANG-YI-CHEN-411034018/-Project/blob/main/IMG/1712142681041.jpg)
