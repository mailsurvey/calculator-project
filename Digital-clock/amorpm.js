import getHours from './clock-hour.js';

const getAmOrPm = () =>{
    
    //set for 24hrs format
    if (getHours < 12 ){

        return 'AM';
    }
        return 'PM';
    
}

export default getAmOrPm();