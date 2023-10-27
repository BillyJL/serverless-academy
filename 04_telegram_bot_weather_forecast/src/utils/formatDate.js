export function formateDate(inputDate) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const date = new Date(inputDate);
      
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const day = date.getDate();
      const monthIndex = date.getMonth();
      
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = months[monthIndex];
      
      return `${formattedHours}:${formattedMinutes}, ${formattedDay}-${formattedMonth}`;
}
