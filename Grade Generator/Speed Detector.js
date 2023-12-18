function calculateSpeed(speed){
     const speedLimit = 70;
   const demeritPointUnit= 5;
    const suspentionPoints = 12;
    
    if (speed < speedLimit){
      return "Ok"
}else{
     let moreSpeedLimit =speed - speedLimit;
     let demeritPoint = Math.floor(moreSpeedLimit / demeritPointUnit);
     
     if (demeritPoint >= suspentionPoints){
          return "Lincese suspention, exceeded by:" + moreSpeedLimit;
     }else{
          return 'points ${demeritPoint}';
     }
  }
}
 console.log(calculateSpeed(150))